
import { useEffect, useState } from "react"
import { List } from "../../Const"
import {Func} from "../../Pageone/constant"
import { useAppContext } from "../../UseContext"
import DragDnd from "./DND/DragBlockFit"
import DragDnd2 from "./DND/DragBlockFit2"
import DragDnd3 from "./DND/DragBlockFit3"



export default function Slider(){
    const context=useAppContext()
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025

    const {state}=context
    const setList=new Set(state.drop)
    const setList2=new Set(state.dropS)
    const setList3=new Set(state.dropT)
    const arrayList=Array.from(setList)
    const arrayList2=Array.from(setList2)
    const arrayList3=Array.from(setList3)
      const TwentyList=List.slice(0,20)
      const FortyList=List.slice(0,40)

    if(state.PeriodFlip==="Twenty"){
      return(
        <div className={`${MaxSize?"w-[25rem]":"w-[40rem]"} h-full overflow-x-auto overflow-y-hidden `}>
    
     <div className={` ${MaxSize?"w-[65rem]":"w-[120rem]"} h-full flex flex-wrap mt-2`}>
     {
   TwentyList.map((x,i)=>{
    const Stat=arrayList.indexOf(x[1]) >-1
return(
  <div key={`SliderTwentyGrid${i}`} className={`inline-flex `}><DragDnd {...{data:x,Index:Stat}}  /></div>
)
})      
}
     </div>
        </div>
        )
    }
    else if(state.PeriodFlip==="Forty"){
      return(
        <div className={`${MaxSize?"w-[25rem]":"w-[40rem]"} h-full overflow-x-auto overflow-y-hidden `}>
    
     <div className={` h-full flex flex-wrap mt-2 ${MaxSize?"w-[129rem]":"w-[240rem]"}`}>
     {
   FortyList.map((x,i)=>{
      
    const Stat=arrayList2.indexOf(x[1]) >-1
return(
  <div key={`SliderFortyGrid${i}`} className={`inline-flex `}><DragDnd2 {...{data:x,Index:Stat}}  /></div>
)
})      
}
     </div>
        </div>
        )
    }
    else{
      return(
        <div className={`${MaxSize?"w-[25rem]":"w-[40rem]"} h-full overflow-x-auto overflow-y-hidden `}>
    
     <div className={`${MaxSize?"w-[475rem]":"w-[950rem]"} h-full flex flex-wrap mt-2`}>
     {
   List.map((x,i)=>{
      
    const Stat=arrayList3.indexOf(x[1]) >-1
return(
  <div key={`SliderListGrid${i}`} className={`inline-flex `}><DragDnd3 {...{data:x,Index:Stat}}  /></div>
)
})      
}
     </div>
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