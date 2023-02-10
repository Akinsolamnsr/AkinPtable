import { useAppContext } from "../../UseContext"



const Boil=(prop)=>{
    const {boiling,name,symbol}=prop
    const value=parseFloat(boiling)
    const boilVal=isNaN(value)?'':value

    return(
        <div className={`h-[4rem] w-[3.5rem] flex flex-col
        ${boilVal<1?" ":`${boilVal<25?"bg-[#00cccc]":`${boilVal<100?"bg-[#80ffff]":`${boilVal<273?"bg-[#ccffff]":`
        ${boilVal<500?"bg-[#ffffe6]":`${boilVal<1000?"bg-[#ffffb3]":`${boilVal<1500?"bg-[#ffff80]":`
        ${boilVal<2000?"bg-[#e6e600]":`${boilVal<2500?"bg-[#ffb380]":`${boilVal<3000?"bg-[#ff8533]":`
        ${boilVal<3500?"bg-[#ffb3b3]":`${boilVal<4000?"bg-[#ff6666]":`${boilVal<4500?"bg-[#ff1a1a]":`
        ${boilVal<5000?"bg-[#cc0000]":`${boilVal<5500?"bg-[#800000]":`${boilVal<6000?"bg-[#330000] text-gray-500":``}`}`}
        `}`}`} `}`}`} `}`}`}`}`}`}`} `}>
            <div className="text-[0.6rem] ">{name}</div>
        <div>{symbol}</div>
        <div className="text-[0.8rem] font-bold">{boilVal}</div>
        </div>
    )
}

export default Boil