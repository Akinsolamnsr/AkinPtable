
const ElementList = (prop) => {
    const  {data}=prop
    const Sort=data.sort((x,y)=>parseFloat(y.General.number)-parseFloat(y.General.number))
   
    return(
      <div className="w-full h-full flex flex-wrap overflow-auto">
        {Sort.map((x,i)=>{
            return(
                <div key={`Element${i}`} className={`w-48 h-12 ml-4 mt-4 flex shadow-lg `}>
                 <div className="w-[4rem] font-bold text-center text-[1.4rem]">{x.General.symbol}</div>
                 <div className="flex flex-col ">
                  <div className="text-center">{x.General.number}</div>
                  <div className="text-center">{x.General.name}</div>
                 </div>
                </div>
            )
        })}
      </div>
    )
    }
    
    export default ElementList