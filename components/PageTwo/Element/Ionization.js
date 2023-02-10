

const Ionizations=(prop)=>{
    const {Ionization,name,symbol}=prop
    const value=parseFloat(Ionization)
    const IonVal=isNaN(value)?'':value
    return(
        <div className="w-[3.5rem] h-[4rem] shadow-lg">
        <div className="text-[0.6rem] text-[#001a33]">{name}</div>
     <div className="text-[#001a33]">{symbol}</div>
     <div className="text-[0.8rem] font-bold text-[#001a1a]">{IonVal}</div>
     <div className={`relative w-[3.5rem] bg-[#80ffff] border opacity-50
     ${IonVal<2?"":`${IonVal<3?"h-[0.2rem] my-[0.1rem]":`${IonVal<4?"h-[0.4rem] ":`
     ${IonVal<6?"h-[1.5rem] -my-[1rem]":`${IonVal<8?"h-[2rem] -my-[1.45rem]":`
     ${IonVal<10?"h-[2.4rem] -my-[1.85rem]":`${IonVal<14?"h-[2.8rem] -my-[2.35rem]":`
     ${IonVal<16?"h-[3.2rem] -my-[2.8rem]":`${IonVal<18?"h-[3.5rem] -my-[3.1rem]":`
     ${IonVal<20?"h-[3.8rem] -my-[3.4rem]":`${IonVal<22?"h-[4rem] -my-[3.6rem]":""}`} `}`}`}`} `}`} `}`}`} `}>
      
     </div>
     </div>
    )
}

export default Ionizations