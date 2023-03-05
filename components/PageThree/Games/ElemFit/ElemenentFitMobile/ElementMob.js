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
import GridMobileElementFit from "./gridMob";
import ElementSlideMobile from "./slideMob";
import UpdateScore from "../../../../update";



export default function ArragementMobile(){

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
    const Elem1=Array.from(new Set(state.elementDropFit))
    console.log(Elem1)
    console.log(state.mobA40)
  const checkTwenty=Elem1.length===21
  const checkForty=Elem1.length===41 
  const checkFull=Elem1.length===119 
    useEffect(()=>{
      
        if(router.route==="/Games/Arrange" || size.width<550){
          dispatch({type:`TIMER`,payload:[4,false]})
        }
        
        
      },[])

      const checkSpdf=Elem1.length===21 && state.mobA40==="Twenty" || Elem1.length===41 && state.mobA40==="Forty" || Elem1.length===119 && state.mobA40==="Full"
     
    return (
   <div className=" flex w-screen flex-col h-[100%]">
            <div className={`${checkSpdf?"absolute z-2 w-full h-[90%]":"hidden"}`}>
      
      <>{checkFull&&state.mobA40==="Full"?<Fireworks
        
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
         
          zIndex:1
        }}
      />:<Confetti width="1000"  height="500" className=""/> }</>
      <button onClick={()=>refreshPage()} style={{zIndex:3}} className="w-[12rem] absolute mt-8 bg-white rounded-full">Close</button>
      <div style={{zIndex:3}}  className="mt-24 ml-[45%] absolute">
      
      <div>
            {checkTwenty&&state.mobA40==="Twenty"?<Image src={medaLogo} alt="react Logo" width="32" height="32" />:
            checkForty&&state.mobA40==="Forty"?<><Image src={medaLogo} alt="react Logo" width="32" height="32" /><Image src={medaLogo} alt="react Logo" width="32" height="32" /></>:checkFull&&state.mobA40==="Full"?
            <><Image src={medaLogo} alt="react Logo" width="32" height="32" /><Image src={medaLogo} alt="react Logo" width="32" height="32" /><Image src={medaLogo} alt="react Logo" width="32" height="32" /></>:""}
            </div>
            <span className="font-bold text-white text-[1.2rem]">{checkTwenty&&state.mobA40==="Twenty"?<>weldone !</>:checkForty&&state.mobA40==="Forty"?<>Great Job !</>:checkFull&&state.mobA40==="Full"?<>Excellent !</>:""}</span>
      </div>
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      </div>


     <div className={`${state.timer[4]?"":"absolute z-1 w-full h-[90%] bg-black opacity-25"}`}></div>
       {/* main box*/}
      <div className={`basis-[80%]  flex flex-col overflow-auto`}>
        <button onTouchStart={()=>dispatch({ type:"ARRANGEMOBILECHECK3",  payload:true })} onTouchEnd={()=>dispatch({ type:"ARRANGEMOBILECHECK3",  payload:false })}  className="w-[60%] sticky top-0 bg-green-500 text-white font-bold ml-[15%] rounded-full border-4 border-pink-200">check Element</button>
         <GridMobileElementFit />
      </div>
<hr />
      <div className={`basis-[20%]  flex flex-col `}>

      <div className="basis-[20%]">
      <div className=" basis-[20%] flex">
 
 <div className="basis-[70%]  flex  flex-col">
 <div className="basis-[50%] overflow-auto">
 <ElementSlideMobile />
 </div>
 <div className="basis-[50%] bg-cyan-400 flex">
 <button onClick={()=>dispatch({ type:"MOBA40",  payload:"Twenty" })}  className={`text-center  w-full font-bold text-white ${state.mobA40==="Twenty"?"bg-blue-600 border-2 border-cyan-200 rounded-full":""}`}>Twenty</button>
    
    <button onClick={()=>dispatch({ type:"MOBA40",  payload:"Forty" })}  className={`text-center  w-full font-bold text-white ${state.mobA40==="Forty"?"bg-blue-600 border-2 border-cyan-200 rounded-full":""}`}>Forty</button>
   
    <button onClick={()=>dispatch({ type:"MOBA40",  payload:"Full" })}  className={`text-center  w-full font-bold text-white ${state.mobA40==="Full"?"bg-blue-600 border-2 border-cyan-200 rounded-full":""}`}>Full</button>
    <div className=" basis-[15%]">{status==="authenticated" && checkSpdf?<div className="w-full mt-[0.9rem]  relative z-1 "><UpdateScore status={state.mobA20} type="arrange" name={data.user.name} /></div>:<div></div>}</div>
 </div>
 
 </div>
 
 <div className="basis-[30%]">
 <StopWatch  set={checkSpdf}  ind={5}/>
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