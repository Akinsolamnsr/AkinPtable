import { useEffect, useState } from "react";
import { Trend } from "../../../ConsttSpdf";
import { useAppContext } from "../../../UseContext";
import GridTrend from "./Grid"
import Ions from "../../../../public/images/ionizationPic.PNG"
import Image from 'next/image'
export default function DrawTrend(){
  const context=useAppContext()
  const {dispatch,state}=context
  const [swtch, setSwtch] = useState(true);
    const length=7
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
    const countPrev=state.counter<1?0:state.counter-1
    const countNext=state.counter>2?3:state.counter+1
   

return(
    <div className={`ml-4 flex flex-col items-center ${MaxSize?"relative":""}`}>
        <div className="flex justify-between w-full"><button className={`   font-bold ${MaxSize?"text-[1rem] -mt-8":"text-[1.3rem]  ml-4"} `}  onClick={()=>{dispatch({ type:"COUNTER",  payload:countPrev })}}   >prev</button> <button className={`   font-bold ${MaxSize?"text-[1rem] -mt-8":"text-[1.3rem]  mr-4"} `} onClick={()=>{dispatch({ type:"COUNTER",  payload:countNext })}}>next</button></div>
    {swtch?<GridTrend />:<div className={`h-[60vh] w-[36rem] `}><Image src={Ions} alt="react Logo" width="1500" height="800" /></div>}
    <button className={`${MaxSize?"-mt-[6rem] ":"-mt-[5rem] p-2"}   border-4 border-white bg-green-700 text-white font-bold pl-8 pr-8`} onClick={()=>setSwtch(swtch?false:true)}>check trend</button>
    <span className={`  font-bold  ${MaxSize?"mt-[1rem]":"-mt-12 text-[1.5rem] mt-[2rem]"}`}>{Trend[state.counter][1][3]}</span>
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