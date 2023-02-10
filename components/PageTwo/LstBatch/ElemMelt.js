
const MeltList = (prop) => {
  const  {data}=prop
  const Sort=data.sort((x,y)=>parseFloat(y.Physical.melting)-parseFloat(x.Physical.melting))
 
  return(
    <div className="w-full h-full flex flex-wrap overflow-auto">
      {Sort.map((x,i)=>{
          const value=parseFloat(x.Physical.melting)
          const meltVal=isNaN(value)?'':value
          return(
              <div key={`MeltList${i}`} className={`w-48 h-12 ml-4 mt-4 flex shadow-lg
              ${meltVal<0.8?" ":`${meltVal<25?"bg-[#00cccc]":`${meltVal<100?"bg-[#80ffff]":`${meltVal<273?"bg-[#ccffff]":`
        ${meltVal<500?"bg-[#ffffe6]":`${meltVal<1000?"bg-[#ffffb3]":`${meltVal<1500?"bg-[#ffff80]":`
        ${meltVal<2000?"bg-[#e6e600]":`${meltVal<2500?"bg-[#ffb380]":`${meltVal<3000?"bg-[#ff8533]":`
        ${meltVal<3500?"bg-[#ffb3b3]":`${meltVal<4000?"bg-[#ff6666]":`${meltVal<4500?"bg-[#ff1a1a]":`
        ${meltVal<5000?"bg-[#cc0000]":`${meltVal<5500?"bg-[#800000]":`${meltVal<6000?"bg-[#330000] text-gray-500":``}`}`}
        `}`}`} `}`}`} `}`}`}`}`}`}`}
              `}>
               <div className="w-[4rem] font-bold text-center text-[1.4rem]">{x.General.symbol}</div>
               <div className="flex flex-col ">
                <div className="text-center">{x.Physical.melting}</div>
                <div className="text-center">{x.General.name}</div>
               </div>
              </div>
          )
      })}
    </div>
  )
  }
  
  export default MeltList