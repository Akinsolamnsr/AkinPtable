

const Negativity=(prop)=>{
const {negativity,name,symbol}=prop
const value=parseFloat(negativity)
const NegVal=isNaN(value)?'':value
    return(
        <div className="w-[3.5rem] h-[4rem] shadow-lg">
        <div className="text-[0.6rem] text-[#0d001a]">{name}</div>
     <div className="text-[#0d001a]">{symbol}</div>
     <div className="text-[0.8rem] font-bold text-[#0d001a]">{NegVal}</div>
     <div className={`relative w-[3.5rem] bg-[#cc99ff] border opacity-50
     ${NegVal<0.5?"":`${NegVal<1?"h-[0.2rem] my-[0.1rem]":`${NegVal<1.2?"h-[0.4rem] ":`
     ${NegVal<1.4?"h-[1.5rem] -my-[1rem]":`${NegVal<1.8?"h-[2rem] -my-[1.45rem]":`
     ${NegVal<2.0?"h-[2.4rem] -my-[1.85rem]":`${NegVal<2.4?"h-[2.8rem] -my-[2.35rem]":`
     ${NegVal<2.8?"h-[3.2rem] -my-[2.8rem]":`${NegVal<3.2?"h-[3.5rem] -my-[3.1rem]":`
     ${NegVal<3.6?"h-[3.8rem] -my-[3.4rem]":`${NegVal<4?"h-[4rem] -my-[3.6rem]":""}`} `}`}`}`} `}`} `}`}`} `}>
      
     </div>
     </div>
    )
}

export default Negativity