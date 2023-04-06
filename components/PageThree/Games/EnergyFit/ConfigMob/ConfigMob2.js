import { useState } from "react";
import { Confg, Confg40 } from "../../../../Const"
import SpdfMidMob from "./MobSpdf";



export default function ConfGridMob2(){
    const [count, setCount] = useState(0);
  let length=39
  const OList=Confg40.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1)
  const counter=parseInt(OList[count][0] )
    return(
        <div className="w-full h-full flex ">
            <div className="basis-[50%] flex justify-center">
              <div className="basis-[80%] bg-cyan-700 shadow-xl border-4 border-cyan-300 h-[60vh] mt-4 flex flex-col">
             <div className="text-white font-bold text-[1.5rem] text-center" >{OList[count][0]}</div>
             <div className="text-white font-bold text-center text-[6rem]" >{OList[count][1]}</div>
             <div className="text-white font-bold text-center text-[1.5rem]">{OList[count][2]}</div>
              </div>
            </div>
            <div className="basis-[50%] flex flex-col">
                <div className="basis-[20%] bg-white flex">
                 <button onClick={()=>setCount(prev=>prev<=0?0:count-1)} className="border-4 border-white bg-green-700 text-white font-bold basis-[50%]">Prev</button>
                 <button onClick={()=>setCount(prev=>prev>=length?length:count+1)} className="border-4 border-white bg-green-700 text-white font-bold basis-[50%]">Next</button>
                </div>
                <div className="basis-[80%] "><SpdfMidMob count={counter-1} /></div>
                <div className="absolute text-[2rem] -ml-8 font-bold">{count+1}</div>
            </div>
        </div>
    )
}