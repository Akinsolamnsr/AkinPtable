

const IonList=(prop)=>{
  const {data}=prop
  const Sort=data.sort((x,y)=>parseFloat(y.Reactive.Ionization)-parseFloat(x.Reactive.Ionization))
    return(
        <div className="w-full h-full flex flex-wrap overflow-auto">
           {
            Sort.map((x,i)=>{
                const value=parseFloat(x.Reactive.Ionization)
                const IonVal=isNaN(value)?'':value
                const wdth=(IonVal/21.565)*12
                
                return(
                  <div key={`IonLists${i}`} className="w-48 h-[4rem] ml-4 mt-4 shadow-lg flex flex-col text-[#001a33] ">
                    <div className={` flex `}>
                  <div className="w-[4rem] font-bold text-center text-[1.4rem]">{x.General.symbol}</div>
               <div className="flex flex-col ">
                <div className="text-center">{IonVal}</div>
                <div className="text-center">{x.General.name}</div>
               </div>
               
                  </div>
                  <div className={` h-4 bg-[#80ffff] opacity-50`} style={{width:`${wdth}rem`}}></div>
                  </div>
                )
                 })
           }
        </div>
    )
}

 export default IonList