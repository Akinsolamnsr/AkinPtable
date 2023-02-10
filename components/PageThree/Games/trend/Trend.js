
import StopWatch from "../../../stopWatch";
import { useAppContext } from "../../../UseContext";
import Confetti from 'react-confetti'
import medaLogo from "../../../../public/images/medal.svg"
import Image from 'next/image'
import DrawTrend from "./Draw";
import DragDndTrend from "./DragTrend";
import MyDropTargetH from "./DropH";
import MyDropTargetV from "./DropV";
import { Trend } from "../../../ConsttSpdf";
import { useEffect, useState } from "react";
import DragDndTrendRight from "./DragRight";
import DragDndTrendLeft from "./DragLeft";
import MyDropTargetH2 from "./DropH2";
import MyDropTargetV2 from "./DropV2";
import { useSession } from 'next-auth/react';
import UpdateScore from "../../../update";

export default function TrendFit(){
  const {status,data} =useSession()
    const context=useAppContext()
    const [swtch, setSwtch] = useState(false);
    const [swtch2, setSwtch2] = useState(false);
    const {state}=context
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
   const checkSpdf =false
    return(
        <div className={`  ${MaxSize?"ml-24 m-4":"mt-12"}`}>
                   
           <div className={`${state.drop?"hidden":""} absolute h-[100vh] w-[63%]`}>
           {<Confetti width="1000"  height="500"/> }
         <div className="ml-[27rem] mt-[5rem] transition  duration-2000 transform scale-[200%]">
         <Image src={medaLogo} alt="react Logo" width="64" height="64" />
         <div className="text-[2rem] -ml-[25%]">Well done !</div>
        
         </div>
           </div>
       	<div className="h-screen   flex">
            <div className="w-[30%]  -ml-24 ">
                <button className={`w-full  border-4 border-black text-center  ${MaxSize?"p-1 text-[0.7rem]":"p-4"}`}>FLIP DIRECTION</button>
                <div className={` w-full border border-black  flex flex-col ${MaxSize?"h-[55%]":"mt-12 h-[60%]"} `}>
                    <button  onClick={()=>setSwtch(swtch?false:true)} className={`bg-gray-300 text-center font-bold ${MaxSize?"text-[0.7rem] ":""}`} >{swtch?Trend[state.counter][0][0]:Trend[state.counter][1][0]}</button>
                    {swtch?<div className={` text-center  w-full h-full ${MaxSize?"":""}`} ><MyDropTargetV switch1={swtch} /></div>:<div className={` text-center ${MaxSize?"":""} w-full h-full`} ><MyDropTargetV2 switch1={swtch} /></div>}
                </div>
            </div>
           <div className="flex flex-col ">
            <div className={` border border-black w-full flex flex-col mb-2 ${MaxSize?"h-24":"h-36"}`}>
                <button onClick={()=>setSwtch2(swtch2?false:true)} className={`bg-gray-300 text-center font-bold ${MaxSize?"text-[0.7rem] ":""}`}>{swtch2?Trend[state.counter][0][0]:Trend[state.counter][1][0]}</button>
                {swtch2?<div className="w-full h-full"><MyDropTargetH  switch2={swtch2} /></div>:<div className="w-full h-full"><MyDropTargetH2  switch2={swtch2} /></div>}
            </div>
           <span className="mt-4"><DrawTrend /></span>
           </div>
           <div className={`w-[15%] flex justify-center items-center  ml-12  ${MaxSize?"":"-mt-24"} `}><div className=" flex w-[10rem] h-96 "><DragDndTrend arrow="up" /><DragDndTrend arrow="down" /></div></div>
            </div> 
        <div className={` h-[20vh] flex -ml-24 -mt-36 ${MaxSize?"w-[120%]":"w-full"}`}>
        <div className=" basis-[15%]">{status==="authenticated" && checkSpdf?<button className="w-full mt-[0.9rem]  relative z-1 "><UpdateScore status={state.PeriodFlip} type="trend" name={data.user.name} /></button>:<div></div>}</div>
            <div className=" basis-[80%] flex justify-between w-full ">
                <div className="h-[4rem] w-48 ml-2"><DragDndTrendRight /></div>
                <div className="h-[4rem] w-48 "><DragDndTrendLeft /></div>
            </div>
            <div className="bg-pink-200 basis-[20%]">
                <StopWatch set={checkSpdf} timeStatus="TIMER7" ind={7} />

            </div>

        </div>
        </div>
        )
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