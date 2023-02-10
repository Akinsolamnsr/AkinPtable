



const VanList=(prop)=>{
    const {data}=prop
    const Sort=data.sort((x,y)=>{
    const a=  isNaN(parseInt(y.Reactive.vandalForces))?0:parseInt(y.Reactive.vandalForces)
    const b=isNaN(parseInt(x.Reactive.vandalForces))?0:parseInt(x.Reactive.vandalForces)
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
                  const value=parseFloat(x.Reactive.vandalForces)
                  const VanVal=isNaN(value)?'':value
                  const wdth=(VanVal/348)*4   
                  const hgt=(VanVal/348)*4
                  
                  return(
                    <div key={`valdalList${i}`} className="w-48 h-[4rem] ml-4 mt-4 shadow-lg flex flex-col text-[#1a001a] ">
                      <div className={` flex `}>
                    <div className="bg-[#ff4dff] font-bold text-center text-[1.4rem] rounded-full" style={{width:`${wdth}rem`,height:`${hgt}rem`}}>{x.General.symbol}</div>
                 <div className="flex flex-col ml-8 ">
                  <div className="text-center">{VanVal}</div>
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
  
   export default VanList