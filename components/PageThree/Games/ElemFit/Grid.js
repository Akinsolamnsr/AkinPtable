
import { useEffect, useState } from "react";
import { Elem } from "../../../Const";
import Ddrop from "./DND/Ddrop";
import Fdrop from "./DND/Fdrop";
import Pdrop from "./DND/Pdrop";
import Sdrop from "./DND/Sdrop";



export default function GridBlock(){

    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000 

    return(
        <div className={`inline-flex flex-col  ${MaxSize?"ml-2 ":"ml-12 mt-1"}`} >
        <div className="w-full flex items-end">
            <Sdrop />
            <Ddrop />
            <Pdrop />   
            </div>
            <div><Fdrop /></div>
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