import { useEffect, useState } from "react"
import { List, List20, List40 } from "../../../Const"
import { useAppContext } from "../../../UseContext"

import DragDndA from "./Drag"




export default function SliderArrage(){
    const context=useAppContext()
    const {state}=context
    
    const setList=new Set(state.drop4)
    const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
    const arrayList=Array.from(setList)
  
   
    if(state.fitELement==="Twenty"){
      return(
        <div className={` ${MaxSize?"w-[20rem]":"w-[40rem]"} h-full overflow-x-auto overflow-y-hidden `}>
    
     <div className="w-[60rem] h-full flex flex-wrap mt-2">
     {
   List20.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
    const Stat=arrayList.indexOf(x[1]) >-1
   
    
return(
  <div key={`ArrangeSlider1${i}`} className={`inline-flex `}><DragDndA {...{data:x,Index:Stat}}  /></div>
)
})      
}
     </div>
        </div>
        )
    }
    else if(state.fitELement==="Forty"){
      return(
        <div className={`${MaxSize?"w-[20rem]":"w-[40rem]"} h-full overflow-x-auto overflow-y-hidden `}>
    
     <div className="w-[90rem] h-full flex flex-wrap mt-2">
     {
   List40.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
      
    const Stat=arrayList.indexOf(x[1]) >-1
return(
  <div key={`ArrangeSlider11new${i}`} className={`inline-flex `}><DragDndA {...{data:x,Index:Stat}}  /></div>
)
})      
}
     </div>
        </div>
        )
    }
    else{
      return(
        <div className={`${MaxSize?"w-[20rem]":"w-[40rem]"} h-full overflow-x-auto overflow-y-hidden `}>
    
     <div className="w-[357rem] h-full flex flex-wrap mt-2">
     {
   List.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
      
    const Stat=arrayList.indexOf(x[1]) >-1
return(
  <div key={`ArrangeSlider111old${i}`} className={`inline-flex `}><DragDndA {...{data:x,Index:Stat}}  /></div>
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
  const [windowSize, setWindowSize] = useState
  ({
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
