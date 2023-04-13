import { useAppContext } from "../../../UseContext"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import InputConfig from "./Input.";
import ConList from "./ConList";
import ConList2 from "./ConList2";
import ConList3 from "./ConList3";
import MidFig from "./MidFig";
import { Confg, Confg20, Confg40 } from "../../../Const";
import Image from 'next/image'
import Imgs from "../../../../public/images/prevNext.svg"

export default function ConTrend(){
      

  const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000

    const context=useAppContext()
    const [index,setIndex]=useState(0)
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const {state,dispatch}=context 
    const OList=Confg20.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1)
    const OList2=Confg40.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1)
    const OList3=Confg.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1)
    const Fst20=OList[count-1]?OList[count-1]:""
    const Fst202=OList[count+1]?OList[count+1]:""
    const Fst40=OList[count2-1]?OList2[count2-1]:""
    const Fst402=OList[count2+1]?OList2[count2+1]:""
    const data1=OList3[count3-1]?OList3[count3-1]:""
    const data2=OList3[count3+1]?OList3[count3+1]:""  
    if(state.config==="Twenty"){
      const length=19
      return(
        <div className="flex w-full h-full  justify-between items-center">
          
         <div className={`w-1/4 ${MaxSize?"h-24":"h-48"} flex justify-end `}>
          <div className="w-[80%] h-full flex flex-col bg-cyan-700 text-white opacity-20">
          <div className="font-bold text-[1rem] text-center">{Fst20[0]}</div>
          <div className={` text-center ${MaxSize?"text-[2.5rem]":"text-[5rem]"}`}>{Fst20[1]}</div>
          <div className="font-bold text-[1rem] text-center">{Fst20[2]}</div>
          </div>
         </div>      

         <div className={`w-1/3  ${MaxSize?"h-[12.5rem]":"h-[25rem]"}`}>
        <div className="h-full"><ConList count={count} stat="Twenty" /></div>
        <div className="flex  justify-between -mt-[16rem]">
           <button className={` ${MaxSize?"h-24 mt-[5rem] -ml-[2rem]":"-ml-[4.5rem]"}  rotate-180`} onClick={()=>setCount(prev=>prev<=0?0:count-1)}><Image src={Imgs} alt="react Logo" width={`${MaxSize?"30":"60"}`} height={`${MaxSize?"30":"60"}`}  /></button> <button className={` ${MaxSize?"-mr-[2rem]  mt-[5rem]":"-mr-[4.5rem]"}`} onClick={()=>setCount(prev=>prev>=length?length:count+1)}><Image src={Imgs} alt="react Logo" width={`${MaxSize?"30":"60"}`} height={`${MaxSize?"30":"60"}`}  /></button>
           </div>
        </div>  

        <div className={`w-1/4   ${MaxSize?"h-24":"h-48"}`}>
        <div className="w-[80%] h-full flex flex-col bg-cyan-500 text-white opacity-20">
            <div className="font-bold text-[1rem] text-center">{Fst202[0]}</div>
            <div className={` text-center ${MaxSize?"text-[2.5rem]":"text-[5rem]"}`}>{Fst202[1]}</div>
            <div className="font-bold text-[1rem] text-center">{Fst202[2]}</div>
          </div>
        </div>
             
        </div>
    ) 
    }
    else if(state.config==="Forty"){
      const length=39
      return(
        <div className="flex w-full h-full  justify-between items-center">
         <div className={`w-1/4 ${MaxSize?"h-24":"h-48"} flex justify-end `}>
          <div className="w-[80%] h-full flex flex-col bg-cyan-700 text-white opacity-20">
          <div className="font-bold text-[1rem] text-center">{Fst40[0]}</div>
          <div className={` text-center ${MaxSize?"text-[2.5rem]":"text-[5rem]"}`}>{Fst40[1]}</div>
          <div className="font-bold text-[1rem] text-center">{Fst40[2]}</div>
          </div>
         </div>

         <div className={`w-1/3  ${MaxSize?"h-[12.5rem]":"h-[25rem]"}`}>
        <div className="h-full"><ConList2 count={count2} stat="Forty" /></div>
        <div className="flex  justify-between -mt-[16rem]">
        <button className="-ml-[4.5rem] mt-[3rem]  rotate-180" onClick={()=>setCount2(prev=>prev<=0?0:count2-1)}><Image src={Imgs} alt="react Logo" width={`${MaxSize?"30":"60"}`} height={`${MaxSize?"30":"60"}`}  /></button> <button className="-mr-[4.5rem] mt-[3rem]" onClick={()=>setCount2(prev=>prev>=length?length:count2+1)}><Image src={Imgs} alt="react Logo" width={`${MaxSize?"30":"60"}`} height={`${MaxSize?"30":"60"}`}  /></button>
           </div>
        </div>  

        <div className={`w-1/4   ${MaxSize?"h-24":"h-48"}`}>
        <div className="w-[80%] h-full flex flex-col bg-cyan-500 text-white opacity-20">
            <div className="font-bold text-[1rem] text-center">{Fst402[0]}</div>
            <div className={` text-center ${MaxSize?"text-[2.5rem]":"text-[5rem]"}`}>{Fst402[1]}</div>
            <div className="font-bold text-[1rem] text-center">{Fst402[2]}</div>
          </div>
        </div>

        </div>
    ) 
    }  
    else{
      const length=117
      return(
        <div className="flex w-full h-full  justify-between items-center">
         <div className={`w-1/4 ${MaxSize?"h-24":"h-48"} flex justify-end `}>
          <div className="w-[80%] h-full flex flex-col bg-cyan-700 text-white opacity-20">
          <div className="font-bold text-[1rem] text-center">{data1[0]}</div>
          <div className={` text-center ${MaxSize?"text-[2.5rem]":"text-[5rem]"}`}>{data1[1]}</div>
          <div className="font-bold text-[1rem] text-center">{data1[2]}</div>
          </div>
         </div>

         <div className={`w-1/3  ${MaxSize?"h-[12.5rem]":"h-[25rem]"}`}>
        <div className={`${MaxSize?"":"h-full"}`}><ConList3 count={count3} /></div>
        <div className="flex  justify-between -mt-[16rem]">
           <button className="-ml-[4.5rem] mt-[3rem]  rotate-180" onClick={()=>setCount3(prev=>prev<=0?0:count3-1)}><Image src={Imgs} alt="react Logo" width={`${MaxSize?"30":"60"}`} height={`${MaxSize?"30":"60"}`}  /></button> <button className="-mr-[4.5rem] mt-[3rem]" onClick={()=>setCount3(prev=>prev>=length?length:count3+1)}><Image src={Imgs} alt="react Logo" width={`${MaxSize?"30":"60"}`} height={`${MaxSize?"30":"60"}`}  /></button>
           </div>
        </div>  

        <div className={`w-1/4   ${MaxSize?"h-24":"h-48"}`}>
        <div className="w-[80%] h-full flex flex-col bg-cyan-500 text-white opacity-20">
            <div className="font-bold text-[1rem] text-center">{data2[0]}</div>
            <div className={` text-center ${MaxSize?"text-[2.5rem]":"text-[5rem]"}`}>{data2[1]}</div>
            <div className="font-bold text-[1rem] text-center">{data2[2]}</div>
          </div>
        </div>

        </div>
    )  
    }
    }


    function useWindowSize() {
      // Initialize state with undefined width/height so server and client renders match
      // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
      const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
      useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
          // Handler to call on window resize
          function handleResize() {
            // Set window width/height to state
            setWindowSize({
              width: window.innerWidth,
               height: window.innerHeight,
            });
          }
        
          // Add event listener
          window.addEventListener("resize", handleResize);
         
          // Call handler right away so state gets updated with initial window size
          handleResize();
        
          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
        }
      }, []); // Empty array ensures that effect is only run on mount
      return windowSize;
    }