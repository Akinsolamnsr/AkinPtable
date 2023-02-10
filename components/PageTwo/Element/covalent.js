

const Covalent=(prop)=>{
    const {covalentRadius,name,symbol}=prop
    const value=parseFloat(covalentRadius)
    const CoVal=isNaN(value)?'':value
    const wdth=(CoVal/225)*3.5
    const hgt=(CoVal/225)*3.5
    return(
        <div style={{width:`${wdth}rem`,height:`${hgt}rem`}} className="bg-[#cc33ff] text-[#260033] rounded-full flex flex-col">
        <span>{symbol}</span>
         <span className="text-[0.8rem]">{CoVal}</span>

     
     </div>
    )
}

export default Covalent