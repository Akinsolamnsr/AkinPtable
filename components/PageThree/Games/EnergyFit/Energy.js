import Confetti from 'react-confetti'
import medaLogo from "../../../../public/images/medal.svg"
import Image from 'next/image'
import { Fireworks } from '@fireworks-js/react'
import { useAppContext } from "../../../UseContext";  
import StopWatch from '../../../stopWatch';
import Sound from '../Sound';
import EnergyTrend from './EnergyFit';
import EnergySelector from './Selector';
import EnergySlide from './EnergySlid';
import { Numb, Spdf } from '../../../Const';
import { useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';
import { ConfigList, Twenty } from '../../../ConsttSpdf';
import UpdateScore from "../../../update";
export default function Energy(){
  const {status,data} =useSession()
    const [swtch,setSwtch]=useState("3")
    const context=useAppContext()
    const {dispatch,state}=context
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
    
    
    
    const check=Array.from(new Set(state.spdfListBox1))
    const checkTwenty=Twenty.every((x)=>state.EnergyLevel.includes(x))
    const checkConfig=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].every((x)=>check.includes(x))
     const checkConfig2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39].every((x)=>check.includes(x))
     const checkConfig3=Numb.every((x)=>check.includes(x))
     const checkConfi=checkConfig && state.config==="Twenty" || checkConfig2 && state.config==="Forty" || checkConfig3 && state.config==="Full"
   
     const Ltn=[[7],[5],[9],[3]]
     console.log(Ltn.sort((a,b)=>a[0]-b[0]))
    return(
       <div className={`${size.width<550?"":""}`}>
   <div className={`${size.width<550?"":"hidden"}  ${size.width<550?"w-screen h-screen flex justify-center items-center bg-blue-300 -ml-4":"hidden"}`}><span className="text-[3rem] font-bold text-[#002233]">Rotate Screen</span></div>
 <div className={`${size.width<550?"hidden":""}    bg-gradient-to-l from-sky-200 via-cyan-300 to-cyan-400 ${MaxSize?"mt-2":"mt-12"}`}>

 <span className={`${checkConfi?"  absolute":"hidden"}`} style={{zIndex:3}}>{<Sound />} </span>      
 <>{checkConfig3 && state.config==="Full"?"":<div className={`${checkConfi ?"  absolute":"hidden"}  `}>{<Confetti width={`${MaxSize?"600":"1000"}`}  height="500"/> }</div>}</>





<div className=''>

<div className={`absolute text-white  ${MaxSize?"ml-[25%] mt-24 text-[1.5rem]":"ml-[40%] mt-48 text-[3.5rem]"} flex flex-col items-center ${checkConfi?"  absolute":"hidden"}`} style={{zIndex:3}}>
            <div>
            {checkConfig && state.config==="Twenty"?<Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} />:
            checkConfig2 && state.config==="Forty"?<><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /></>:checkConfig3 && state.config==="Full"?
            <><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /><Image src={medaLogo} alt="react Logo" width={`${MaxSize?"32":"64"}`} height={`${MaxSize?"32":"64"}`} /></>:""}
            </div>
            <span>{checkConfig&&state.config==="Twenty"?<>weldone !</>:checkConfig2&&state.config==="Forty"?<>Great Job !</>:checkConfig3&&state.config==="Full"?<>Excellent !</>:""}</span>
          </div>
          <div className="">
       {checkConfig3&&state.config==="Full"?<Fireworks
        
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
        <div className={`${checkConfi?"  absolute":"hidden"} z-1 w-full h-full opacity-50 bg-black  flex flex-col`}>
         
         </div>

<div className={`${state.timer[2]?"hidden":"relative"}  `}><div className={`absolute ${MaxSize?"w-screen h-[17rem]":"w-[109%] h-[34.5rem]"}   opacity-50 bg-gray-700`}></div></div>

<div className={`w-full  flex ${MaxSize?"h-[65vh]":"h-[80vh]"}`}>
    <div className='w-[50%]  flex justify-center mt-4'><EnergyTrend data={Spdf} /></div>
    <div className='flex justify-center   w-[50%]'><EnergySelector /></div>
</div>
<div className="w-full h-[20vh] flex">
<div className=" basis-[15%]">{status==="authenticated" && checkConfi?<button className="w-full mt-[0.9rem]  relative z-1 "><UpdateScore status={state.PeriodFlip} type="Configure" name={data.user.name} /></button>:<div></div>}</div>
    <div className={` basis-[80%]  ${MaxSize?"mt-4":""}`}>
        <div className={`mb-4 bg-green-200 ${MaxSize?"h-[1.5rem] w-[21rem] overflow-x-auto":"h-[3rem] w-[42rem]"}`}>
           <EnergySlide idn={swtch} />
        </div>
        <div className="flex  justify-between bg-cyan-400 ">
        <button onClick={()=>{dispatch({ type:"CONFIG",  payload:"Twenty" });setSwtch("1")}} value="1" className={`${swtch==="1"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`} >First Twenty</button>
     <button onClick={()=>{dispatch({ type:"CONFIG",  payload:"Forty" });setSwtch("2")}} value="2"  className={`${swtch==="2"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>First Forty</button>
     <button onClick={()=>{dispatch({ type:"CONFIG",  payload:"Full" });setSwtch("3")}} value="3"   className={`${swtch==="3"?` bg-white ${MaxSize?"pl-4 pr-4 text-[0.7rem] p-1":"pl-8 pr-8 p-2"} rounded-full font-bold text-cyan-700 border-cyan-400 border-2`:`font-bold text-white ${MaxSize?"pl-4 pr-4 text-[0.7rem]":"pl-8 pr-8 p-2"}`}`}>Periodic table</button>
        </div>
    </div>
    <div className=" basis-[20%]">
        <StopWatch set={checkConfi} timeStatus="TIMER3" ind={3}  />

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