import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import StopWatch from "../../../../stopWatch";
import UpdateSore from "../../../../update";
import { useAppContext } from "../../../../UseContext";
import GridMobile from "./GirdMobile";
import HorizontalArrangeMobile from "./hArrange";
import VerticalArrangeMobile from "./vArrange";
import Confetti from 'react-confetti'
import Sound from "../../Sound";
import medaLogo from "../../../../../public/images/Rating-SVG-Icon-s9fd.svg"
import { ArrangeForty, ArrangeFull, ArrangeTwenty } from "./MobileConst";
import Image from 'next/image'
import Fireworks from "@fireworks-js/react";
import UpdateScore from "../../../../update";
import UpdateScoreMobile from "../../../../updateMod";
import { NextSeo } from 'next-seo';


export default function ArragementMobile(){

    
    function refreshPage() {
        window.location.reload(false);
      }
    const router=  useRouter()
    const context=useAppContext()
    const {state,dispatch}=context

  const setList=new Set(state.matchDrop)
    const arrayList=Array.from(setList)
  const  checkTwenty=ArrangeTwenty.every((x)=>arrayList.includes(x))
  const  checkForty=ArrangeForty.every((x)=>arrayList.includes(x))
  const  checkFull=ArrangeFull.every((x)=>arrayList.includes(x))
  const checkSpdf=checkTwenty || checkForty || checkFull
 
    const {status,data} =useSession()
    useEffect(()=>{
      
        if(router.route==="/Games/Arrange"){
          dispatch({type:`TIMER`,payload:[1,false]})
        }
        
        
      },[])


    return (
   <div className=" flex w-screen  h-[100%]">
      <NextSeo
            title="Arrange Element name and symbol Game"
            description="Fit the element name and symbol on the exact box"
        />
       {/* main box*/}
      <div className={`basis-[70%]  flex flex-col`}>
    
      <div className={`${checkSpdf?"absolute z-2 w-full h-[90%]":"hidden"}`}>
      
      <>{checkFull&&state.mobA20==="Full"?<Fireworks
        
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
            {checkTwenty&&state.mobA20==="Twenty"?<Image src={medaLogo} alt="react Logo" width="32" height="32" />:
            checkForty&&state.mobA20==="Forty"?<><Image src={medaLogo} alt="react Logo" width="32" height="32" /><Image src={medaLogo} alt="react Logo" width="32" height="32" /></>:checkFull&&state.mobA20==="Full"?
            <><Image src={medaLogo} alt="react Logo" width="32" height="32" /><Image src={medaLogo} alt="react Logo" width="32" height="32" /><Image src={medaLogo} alt="react Logo" width="32" height="32" /></>:""}
            </div>
            <span className="font-bold text-white text-[1.2rem]">{checkTwenty&&state.mobA20==="Twenty"?<>weldone !</>:checkForty&&state.mobA20==="Forty"?<>Great Job !</>:checkFull&&state.mobA20==="Full"?<>Excellent !</>:""}</span>
      </div>
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      </div>


     <div className={`${state.timer[0]?"":"absolute z-1 w-full h-[85%] bg-black opacity-25"}`}></div>
       {/*Horizontal element selector box box*/}
      <div className="basis-[85%] bg-blue-200 overflow-auto ">
        <button onTouchStart={()=>dispatch({ type:"ARRANGEMOBILECHECK",  payload:true })} onTouchEnd={()=>dispatch({ type:"ARRANGEMOBILECHECK",  payload:false })}      className="w-full bg-blue-700 rounded-full text-white font-bold border-4 border-pink-200 sticky top-0 h-8 ">check Element </button>
         <div className={`${state.timer[0]?"":"hidden"}`}>
            <GridMobile  />
         </div>
       
      </div>
    {/* start, select, reset game in that order*/}
<div className="basis-[15%]  flex">
    <div className="basis-[20%]">
    <div className=" basis-[15%]">{status==="authenticated" && checkSpdf?<div className="w-full mt-[0.9rem]  relative z-1 "><UpdateSore status={state.mobA20} type="arrange" name={data.user.name} /></div>:<div></div>}</div>
    </div>
    <div className="basis-[80%] bg-blue-200 overflow-auto"><HorizontalArrangeMobile /></div>

</div>

      </div>

      <div className={`basis-[30%]  flex flex-col`}>

    {/* element selector box*/}
    <div className=" basis-[80%] overflow-auto bg-blue-200">
<VerticalArrangeMobile />
</div>   

   {/*element selector, , timer, range box*/}
<div className=" basis-[20%] flex">
 
<div className="basis-[70%]  flex flex-col bg-cyan-400">
    <button onClick={()=>dispatch({ type:"MOBA20",  payload:"Twenty" })}  className={`text-center  w-full font-bold text-white ${state.mobA20==="Twenty"?"bg-blue-600 border-2 border-cyan-200 rounded-full":""}`}>Twenty</button>
   
    <button onClick={()=>dispatch({ type:"MOBA20",  payload:"Forty" })}  className={`text-center  w-full font-bold text-white ${state.mobA20==="Forty"?"bg-blue-600 border-2 border-cyan-200 rounded-full":""}`}>Forty</button>
   
    <button onClick={()=>dispatch({ type:"MOBA20",  payload:"Full" })}  className={`text-center  w-full font-bold text-white ${state.mobA20==="Full"?"bg-blue-600 border-2 border-cyan-200 rounded-full":""}`}>Full</button>
   
</div>

<div className="basis-[30%]">
<StopWatch  set={checkSpdf}  ind={1}/>
</div>

</div>

      </div>
   </div>
  );
  }