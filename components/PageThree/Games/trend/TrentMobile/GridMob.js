
import React, { useEffect, useState } from "react"
import { useAppContext } from "../../../../UseContext";
import { Elem,LanAct, ListElement} from "../../../../Const"

export default function GridTrendMobile(){

    const context=useAppContext()
    const {state,dispatch}=context
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
    
    return(
       <div className="inline-flex  h-[60vh] w-full flex-col scale-[70%]">
        <div className={`flex flex-wrap w-[36rem]`}>
        {ListElement.map((x,i)=>{
            
            if(x===0){
                
                return(
                    <div key={`array-${i}`} className={`w-[2rem] h-[2rem]   invisible `}>
                        
                    </div>
                )
            }
            else{
               
                return(
                    <div key={`arrayScd${i}`} className={`border border-black w-[2rem] h-[2rem]`}>
                    </div>
                )
            }
           
        })}
        </div>
        <div className={`flex flex-wrap w-[30rem] h-[4rem] mt-4 `}>
        {LanAct.map((x,i)=>{

return(
    <div key={`Actinide${i}`} className={`border border-black w-[2rem] h-[2rem] invisible`}> </div>
)
})}
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