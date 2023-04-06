import { useEffect, useState } from "react";
import { Confg,Spdf } from "../../../Const";
import { useAppContext } from "../../../UseContext";
import ConEnergy from "./ConEnergy";
import EnergyDrop from "./EnergyDrop";  
import SpdfMid from "./SpdfMid";
import SpdfMid3 from "./SpdfMid3";
export default function InputEnergy3({count}){
  const OList=Confg.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1)
  const OSpdf=Spdf.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1)
    const data=OList[count]     
    const dataSpdf=OSpdf[count]  
    const counter=parseInt(OList[count][0] )
    const Datum=dataSpdf[3].split(",")[0]
    const Data=Datum.split(" ")
    const context=useAppContext()
    const {state,dispatch}=context
    
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000

    
   return(
        <div className="w-full h-full bg-[#e60073] flex flex-col ">
          <div className="text-[2rem] absolute font-bold text-white ml-2">{count+1}</div>   
            <div className="h-[80%] flex flex-col font-bold text-[1.2rem] text-white border-4 border-white ">
            <div className={`h-[15%] text-center text-[1.2rem] ${MaxSize?"text-[1rem]":"text-[1.2rem]"} `}>{data[0]}</div>
            <div className={`h-[70%]  text-center  ${MaxSize?"text-[4rem]":"text-[8rem]"}`}>{data[1]}</div>
            <div className={`h-[15%]  text-center mt-4 ${MaxSize?"text-[1rem]":"text-[1.2rem]"}`}>{data[2]}</div>
            </div>
            <div className=" w-full   bg-[#660029] pb-2">
              <SpdfMid3 count={counter-1} />
            </div>
            <div>{MaxSize?<button onTouchStart={()=>dispatch({type:"ONOFF",payload:true})} onTouchEnd={()=>dispatch({type:"ONOFF",payload:false})} className={`bg-green-400 text-white w-full font-bold  rounded p-1 border-4 border-white ${MaxSize?"text-[0.8rem]":"text-[1.2rem]"}`}  >check configuration</button>:
            <button onMouseDown={()=>dispatch({type:"ONOFF",payload:true})} onMouseUp={()=>dispatch({type:"ONOFF",payload:false})} className={`bg-green-400 text-white w-full font-bold  rounded p-1 border-4 border-white ${MaxSize?"text-[0.8rem]":"text-[1.2rem]"}`}  >check configuration</button>}</div>
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