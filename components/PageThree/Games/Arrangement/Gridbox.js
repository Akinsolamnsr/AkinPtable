import { useEffect, useState } from "react";
import FitGrid from "./GridFit";
import SliderArrage2 from "./SliderArragement2";




export default function GridBlockArrangement(){


    const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000
      
    return(
        <div className="inline-flex  w-full h-full " >
        <div className="w-4/5  md:w-2/3 flex items-end bg-green-200">
             <FitGrid />
            </div>
            <div className={`w-1/5 md:w-1/3  items-end border overflow-auto  h-full`}>
             <SliderArrage2 />
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
  