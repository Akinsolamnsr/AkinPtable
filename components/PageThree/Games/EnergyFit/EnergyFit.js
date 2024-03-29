import { useAppContext } from "../../../UseContext"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import InputEnergy from "./ElemEnergy";
import InputEnergy2 from "./ElemEnergy2";
import InputEnergy3 from "./ElemEnergy3.js";


export default function EnergyTrend({data}){
  
    const context=useAppContext()
    const [index,setIndex]=useState(0)
    const [count, setCount] = useState(0);   
    const [count2, setCount2] = useState(0);  
    const [count3, setCount3] = useState(0);  
    const {state,dispatch}=context
                  
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
    const length=state.config==="Twenty"?19:state.config==="Forty"?39:117
    if(state.config==="Twenty"){
      const length=19
      return(
        <div className="inline-flex flex-col">
        <div className={` flex  ${MaxSize?"h-36":"h-36"} `}>
          
          <div className={`  ${MaxSize?"w-[10rem] h-[10rem]":"w-[20rem] h-[20rem]"}  `}>
            <InputEnergy count={count}  />
          </div>     
        </div>
        
           <div className="flex">
           
           </div>
           <div className="w-full flex  justify-between"><button className={`  text-white font-bold ${MaxSize?"text-[1rem] -mt-36":"text-[1.3rem]  ml-4"} `}  onClick={()=>{setCount(prev=>prev<=0?0:count-1);dispatch({type:"COUNTER",payload:count})}}   >prev</button> <button className={`  text-white font-bold ${MaxSize?"text-[1rem] -mt-36":"text-[1.3rem]  mr-4"} `} onClick={()=>{setCount(prev=>prev>=length?length:count+1);dispatch({type:"COUNTER",payload:count})}}>next</button></div>
       
         <div className=""></div>
        </div> 
    )  
    } 
    else if(state.config==="Forty"){
      const length=39
      
      return(
        <div className="inline-flex flex-col">
        <div className={` flex  ${MaxSize?"h-36":"h-36"} `}>
          
          <div className={`  ${MaxSize?"w-[10rem] h-[10rem]":"w-[20rem] h-[20rem]"}  `}>
            <InputEnergy2 count={count2}  />
          </div>     
        </div>
        
           <div className="flex">
           
           </div>
           <div className="w-full flex  justify-between"><button className={`  text-white font-bold ${MaxSize?"text-[1rem] -mt-36":"text-[1.3rem]  ml-4"} `}  onClick={()=>{setCount2(prev=>prev<=0?0:count2-1);dispatch({type:"COUNTER",payload:count2})}}   >prev</button> <button className={`  text-white font-bold ${MaxSize?"text-[1rem] -mt-36":"text-[1.3rem]  mr-4"} `} onClick={()=>{setCount2(prev=>prev>=length?length:count2+1);dispatch({type:"COUNTER",payload:count2})}}>next</button></div>
       
         <div className=""></div>
        </div> 
    )  
    }
    else{
      const length=117
      return(
        <div className="inline-flex flex-col">
        <div className={` flex  ${MaxSize?"h-36":"h-36"} `}>
          
          <div className={`  ${MaxSize?"w-[10rem] h-[10rem]":"w-[20rem] h-[20rem]"}  `}>
            <InputEnergy3 count={count3}  />
          </div>     
        </div>
        
           <div className="flex">
           
           </div>
           <div className="w-full flex  justify-between"><button className={`  text-white font-bold ${MaxSize?"text-[1rem] -mt-36":"text-[1.3rem]  ml-4"} `}  onClick={()=>{setCount3(prev=>prev<=0?0:count3-1);dispatch({type:"COUNTER",payload:count3})}}   >prev</button> <button className={`  text-white font-bold ${MaxSize?"text-[1rem] -mt-36":"text-[1.3rem]  mr-4"} `} onClick={()=>{setCount3(prev=>prev>=length?length:count3+1);dispatch({type:"COUNTER",payload:count3})}}>next</button></div>
       
         <div className=""></div>
        </div> 
    )  
    }
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