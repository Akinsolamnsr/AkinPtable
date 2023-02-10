import StopWatch from "../../../stopWatch";
import { useAppContext } from "../../../UseContext";
import Confetti from 'react-confetti'
import { Fireworks } from '@fireworks-js/react'
import medaLogo from "../../../../public/images/Rating-SVG-Icon-s9fd.svg"
import Image from 'next/image'
import useSound from 'use-sound'
import SliderSb from "../ElemFit/DND/Slider";
import GridBox from "./GridBox";
import SliderFm from "./Slider";
import { useEffect, useState } from "react";
import Sound from "../Sound";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router"
import UpdateScore from "../../../update";

export default function FamilyFit(){
  const router=  useRouter()
  const {status,data} =useSession()
    const context=useAppContext()
  
    const {state,dispatch}=context
    const setList=new Set(state.drop2)
    const arrayList=Array.from(setList)
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
    const marg=size.width<1300?true:false
   const Wdth=size.width>500 && size.height>1000
   const checkSpdf= arrayList.length===118
   useEffect(()=>{
      
    if(router.route==="/Games/Family"){
      dispatch({type:`TIMER`,payload:[5,false]})
    }
    
    
  },[])

    return(
       <div className={`${size.width<550?"":""}`}>
        <div className={`${size.width<550?"":"hidden"}  ${size.width<550?"w-screen h-screen flex justify-center items-center bg-blue-300 -ml-4":"hidden"}`}><span className="text-[3rem] font-bold text-[#002233]">Rotate Screen</span></div>
 <div className={` ${size.width<550?"hidden":""} mt-12 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-200`}>
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
         
       <div className={`${state.timer[5]?"hidden":" relative"}  `}><div className={`absolute ${MaxSize?"w-screen h-[17rem]":"w-[109%] h-[34.5rem]"} z-2  opacity-50 bg-gray-700`}></div></div>



        <div className={`w-full  ${MaxSize?"h-[70vh] -mt-12":"h-[80vh]"}`}><GridBox /></div> 
        <div className="w-full h-[20vh] flex">
        <div className=" basis-[15%]">{status==="authenticated" && checkSpdf?<div className={`w-full mt-[0.9rem]  relative z-1 ${MaxSize?"scale-[80%] -mt-4":""}`}><UpdateScore status={state.PeriodFlip} type="Block" name={data.user.name} /></div>:<div></div>}</div>
            
            <div className=" basis-[80%]">
                <div className={`${MaxSize?"h-[3rem]":"h-[4rem]"} w-full `}><SliderFm /></div>
                <div className="flex">
             
                </div>
            </div>
            <div className="-mt-4 basis-[20%]">
                <StopWatch timeStatus="TIMER6" set={checkSpdf} ind={6} />

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