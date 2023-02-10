

const Wall=(prop)=>{
    const {vandalForces,name,symbol}=prop
    const value=parseFloat(vandalForces)
    const VanVal=isNaN(value)?'':value
    const wdth=(VanVal/348)*3.5
    const hgt=(VanVal/348)*3.5
    return(
        <div style={{width:`${wdth}rem`,height:`${hgt}rem`}} className="bg-[#ff4dff] text-[#1a001a] rounded-full flex flex-col">
           <span>{symbol}</span>
            <span className="text-[0.8rem]">{VanVal}</span>

        
        </div>
    )
}

export default Wall