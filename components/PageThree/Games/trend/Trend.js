
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
import { useRouter } from "next/router"
import Sound from "../Sound";
import { Fireworks } from '@fireworks-js/react'
import DragDndTrendUp from "./DragUp";
import DragDndTrendDown from "./DragDown";


export default function TrendFit(){
  const router=  useRouter()
  const {status,data} =useSession()
    const context=useAppContext()
    const [swtch, setSwtch] = useState(false);
    const [swtch2, setSwtch2] = useState(false);
    const {state,dispatch}=context
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
    const ListTrend=["1","3","5","7","2","4","6","8","11","13","15","17","12","14","16","18"]
   const checkSpdf =ListTrend.every((x)=>state.trendDrop.includes(x))
   const hydr=Array.from(new Set(state.trendDrop))
  console.log(hydr)
   useEffect(()=>{
      
    if(router.route==="/Games/TableTrend"){
      dispatch({type:`TIMER`,payload:[6,false]})
    }
    
    
  },[])
    return(
        <div className={` ${size.width<550?"":""} mt-12`}>
        <div className={`${size.width<550?"":"hidden"}  ${size.width<550?"w-screen h-screen flex justify-center items-center -ml-4":"hidden"}`}><span className="text-[3rem] font-bold text-[#002233]">Rotate Screen</span></div>
        <div className={`${checkSpdf?"mt-[5rem]":"mt-12"} ${size.width<550?"hidden":""} `} >
         <span className={`${checkSpdf?"  absolute":"hidden"}`} style={{zIndex:3}}>{<Sound />} </span>       
        <div className="">

        <div className={`absolute text-white  ${MaxSize?"ml-[25%] mt-24 text-[1.5rem]":"ml-[40%] mt-48 text-[3.5rem]"} flex flex-col items-center ${checkSpdf?"  absolute":"hidden"}`} style={{zIndex:3}}>
        {checkSpdf?<span>
          <Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} />
          <Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} />
        </span>:""}
        <span>{checkSpdf?<>Excellent !</>:""}</span>
        </div>
        <div className="">
       {checkSpdf?<Fireworks
        
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
         
          zIndex:1
        }}
      />:""}
       </div>
        <div className={`${checkSpdf?"  absolute":"hidden"} z-1 w-full h-full opacity-50 bg-black  flex flex-col`}>
         </div>
         
         <div className={`${state.timer[6]?"hidden":" relative"}  `}><div className={`absolute w-[120%] h-[33rem] z-2 -ml-24 opacity-50 bg-gray-700`}></div></div>




        <div className="h-screen   flex">
            <div className="w-[30%]  -ml-24 ">
                <button className={`w-full  border-4 border-black text-center  ${MaxSize?"p-1 text-[0.7rem]":"p-4"}`}>FLIP DIRECTION</button>
                <div className={` w-full shadow-xl  flex flex-col mt-12 h-[60%] border-4 ${swtch?" border-[#e6f9ff] ":" border-[#ffccff]"}`}>
                    <button  onClick={()=>setSwtch(swtch?false:true)} className={`${swtch?" bg-green-700 border-[#b3ecff]":"bg-[#660029] border-[#ff66a3]"} text-center text-white  border-4 font-bold ${MaxSize?"text-[0.7rem] ":""}`} >{swtch?Trend[state.counter][0][0]:Trend[state.counter][1][0]}</button>
                    {swtch?<div className={` text-center  w-full h-full ${MaxSize?"":""}`} ><MyDropTargetV  /></div>:<div className={` text-center ${MaxSize?"":""} w-full h-full`} ><MyDropTargetV2  /></div>}
                </div>
            </div>
           <div className="flex flex-col ">
            <div className={`shadow-xl border-4 ${swtch2?" border-[#e6f9ff] ":" border-[#ffccff]"} w-full flex flex-col mb-2 h-36`}>
                
                <button onClick={()=>setSwtch2(swtch2?false:true)} className={`${swtch2?" bg-green-700 border-[#b3ecff]":"bg-[#660029] border-[#ff66a3]"} text-center text-white  border-4 font-bold ${MaxSize?"text-[0.7rem] ":""}`}>{swtch2?Trend[state.counter][0][0]:Trend[state.counter][1][0]}</button>
                
                {swtch2?<div className="w-full h-full"><MyDropTargetH   /></div>:<div className="w-full h-full"><MyDropTargetH2  /></div>}
            </div>
           <span className="mt-4 relative z-4"><DrawTrend /></span>
           </div>
           <div className="text-[4rem] absolute ml-[90%]">{hydr.length}/16</div>
           <div className={`w-[15%] flex justify-center items-center  ml-12  ${MaxSize?"":"-mt-24"} `}>
            <div className={`flex w-[10rem] h-96 ${state.counter===0?"":"hidden"}`}><DragDndTrend arrow="up" id="11" /><DragDndTrend arrow="down" id="12" /></div>
            <div className={`flex w-[10rem] h-96 ${state.counter===1?"":"hidden"}`}><DragDndTrend arrow="up" id="13" /><DragDndTrend arrow="down" id="14" /></div>
            <div className={`flex w-[10rem] h-96 ${state.counter===2?"":"hidden"}`}><DragDndTrend arrow="up" id="15" /><DragDndTrend arrow="down" id="16" /></div>
            <div className={`flex w-[10rem] h-96 ${state.counter===3?"":"hidden"}`}><DragDndTrendUp id="17" /><DragDndTrendDown id="18" /></div>
            
            </div>
            
            </div> 
        <div className={` h-[20vh] flex -mt-[7rem] `}>
        <div className=" basis-[15%]">{status==="authenticated" && checkSpdf?<button className="w-full mt-[0.9rem]   "><UpdateScore status={state.PeriodFlip} type="trend" name={data.user.name} /></button>:<div></div>}</div>
         <div className="w-full ">
         
        
         <div className={`basis-[80%] flex justify-between w-full ${state.counter===0?"":"hidden"}`}>
                <div className="h-[4rem] w-48 ml-2"><DragDndTrend arrow="right" id="1" /></div>
                <div className="h-[4rem] w-48 ml-2"><DragDndTrend arrow="left" id="2" /></div>
            </div>
            <div className={`basis-[80%] flex justify-between w-full ${state.counter===1?"":"hidden"}`}>
            <div className="h-[4rem] w-48 ml-2"><DragDndTrend arrow="right" id="3" /></div>
              <div className="h-[4rem] w-48 ml-2"><DragDndTrend arrow="left" id="4" /></div>
            </div>
            <div className={`basis-[80%] flex justify-between w-full ${state.counter===2?"":"hidden"}`}>
            <div className="h-[4rem] w-48 ml-2"><DragDndTrend arrow="right" id="5" /></div>
              <div className="h-[4rem] w-48 ml-2"><DragDndTrend arrow="left" id="6" /></div>
            </div>
            <div className={`basis-[80%] flex justify-between w-full ${state.counter===3?"":"hidden"}`}>
            <div className="h-[4rem] w-48 ml-2"><DragDndTrendLeft  id="7" /></div>
              <div className="h-[4rem] w-48 ml-2"><DragDndTrendRight  id="8" /></div>
            </div>
         
           
         </div>
         <div className="basis-[20%]">
                <StopWatch set={checkSpdf} timeStatus="TIMER7" ind={7} />

            </div>
        </div>
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