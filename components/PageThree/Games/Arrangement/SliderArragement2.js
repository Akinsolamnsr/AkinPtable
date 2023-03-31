import { useEffect, useState } from "react"
import { List, List20, List40 } from "../../../Const"
import { useAppContext } from "../../../UseContext"
import DragDndA2 from "./Drag2"




export default function SliderArrage2(){
  const context=useAppContext()
  const {state}=context
  const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
    const setList=new Set(state.drop3)
    const arrayList=Array.from(setList)
      const TwentyList=List.slice(0,20)
      const FortyList=List.slice(0,40)
    if(state.fitELement==="Twenty"){
      return(
        <div className="w-full h-full ">
    
     <div className="w-full h-full flex flex-wrap">
     {
   List20.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
      
    const Stat=arrayList.indexOf(x[2]) >-1
return(
  <div key={`ArrangeSlider222${i}`} className={`inline-flex m-1 ${MaxSize?"h-4":"h-8"}`}><DragDndA2 {...{data:x,Index:Stat}}  /></div>
)
})      
}
     </div>
        </div>
        )
    }
    else if(state.fitELement==="Forty"){
      return(
        <div className={`w-full h-full `}>
    
     <div className="w-full h-full flex flex-wrap">
     {
   List40.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
      
    const Stat=arrayList.indexOf(x[2]) >-1
return(
  <div key={`ArrangeSlider22good${i}`} className={`inline-flex m-1`}><DragDndA2 {...{data:x,Index:Stat}}  /></div>
)
})      
}
     </div>
        </div>
        )
    }
    else{
      return(
        <div className="w-full h-full">
    
     <div className="w-full h-full flex flex-wrap">
     {
   List.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
      
    const Stat=arrayList.indexOf(x[2]) >-1
return(
  <div key={`ArrangeSlider22222great${i}`} className={`inline-flex m-1`}><DragDndA2 {...{data:x,Index:Stat}}  /></div>
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