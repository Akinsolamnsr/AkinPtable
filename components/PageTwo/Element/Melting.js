



const Melt=(prop)=>{
    const {melting,name,symbol}=prop
    const value=parseFloat(melting)
    const meltVal=isNaN(value)?'':value

    return(
        <div className={`h-[4rem] w-[3.5rem] flex flex-col
        ${meltVal<0.8?" ":`${meltVal<25?"bg-[#00cccc]":`${meltVal<100?"bg-[#80ffff]":`${meltVal<273?"bg-[#ccffff]":`
        ${meltVal<500?"bg-[#ffffe6]":`${meltVal<1000?"bg-[#ffffb3]":`${meltVal<1500?"bg-[#ffff80]":`
        ${meltVal<2000?"bg-[#e6e600]":`${meltVal<2500?"bg-[#ffb380]":`${meltVal<3000?"bg-[#ff8533]":`
        ${meltVal<3500?"bg-[#ffb3b3]":`${meltVal<4000?"bg-[#ff6666]":`${meltVal<4500?"bg-[#ff1a1a]":`
        ${meltVal<5000?"bg-[#cc0000]":`${meltVal<5500?"bg-[#800000]":`${meltVal<6000?"bg-[#330000] text-gray-500":``}`}`}
        `}`}`} `}`}`} `}`}`}`}`}`}`}
        `}>
            <div className="text-[0.6rem] ">{name}</div>
        <div>{symbol}</div>
        <div className="text-[0.8rem] font-bold">{meltVal}</div>
        </div>
    )
}

export default Melt