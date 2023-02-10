

const ElementsProp=(prop)=>{
    const {number,symbol}=prop
   
    return(
        <div  className="shadow-lg flex flex-col">
        <span>{symbol}</span>
         <span className="text-[0.8rem]">{number}</span>

     
     </div>
    )
}

export default ElementsProp