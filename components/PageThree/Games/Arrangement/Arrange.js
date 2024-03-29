import StopWatch from "../../../stopWatch";
import { useAppContext } from "../../../UseContext";
import Confetti from 'react-confetti'
import medaLogo from "../../../../public/images/Rating-SVG-Icon-s9fd.svg"
import Image from 'next/image'
import { Fireworks } from '@fireworks-js/react'   
import Sound from "../Sound";
import GridBlockArrangement from "./Gridbox";
import SliderArrage from "./SliderArangement";
import useSWR from 'swr'
import { useEffect, useMemo, useState } from "react";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router"
import UpdateScore from "../../../update";
import { DataFamily, List } from "../../../Const";
import { NameElement, symbolElement } from "../../../SpdfFull";

export default function ElementArrange(){
 
  const router=  useRouter()
  
 
  const {status,data} =useSession()
    const context=useAppContext()
    const [swtch,setSwtch]=useState("3")
    const {state,dispatch}=context
    const ElemName=Array.from(new Set(state.drop4))
    const ElemSym=Array.from(new Set(state.drop3))
    const [wtch,setWtch]=useState(false)
   console.log(ElemName)
   console.log(ElemSym)

    
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500  && size.height>1000
    const Truth=size.width<1000
    
   const TwentyNames =DataFamily.map((x)=>x[2]).slice(0,20)
   const checkTwenty=TwentyNames.every((x)=>ElemSym.includes(x))
   const TwentySym =DataFamily.map((x)=>x[1]).slice(0,20)
   const checkSym=TwentySym.every((x)=>ElemName.includes(x))

   const FortyNames =DataFamily.map((x)=>x[2]).slice(0,40)
   const checkForty=FortyNames.every((x)=>ElemSym.includes(x))
   const FortySym =DataFamily.map((x)=>x[1]).slice(0,40)
   const checkFortySym=FortySym.every((x)=>ElemName.includes(x))
   
   const FullNames =DataFamily.map((x)=>x[2])
   const checkFull=NameElement.every((x)=>ElemSym.includes(x))
   const FullSym =DataFamily.map((x)=>x[1])
   const checkFullSym=symbolElement.every((x)=>ElemName.includes(x))
   
    useEffect(()=>{
      
      if(router.route==="/Games/Arrange"){
        dispatch({type:`TIMER`,payload:[0,false]})
      }
      dispatch({ type:"MATCHDROPEMPTY",  payload:[] })
          console.log("RUE")
      
    },[size])
  
       const checkSpdf=checkTwenty && checkSym && state.fitELement==="Twenty" || checkForty && checkFortySym && state.fitELement==="Forty" || checkFull && checkFullSym && state.fitELement==="full"
      
     
     
    return(
        <div className={`${size.width<550?"":""}`}>
           <div className={`${Truth?"":"hidden"} flex justify-center`}><span style={{fontSize:'50px'}} className=" font-bold">Rotate Screen</span></div>
          <div  className={` ${Truth?"hidden":""}  mt-1`} >
   <span className={`${checkSpdf?"  absolute":"hidden"}`} style={{zIndex:3}}>{<Sound />} </span>      
        <>{checkFull && checkFullSym && state.fitELement==="full"?"":<div className={`${checkSpdf ?"  absolute":"hidden"}  `}>{<Confetti width={`${MaxSize?"600":"1000"}`}  height="500"/> }</div>}</>
    
        <div className="">
          <div className={`absolute text-white  ${MaxSize?"ml-[25%] mt-24 text-[1.5rem]":"ml-[40%] mt-48 text-[3.5rem]"} flex flex-col items-center ${checkSpdf?"  absolute":"hidden"}`} style={{zIndex:3}}>
            <div>
            {checkSym&&state.fitELement==="Twenty"?<Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} />:
            checkForty&&state.fitELement==="Forty"?<><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /></>:checkFull&&state.fitELement==="full"?
            <><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /></>:""}
            </div>
            <span>{checkSym&&state.fitELement==="Twenty"?<>weldone !</>:checkForty&&state.fitELement==="Forty"?<>Great Job !</>:checkFull&&state.fitELement==="full"?<>Excellent !</>:""}</span>
          </div>
          <div className="">
       {checkFull && checkFullSym && state.fitELement==="full"?<Fireworks
        
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
         <div className={`${state.timer[0]?"hidden":"relative"}  `}><div className={`absolute ${MaxSize?"w-screen h-[18rem]":"w-[109%] h-[34.5rem]"}   opacity-50 bg-gray-700`}></div></div>

         

       	<div className={`w-full ${MaxSize?"h-[67vh]":"h-[80vh]"}  lg:mt-12`}><GridBlockArrangement /></div>
         <div className={` h-[17vh] flex`}>
         <div className=" basis-[15%]">{status==="authenticated" && checkSpdf?<div className="w-full mt-[0.9rem]  relative z-1 "><UpdateScore status={state.fitELement} type="arrange" name={data.user.name} /></div>:<div></div>}</div>
            <div className=" basis-[80%]  ">
            <div className={` w-full ${MaxSize?"h-[2rem]":"h-[4rem]"}`}><SliderArrage /></div>
                <div className="flex  justify-between bg-cyan-400 ">
             <button onClick={()=>{dispatch({ type:"FITELEMENT",  payload:"Twenty" });setSwtch("1")}} value="1" className={`${swtch==="1"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`} >First Twenty</button>
             <button onClick={()=>{dispatch({ type:"FITELEMENT",  payload:"Forty" });setSwtch("2")}} value="2"  className={`${swtch==="2"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>First Forty</button>
             <button onClick={()=>{dispatch({ type:"FITELEMENT",  payload:"full" });setSwtch("3")}} value="3"   className={`${swtch==="3"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>Periodic table</button>
                </div>
            </div>
            <div className=" basis-[25%]">
                <StopWatch set={checkSpdf}  ind={1}/>

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
  