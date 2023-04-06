
import { useEffect, useState } from "react";
import { Confg } from "../../../Const"
import { useAppContext } from "../../../UseContext";
import FormConfig from "./FormConfg";
import Mid from "./Mid";

export default function ConList3({count}){

    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000

    const nList=false
    const context=useAppContext()
    const {dispatch,state}=context
    const data=Confg[count]
    const ArrayConfg=data[3].split(',')
   
    return(
        <div className="w-full h-full  flex flex-col" key={`label`}>
          <div className="absolute ml-[50%] text-[4rem] w-12 h-12 text-white font-bold" >{count+1}</div>
            <div className="h-[80%] flex flex-col text-white border-4 border-white">
            <div className={`bg-cyan-700 text-center  font-bold ${MaxSize?"text-[1rem]":"text-[2rem]"}`}>{data[0]}</div>
            <div className={` bg-cyan-700 text-center font-bold ${MaxSize?"text-[4.5rem]":"text-[9rem]"}`}>{data[1]}</div>
            <div className={`bg-cyan-700 text-center text-[2rem]  font-bold  ${MaxSize?"text-[0.9rem]":"text-[2rem]"}`}>{data[2]}</div>
            </div>
            <div className="h-[20%] ">
           
      <div className="flex w-full ">
      <div className=" flex mt-2">
      <Mid data={ArrayConfg} count={count} List={nList}  />
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