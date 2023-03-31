import { useState } from "react";
import Imgs from "../../../../../public/images/prevNext.svg"
import { useAppContext } from "../../../../UseContext";
import Image from 'next/image'
import { Confg } from "../../../../Const";
import MidMob from "./MidMob";


export default function EnergyContainer({Width}){
    const context=useAppContext()
    const [index,setIndex]=useState(0)
    const [count, setCount] = useState(0);
    const {state,dispatch}=context

    const data1=Confg[count-1]?Confg[count-1]:""
    const data2=Confg[count+1]?Confg[count+1]:"" 
    const data=Confg[count]
    
  
    const ArrayConfg=data[3].split(',')
    const length=19
return(
<div className="w-full h-full  flex flex-col scale-[90%]">
<div className="basis-[70%]  flex justify-center ">
    <div className="w-[70%] h-[14rem] flex" >
        <div className="basis-[20%]  flex justify-center text-white"><button className="rotate-180" onClick={()=>setCount(prev=>prev<=0?0:count-1)}><Image src={Imgs} alt="react Logo" width='60' height='60' /></button></div>
        <div className={`basis-[60%] bg-[#e6005c] flex flex-col border-4 border-cyan-300 shadow-xl`}>
          <div className="text-center text-[1.5rem] font-bold text-white">{Confg[count][0]}</div>
          <div className="text-center text-[5.5rem] text-white">{Confg[count][1]}</div>
          <div className="text-center text-[1.5rem] text-white">{Confg[count][2]}</div>
        </div>
        <div className="basis-[20%]  flex justify-center"><button className="" onClick={()=>setCount(prev=>prev>=length?length:count+1)}><Image src={Imgs} alt="react Logo" width='60' height='60' /></button></div>
    </div>
    <div className="text-[2rem] relative">{count+1}/{length+1}</div>
</div>

<div className="basis-[35%] flex justify-center"><MidMob data={ArrayConfg} count={count} /></div>
</div>
)
}



