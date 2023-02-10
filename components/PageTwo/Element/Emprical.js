

const Emprical=(prop)=>{
    const {radius,name,symbol}=prop
    const value=parseFloat(radius)
    const EmpVal=isNaN(value)?'':value
    const wdth=(EmpVal/298)*3.5
    const hgt=(EmpVal/298)*3.5
    return(
        <div style={{width:`${wdth}rem`,height:`${hgt}rem`}} className="bg-[#a64dff] text-[#0d001a] rounded-full flex flex-col">
        <span>{symbol}</span>
         <span className="text-[0.8rem]">{EmpVal}</span>

     
     </div>
    )
}

export default Emprical