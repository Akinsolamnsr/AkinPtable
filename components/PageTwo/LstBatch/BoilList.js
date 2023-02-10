
const BoilList = (prop) => {
    const  {data}=prop
    const Sort=data.sort((x,y)=>parseFloat(y.Physical.boiling)-parseFloat(x.Physical.boiling))
    
    return(
      <div className="w-full h-full flex flex-wrap overflow-auto">
        {Sort.map((x,i)=>{
            const value=parseFloat(x.Physical.boiling)
            const boilVal=isNaN(value)?'':value
            return(
                <div key={`Boiling${i}`} className={`w-48 h-12 ml-4 mt-4 flex shadow-lg
                ${boilVal<1?" ":`${boilVal<25?"bg-[#00cccc]":`${boilVal<100?"bg-[#80ffff]":`${boilVal<273?"bg-[#ccffff]":`
        ${boilVal<500?"bg-[#ffffe6]":`${boilVal<1000?"bg-[#ffffb3]":`${boilVal<1500?"bg-[#ffff80]":`
        ${boilVal<2000?"bg-[#e6e600]":`${boilVal<2500?"bg-[#ffb380]":`${boilVal<3000?"bg-[#ff8533]":`
        ${boilVal<3500?"bg-[#ffb3b3]":`${boilVal<4000?"bg-[#ff6666]":`${boilVal<4500?"bg-[#ff1a1a]":`
        ${boilVal<5000?"bg-[#cc0000]":`${boilVal<5500?"bg-[#800000]":`${boilVal<6000?"bg-[#330000] text-gray-500":``}`}`}
        `}`}`} `}`}`} `}`}`}`}`}`}`} 
                
                `}>
                 <div className="w-[4rem] font-bold text-center text-[1.4rem]">{x.General.symbol}</div>
                 <div className="flex flex-col ">
                  <div className="text-center">{x.Physical.boiling}</div>
                  <div className="text-center">{x.General.name}</div>
                 </div>
                </div>
            )
        })}
      </div>
    )
    }
    
    export default BoilList