import StopWatch from "../../stopWatch";
import { useAppContext } from "../../UseContext";
import ConfettiDisp from "./DND/particle";
import GridBlock from "./gridBlock";
import Slider from "./Slider";
import Confetti from 'react-confetti'
import medaLogo from "../../../public/images/Rating-SVG-Icon-s9fd.svg"
import { Fireworks } from '@fireworks-js/react'
import medas from "../../../public/images/medals-sample.png"
import Image from 'next/image'
import useSound from 'use-sound'
import Sound from "./Sound";
import { useSession } from 'next-auth/react';
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router"
import UpdateScore from "../../update";
export default function BlockFit(){
  const router=  useRouter()
  const {status,data} =useSession()
    const context=useAppContext()
    const {dispatch,state}=context
    const [swtch,setSwtch]=useState("3")
    const [wtch,setWtch]=useState(false)
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
            
    const Elem1=Array.from(new Set(state.drop))
    const Elem2=Array.from(new Set(state.dropS))
    const Elem3=Array.from(new Set(state.dropT))
    useEffect(()=>{
      
      if(router.route==="/Games/Block"  || size.width<550){
        dispatch({type:`TIMER`,payload:[1,false]})
      }
      
      console.log(size.width)
    },[])
    
      const checkSpdf=Elem1.length===20 && state.PeriodFlip==="Twenty" || Elem2.length===40 && state.PeriodFlip==="Forty" || Elem3.length===118 && state.PeriodFlip==="Full"
     
 
   
   
    return(     
        <div className={`${size.width<1023?"hidden":""}`}>
   
         <div className={`${size.width<1100?"hidden":""}  mt-1`}>
          
         <span className={`${checkSpdf?"  absolute":"hidden"}`} style={{zIndex:3}}>{<Sound />} </span>       
           <>{Elem3.length===118 && state.PeriodFlip==="Full"?"":<div className={`${checkSpdf ?"  absolute":"hidden"}  `}>{<Confetti width={`${MaxSize?"600":"1000"}`}  height="500"/> }</div>}</>
          <div className="">
         
          <div className={`absolute text-white  ${MaxSize?"ml-[25%] mt-24 text-[1.5rem]":"ml-[40%] mt-48 text-[3.5rem]"} flex flex-col items-center ${checkSpdf?"  absolute":"hidden"}`} style={{zIndex:3}}>
            <div>
            {Elem1.length===20 && state.PeriodFlip==="Twenty"?<Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} />:
             Elem2.length===40 && state.PeriodFlip==="Forty"?<><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /></>:Elem3.length===118 && state.PeriodFlip==="Full"?
            <><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /></>:""}
            </div>
            <span>{Elem1.length===20 && state.PeriodFlip==="Twenty"?<>weldone !</>:Elem2.length===40 && state.PeriodFlip==="Forty"?<>Great Job !</>:Elem3.length===118 && state.PeriodFlip==="Full"?<>Excellent !</>:""}</span>
          </div>
          <div className="">
       {Elem3.length===118 && state.PeriodFlip==="Full"?<Fireworks
        
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
        <div className={`${checkSpdf?"  absolute":"hidden"} z-1 w-[105%] h-full opacity-50 bg-black  flex flex-col`}>
         
         </div>
          <div className={`${state.timer[1]?"hidden":"relative"} `}><div className={`absolute ${MaxSize?`w-screen ${state.PeriodFlip==="Full"?"h-[23rem]":"h-[20rem]"}`:"w-[109%] h-[34.5rem]"}   opacity-50 bg-gray-700`}></div></div>
 
          
          <div className={`w-full ${MaxSize?"h-[69vh]":"h-[87vh]"}  lg:mt-12 mb-4`}><GridBlock /></div>
          <div className={` h-[17vh] flex ${state.PeriodFlip==="Full"?`${MaxSize?"mt-[5rem]":"-mt-2"}`:""}`}>
              <div className="basis-[15%]">{status==="authenticated" && checkSpdf?<button className="w-full mt-[0.9rem]  relative z-1 "><UpdateScore status={state.PeriodFlip} type="ElementFit" name={data.user.name} /></button>:<div></div>}</div>
             <div className=" basis-[82%]  ">
             <div className={` w-full ${MaxSize?"h-[2rem]":"h-[4.5rem]"}`}><Slider /></div>
                 <div className="flex  justify-between bg-cyan-400 ">
              <button onClick={()=>{dispatch({ type:"PERIODFLIP",  payload:"Twenty" });setSwtch("1")}} value="1" className={`${swtch==="1"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`} >First Twenty</button>
              <button onClick={()=>{dispatch({ type:"PERIODFLIP",  payload:"Forty" });setSwtch("2")}} value="2"  className={`${swtch==="2"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>First Forty</button>
              <button onClick={()=>{dispatch({ type:"PERIODFLIP",  payload:"Full" });setSwtch("3")}} value="3"   className={`${swtch==="3"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>Periodic table</button>
                 </div>
             </div>
             <div className=" basis-[25%] -mt-[1rem]">
                 <StopWatch  set={checkSpdf} ind={2}  />
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