import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StopWatch from "../../../../stopWatch";
import { useAppContext } from "../../../../UseContext";
import medaLogo from "../../../../../public/images/Rating-SVG-Icon-s9fd.svg"
import TableLogo from "../../../../../public/images/tableTrent.PNG"
import Ions from "../../../../../public/images/ionizationPic.PNG"
import Neg from "../../../../../public/images/NegList.PNG"
import Afin from "../../../../../public/images/Afin.PNG"
import Rad from "../../../../../public/images/empri.PNG"
import {Trend, Trend2, TrendCheck, Trending, TrendPick, TrendPicker} from "../../../../ConsttSpdf"
import Image from 'next/image'
import Fireworks from "@fireworks-js/react";
import GridTrendMobile from "./GridMob";
import UpdateScore from "../../../../update";
import UpdateScoreMobile from "../../../../updateMod";




export default function TrendMobile(){

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
    const Elem1=Array.from(new Set(state.elementDropFit2))
  
 


      
      const ListTrend=["1","3","5","7","2","4","6","8","11","13","15","17","12","14","16","18"]
     const[swipe,setSwipe]=useState(0)
     const[tTrend,setTtrend]=useState(true)
     const[list,setList]=useState([])
     const imgs=swipe===0 ||swipe===4?Ions:swipe===1 || swipe===5?Neg:swipe===2 || swipe===6?Afin:Rad
     const dir=Trending[swipe][1]==="left"?"left":"right"
     const checkSpdf=TrendCheck.every((x)=>list.includes(x))
     useEffect(()=>{
      
      if(router.route==="/Games/TableTrend" || size.width<550){
        dispatch({type:`TIMER`,payload:[6,false]})
      }
      
      setList([])
    },[])
     console.log(swipe)
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

      
     <div className={`${state.timer[6]?"":"absolute z-4 w-full h-[90%] bg-black opacity-25"}`}></div>
       {/* main box*/}
      <div className={`basis-[80%]  flex overflow-auto `}>
      <div className="basis-[20%]  flex">
     {list.includes(TrendPicker[swipe])?<div className="w-full h-full bg-pink-700 text-white text-center">
     {swipe===3?<>{Trending[swipe][3]}<br></br>increase from top to bottom <br></br><span className="text-[4rem]">&darr;</span></>:swipe>3 && swipe<7?
            <>{Trending[swipe][3]}<br></br>decrease from top to bottom <br></br><span className="text-[4rem]">&darr;</span></>:swipe===7?
            <><>{Trending[swipe][3]}<br></br>decrease from bottom to top <br></br><span className="text-[4rem]">&uarr;</span></></>:
            <><>{Trending[swipe][3]}<br></br>increase from bottom to top <br></br><span className="text-[4rem]">&uarr;</span></></>
           }
     </div>:<>
     <button onClick={()=>{if(Trending[swipe][2]==="up"){setList(prev=>[...prev,Trend2[swipe].concat(",up")])}else{return}}}  className="basis-[50%] bg-purple-700 text-white border-4 border-white font-black text-[100px]">&uarr;</button>
      <button onClick={()=>{if(Trending[swipe][2]==="down"){setList(prev=>[...prev,Trend2[swipe].concat(",down")])}else{return}}}  className="basis-[50%] bg-purple-700 text-white border-4 border-white font-black text-[100px]">&darr;</button>
     </>}
     </div>
      <div className="basis-[65%]  flex flex-col">
        <div className="basis-[25%]  flex ">
          {list.includes(TrendPick[swipe])?<div className="w-full h-full bg-pink-700 text-white text-center">
            {swipe===3?<>{Trending[swipe][3]}<br></br>increase from right to left <span className="text-[1.5rem]">&larr;</span></>:swipe>3 && swipe<7?
            <>{Trending[swipe][3]}<br></br>decrease from right to left <span className="text-[1.5rem]">&larr;</span></>:swipe===7?
            <><>{Trending[swipe][3]}<br></br>decrease from left to right <span className="text-[1.5rem]">&#x2192;</span></></>:
            <><>{Trending[swipe][3]}<br></br>increase from left to right <span className="text-[1.5rem]">&#x2192;</span></></>
           }
          </div>:<> <button onClick={()=>{if(Trending[swipe][1]==="left"){setList(prev=>[...prev,Trend2[swipe].concat(",left")])}else{return}}}  className="basis-[50%] bg-purple-700 text-white border-4 border-white font-black text-[2rem]" style={{textTransform:"full-width"}}>&larr;</button>
          <button onClick={()=>{if(Trending[swipe][1]==="right"){setList(prev=>[...prev,Trend2[swipe].concat(",right")])}else{return}}} className="basis-[50%] bg-purple-700 text-white border-4 border-white font-black text-[2rem]">&#x2192;</button>
        </>}
         </div>
        <div className="basis-[75%] ">
        {tTrend? <Image src={TableLogo} alt="tableTrend" height='250' />:<>{<Image src={imgs}  alt="trends" />}</>}
        </div>
      </div>
      <div className="basis-[35%]  flex flex-col">
        <div className="basis-[50%]  text-center text-[1.2rem] font-bold">{Trend2[swipe]}</div>
        <div className="basis-[50%] flex flex-col">
         <div className="basis-[50%] ">
         <button onClick={()=>setSwipe(prev=>prev<=0?0:prev-1)} className="h-full w-[50%] bg-green-500 text-white font-bold border-4 border-white">Prev</button>
          <button onClick={()=>setSwipe(prev=>prev>=7?7:prev+1)} className="h-full w-[50%]  bg-green-500 text-white font-bold  border-4 border-white">Next</button>
         </div>
         <button  onTouchStart={()=>setTtrend(false)} onTouchEnd={()=>setTtrend(true)} className="bg-pink-700 text-white font-bold border border-white basis-[50%]">check trend</button>
        </div>
      </div>
    
      </div>
<hr />
      <div className={`basis-[20%]  flex flex-col `}>
      
      <div className="basis-[20%]">
      <div className=" basis-[20%] flex">
 
 <div className="basis-[70%]  flex  flex-col overflow-auto">
 <div className="absolute z-5  basis-[5%]" style={{zIndex:7}} >{status==="authenticated" && checkSpdf?<span className=" mt-[6.9rem] "><UpdateScoreMobile status={state.PeriodFlip} type="trend" name={data.user.name} /></span>:<div></div>}</div>
 </div>
 
 <div className="basis-[30%]">
 <StopWatch  set={checkSpdf}  ind={7}/>
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