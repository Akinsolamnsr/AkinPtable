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
import { ArrangeForty, ArrangeFull, ArrangeTwenty } from "../../Arrangement/mobile/MobileConst";
import EnergyContainer from "./gridEnergyMob";
import SwitchMob from "./SwiotchMob";
import { TrueBox } from "../../../../Const";



export default function EnergyFitMobile(){
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

  const setList=new Set(state.matchDrop)
    const arrayList=Array.from(setList)
    
  const  checkTwenty=TrueBox.slice(0,20).every((x)=>x===true)
  const  checkForty=TrueBox.slice(0,20).every((x)=>x===true)
  const  checkFull=TrueBox.every((x)=>x===true)
  const checkSpdf=checkTwenty || checkForty || checkFull
 
    const {status,data} =useSession()
    useEffect(()=>{
      
        if(router.route==="/Games/Configuration" || size.width<550){
          dispatch({type:`TIMER`,payload:[3,false]})
        }
        
        
      },[])


    return (
   <div className=" flex w-screen  h-screen">
      
       {/* main box*/}
      <div className={`basis-[70%]  flex flex-col `}>
    
      <div className={`${checkSpdf?"absolute z-2 w-full h-[90%]":"hidden"}`}>
      
      <>{checkFull&&state.moben==="Full"?<Fireworks
        
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
      
      <div className="-ml-[10rem]">
            {checkTwenty&&state.moben==="Twenty"?<Image src={medaLogo} alt="react Logo" width="32" height="32" />:
            checkForty&&state.moben==="Forty"?<><Image src={medaLogo} alt="react Logo" width="32" height="32" /><Image src={medaLogo} alt="react Logo" width="32" height="32" /></>:checkFull&&state.moben==="Full"?
            <><Image src={medaLogo} alt="react Logo" width="32" height="32" /><Image src={medaLogo} alt="react Logo" width="32" height="32" /><Image src={medaLogo} alt="react Logo" width="32" height="32" /></>:""}
            </div>
            <span className="font-bold text-white text-[1.5rem] -ml-48">{checkTwenty&&state.moben==="Twenty"?<>weldone !</>:checkForty&&state.moben==="Forty"?<>Great Job !</>:checkFull&&state.moben==="Full"?<>Excellent !</>:""}</span>
      </div>
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      </div>


     <div className={`${state.timer[3]?"":"absolute z-1 w-full h-[85%] bg-black opacity-25"}`}></div>
       {/*Horizontal element selector box box*/}
      <div className="basis-[85%]  overflow-auto ">
        <button onTouchStart={()=>dispatch({ type:"ARRANGEMOBILECHECK",  payload:true })} onTouchEnd={()=>dispatch({ type:"ARRANGEMOBILECHECK",  payload:false })}      className="w-full bg-blue-700 rounded-full text-white font-bold border-4 border-pink-200 sticky top-0 h-8 ">check Energy Level</button>
         <div className="w-full h-full">
           <SwitchMob />
         </div>
      </div>
    {/* start, select, reset game in that order*/}
<div className="basis-[15%]  flex ">
    <div className="basis-[20%]">
    <div className=" basis-[15%]">{status==="authenticated" && checkSpdf?<div className="w-full mt-[0.9rem]  relative z-1 "><UpdateSore status={state.mobA20} type="arrange" name={data.user.name} /></div>:<div></div>}</div>
    </div>
    <div className="basis-[80%] bg-blue-200 overflow-auto">
    <div className="basis-[70%]  flex  bg-cyan-400">
    <button onClick={()=>dispatch({ type:"MOBEN",  payload:"Twenty" })}  className={`text-center  w-full font-bold text-white ${state.moben==="Twenty"?"bg-blue-600 border-2 border-cyan-200 rounded-full":""}`}>Twenty</button>
   
    <button onClick={()=>dispatch({ type:"MOBEN",  payload:"Forty" })}  className={`text-center  w-full font-bold text-white ${state.moben==="Forty"?"bg-blue-600 border-2 border-cyan-200 rounded-full":""}`}>Forty</button>
   
    <button onClick={()=>dispatch({ type:"MOBEN",  payload:"Full" })}  className={`text-center  w-full font-bold text-white ${state.moben==="Full"?"bg-blue-600 border-2 border-cyan-200 rounded-full":""}`}>Full</button>
   
</div>
    </div>

</div>

      </div>

      <div className={`basis-[30%]  flex flex-col bg-blue-300`}>
     
    {/* element selector box*/}
    <div className=" basis-[80%] flex flex-col overflow-auto bg-cyan-300">
    <div className="basis-[80%] bg-cyan-500 text-[2rem]  flex justify-center items-center text-white opacity-20">
       <span className="font-bold">ENERGY</span>
    </div>
      <div className="basis-[40%] bg-cyan-700 opacity-50 ">

      </div>
      <div className="basis-[80%] bg-cyan-500  text-[2rem] flex justify-center items-center text-white opacity-20">
        <div className="font-bold">LEVEL</div>
      </div>
</div>

   {/*element selector, , timer, range box*/}
<div className=" basis-[20%] flex ">
 


<div className="basis-[30%]">
<StopWatch  set={checkSpdf}  ind={4}/>
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