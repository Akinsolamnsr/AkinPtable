


const AfiList=(prop)=>{
    const {data}=prop
    const Sort=data.sort((x,y)=>{
        const val=isNaN(parseFloat(x.Reactive.afinity))?0:parseFloat(x.Reactive.afinity)
        const ValF=val*10
        const val2=isNaN(parseFloat(y.Reactive.afinity))?0:parseFloat(y.Reactive.afinity)
        const ValF2=val2*10
        return ValF2- ValF
    })
      return(
          <div className="w-full h-full flex flex-wrap overflow-auto ">
             {
              Sort.map((x,i)=>{
                  const value=parseFloat(x.Reactive.afinity)
                  const AfiVal=isNaN(value)?"":value
                  const wdth=(AfiVal/3.617)*12
                  
                  return(
                    <div key={`Afinity${i}`} className="w-48 h-[4rem] ml-4 mt-4 shadow-lg flex flex-col text-[#001a33] ">
                      <div className={` flex `}>
                    <div className="w-[4rem] font-bold text-center text-[1.4rem]">{x.General.symbol}</div>
                 <div className="flex flex-col ">
                  <div className="text-center">{AfiVal}</div>
                  <div className="text-center">{x.General.name}</div>
                 </div>
                 
                    </div>
                    <div className={` h-4 bg-[#99ccff] opacity-50`} style={{width:`${wdth}rem`}}></div>
                    </div>
                  )
                   })
             }
          </div>
      )
  }
  
   export default AfiList