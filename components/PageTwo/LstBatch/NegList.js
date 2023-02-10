

const NegList=(prop)=>{
    const {data}=prop
    const Sort=data.sort((x,y)=>parseFloat(y.Reactive.negativity*10)-parseFloat(x.Reactive.negativity*10))
      return(
          <div className="w-full h-full flex flex-wrap overflow-auto">
             {
              Sort.map((x,i)=>{
                  const value=parseFloat(x.Reactive.negativity)
                  const NegVal=isNaN(value)?"":value
                  const wdth=(NegVal/3.98)*12
                  
                  return(
                    <div key={`NegativeList${i}`} className="w-48 h-[4rem] ml-4 mt-4 shadow-lg flex flex-col text-[#0d001a] ">
                      <div className={` flex `}>
                    <div className="w-[4rem] font-bold text-center text-[1.4rem]">{x.General.symbol}</div>
                 <div className="flex flex-col ">
                  <div className="text-center">{x.Reactive.negativity}</div>
                  <div className="text-center">{x.General.name}</div>
                 </div>
                 
                    </div>
                    <div className={` h-4 bg-[#cc99ff] opacity-50`} style={{width:`${wdth}rem`}}></div>
                    </div>
                  )
                   })
             }
          </div>
      )
  }
  
   export default NegList