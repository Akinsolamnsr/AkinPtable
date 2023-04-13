import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StopWatch from "../../../../stopWatch";
import UpdateSore from "../../../../update";
import { useAppContext } from "../../../../UseContext";

import Confetti from 'react-confetti'
import Sound from "../../Sound";
import medaLogo from "../../../../../public/images/Rating-SVG-Icon-s9fd.svg"

import Image from 'next/image'
import Fireworks from "@fireworks-js/react";
import SpdfDropMobile from "./SpdfDropMob";
import SpdfSlideMobile from "./SpdfSlide";
import UpdateScore from "../../../../update";





export default function SpdfMobile(){

  const size = useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000


    function refreshPage() {
        window.location.reload(false);
      }
    const router=  useRouter()
    const context=useAppContext()
    const {state,dispatch}=context

    const {status,data} =useSession()
    const Elem1=Array.from(new Set(state.blockDropFit))
  
 
    useEffect(()=>{
      
        if(router.route==="/Games/Family" || size.width<550){
          dispatch({type:`TIMER`,payload:[5,false]})
        }
        
        
      },[])

      const checkSpdf=Elem1.length===119
     
    return (
   <div className=" flex w-screen flex-col h-[100%]">
            <div className={`${checkSpdf?"absolute z-2 w-full h-[90%]":"hidden"}`}>
      
      <>{checkSpdf?<Fireworks
        
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
         
          zIndex:1
        }}
      />:<></>}</>
      <button onClick={()=>refreshPage()} style={{zIndex:3}} className="w-[12rem] absolute mt-8 bg-white rounded-full">Close</button>
      <div style={{zIndex:3}}  className="mt-24 ml-[45%] absolute">
      
      <div>
            {checkSpdf?<><Image src={medaLogo} alt="react Logo" width="32" height="32" /><Image src={medaLogo} alt="react Logo" width="32" height="32" /><Image src={medaLogo} alt="react Logo" width="32" height="32" /></>:""}
            </div>
            <span className="font-bold text-white text-[1.2rem]">{checkSpdf?<>weldone !</>:""}</span>
      </div>
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      </div>


     <div className={`${state.timer[5]?"":"absolute z-1 w-full h-[90%] bg-black opacity-25"}`}></div>
       {/* main box*/}
      <div className={`basis-[80%]  flex flex-col overflow-auto`}>
       <SpdfDropMobile />
      </div>
<hr />
      <div className={`basis-[20%]  flex flex-col `}>

      <div className="basis-[20%]">
      <div className=" basis-[20%] flex">
 
 <div className="basis-[70%]  flex  flex-col overflow-auto bg-cyan-700">
 <SpdfSlideMobile />
 </div>
 <div className=" basis-[15%] relative" style={{zIndex:5}}>{status==="authenticated" && checkSpdf?<div className={`w-full mt-[0.9rem]  relative z-1 ${MaxSize?"scale-[80%] -mt-4":""}`}><UpdateScore status={state.PeriodFlip} type="Block" name={data.user.name} /></div>:<div></div>}</div>
 <div className="basis-[30%]">
 <StopWatch  set={checkSpdf}  ind={6}/>
 </div>
 
 </div>
 
      </div>

      </div>
   </div>
  );
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