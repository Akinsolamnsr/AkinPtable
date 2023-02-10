
import { useEffect, useState } from "react"
import { List } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"
import SDragDnd from "./Sdrag"





export default function SliderNew(){
    const context=useAppContext()
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025

    const {state}=context
    const setList=new Set(state.drop)
    const arrayList=Array.from(setList)
    
     

      return(
        <div className={`${MaxSize?"w-[25rem]":"w-[40rem]"} h-full overflow-x-auto overflow-y-hidden `}>
    
     <div className={`${MaxSize?"w-[475rem]":"w-[950rem]"} h-full flex flex-wrap mt-2`}>
     {
   List.map((x,i)=>{
      
    const Stat=arrayList.indexOf(x[2]) >-1
return(
  <div key={`SldFit${i}`} className={`inline-flex `}><SDragDnd {...{data:x,Index:Stat}}  /></div>
)
})      
}
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