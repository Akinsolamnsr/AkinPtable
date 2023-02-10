



const EmpList=(prop)=>{
    const {data}=prop
    const Sort=data.sort((x,y)=>{
    const a=  isNaN(parseInt(y.Reactive.radius))?0:parseInt(y.Reactive.radius)
    const b=isNaN(parseInt(x.Reactive.radius))?0:parseInt(x.Reactive.radius)
      if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
    
    })

     
      return(
          <div className="w-full h-full flex flex-wrap overflow-auto">
             {
              Sort.map((x,i)=>{
                  const value=parseFloat(x.Reactive.radius)
                  const EmpVal=isNaN(value)?'':value
                  const wdth=(EmpVal/298)*4   
                  const hgt=(EmpVal/298)*4
                  
                  return(
                    <div key={`EmriList${i}`} className="w-48 h-[4rem] ml-4 mt-4 shadow-lg flex flex-col text-[#0d001a] ">
                      <div className={` flex `}>
                    <div className="bg-[#a64dff] font-bold text-center text-[1.4rem] rounded-full" style={{width:`${wdth}rem`,height:`${hgt}rem`}}>{x.General.symbol}</div>
                 <div className="flex flex-col ml-8 ">
                  <div className="text-center">{EmpVal}</div>
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
  
   export default EmpList