const Afinity=(prop)=>{
    const {afinity,name,symbol}=prop
    const value=parseFloat(afinity)
    const AfiVal=isNaN(value)?'':value
    return(
        <div className="w-[3.5rem] h-[4rem] shadow-lg">
           <div className="text-[0.6rem] text-[#001a33]">{name}</div>
        <div className="text-[#001a33]">{symbol}</div>
        <div className="text-[0.8rem] font-bold text-[#001a33]">{AfiVal}</div>
        <div className={`relative w-[3.5rem] bg-[#99ccff] border opacity-50
        ${AfiVal<0.02?"":`${AfiVal<0.1?"h-[0.2rem] my-[0.1rem]":`${AfiVal<0.4?"h-[0.4rem] ":`
        ${AfiVal<0.8?"h-[1.5rem] -my-[1rem]":`${AfiVal<1.2?"h-[2rem] -my-[1.45rem]":`
        ${AfiVal<2.0?"h-[2.4rem] -my-[1.85rem]":`${AfiVal<2.4?"h-[2.8rem] -my-[2.35rem]":`
        ${AfiVal<2.8?"h-[3.2rem] -my-[2.8rem]":`${AfiVal<3.2?"h-[3.5rem] -my-[3.1rem]":`
        ${AfiVal<3.6?"h-[3.8rem] -my-[3.4rem]":`${AfiVal<4?"h-[4rem] -my-[3.6rem]":""}`} `}`}`}`} `}`} `}`}`} `}>
         
        </div>
        </div>
    )
}

export default Afinity