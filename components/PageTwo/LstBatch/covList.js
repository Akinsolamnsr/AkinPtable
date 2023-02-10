



const CovList=(prop)=>{
    const {data}=prop
    const Sort=data.sort((x,y)=>{
    const a=  isNaN(parseInt(y.Reactive.covalentRadius))?0:parseInt(y.Reactive.covalentRadius)
    const b=isNaN(parseInt(x.Reactive.covalentRadius))?0:parseInt(x.Reactive.covalentRadius)
      if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
    
    })


      return(
          <div  className="w-full h-full flex flex-wrap overflow-auto">
             {
              Sort.map((x,i)=>{
                  const value=parseFloat(x.Reactive.covalentRadius)
                  const CovVal=isNaN(value)?'':value
                  const wdth=(CovVal/225)*4   
                  const hgt=(CovVal/225)*4
                  
                  return(
                    <div key={`covelentList${i}`} className="w-48 h-[4rem] ml-4 mt-4 shadow-lg flex flex-col text-[#260033] ">
                      <div className={` flex `}>
                    <div className="bg-[#cc33ff] font-bold text-center text-[1.4rem] rounded-full" style={{width:`${wdth}rem`,height:`${hgt}rem`}}>{x.General.symbol}</div>
                 <div className="flex flex-col ml-8 ">
                  <div className="text-center">{CovVal}</div>
                  <div className="text-center">{x.General.name}</div>
                 </div>
                 
                    </div>
                   
                    </div>
                  )
                   })
             }
          </div>
      )
  }
  
   export default CovList