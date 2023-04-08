import { useEffect, useState } from "react"
import { List, List20, List40 } from "../../../Const"
import { useAppContext } from "../../../UseContext"
import MyDropTargetFit from "./Drop1"
import MyDropTargetFit2 from "./Drop2"



export default function FitGrid(prop){
    const context=useAppContext()
    const {state,dispatch}=context
 const TwentyList=List.slice(0,20)
 const FortyList=List.slice(0,40)

 const size = useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000
 

if(state.fitELement==="Twenty"){
    return(
        <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 h-full flex flex-wrap overflow-auto">
            <div className="w-full ">{MaxSize?<button className={`w-full bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white  ${MaxSize?"text-[0.6rem]":""}`} onTouchStart={()=>dispatch({type:"CHECK",payload:true})} onTouchEnd={()=>dispatch({type:"CHECK",payload:false})} >check element</button>:<button className={`w-full bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white  ${MaxSize?"text-[0.6rem]":""}`} onMouseDown={()=>dispatch({type:"CHECK",payload:true})} onMouseUp={()=>dispatch({type:"CHECK",payload:false})} >check element</button>}</div>
        {List20.sort((a,b)=> parseInt(a[0])-parseInt(b[0])).map((x,i)=>{
        
        return(
            <div key={`fitGrid${i}`} className={`   m-1 flex justify-between ${MaxSize?"w-[5rem] h-4":"w-36 h-8"}`}>
            <span className="text-[1rem] font-bold text-black">{x[0]}</span>
            <div className={` h-full bg-white ${MaxSize?"w-12":"w-24 "}`}><MyDropTargetFit accept={x[2]} /></div>
            <div className={` h-full bg-white text-center ml-[0.2rem] ${MaxSize?"w-4":"w-8"}`} ><MyDropTargetFit2 accept={x[1]} /></div>
            </div>
          )
        })}
        </div>    
        ) 
}   
if(state.fitELement==="Forty"){
    return(
        <div className="w-full bg-red-100 h-full flex flex-wrap overflow-auto bg-gradient-to-r from-cyan-500 to-blue-500">
       <div className="w-full ">{MaxSize?<button className={`w-full bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white  ${MaxSize?"text-[0.6rem]":""}`} onTouchStart={()=>dispatch({type:"CHECK",payload:true})} onTouchEnd={()=>dispatch({type:"CHECK",payload:false})} >check element</button>:<button className={`w-full bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white  ${MaxSize?"text-[0.6rem]":""}`} onMouseDown={()=>dispatch({type:"CHECK",payload:true})} onMouseUp={()=>dispatch({type:"CHECK",payload:false})} >check element</button>}</div>
        {List40.sort((a,b)=> parseInt(a[0])-parseInt(b[0])).map((x,i)=>{
        
        return(
            <div key={`fitGrid55${i}`} className={`   m-1 flex justify-between ${MaxSize?"w-[5rem] h-4":"w-36 h-8"}`}>
            <span className="text-[1rem] font-bold text-black">{x[0]}</span>
            <div className={` h-full bg-white ${MaxSize?"w-12":"w-24 "}`}><MyDropTargetFit accept={x[2]} /></div>
            <div className={` h-full bg-white text-center ml-[0.2rem] ${MaxSize?"w-4":"w-8"}`} ><MyDropTargetFit2 accept={x[1]} /></div>
            </div>
          )  
        })}
        </div>    
        ) 

}
else{
    return(
        <div className="w-full bg-red-100 h-full flex flex-wrap overflow-auto bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="w-full sticky top-0">{MaxSize?<button className={`w-full bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white   ${MaxSize?"text-[0.6rem]":""}`} onTouchStart={()=>dispatch({type:"CHECK",payload:true})} onTouchEnd={()=>dispatch({type:"CHECK",payload:false})} >check element</button>:<button className={`w-full bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white  ${MaxSize?"text-[0.6rem]":""}`} onMouseDown={()=>dispatch({type:"CHECK",payload:true})} onMouseUp={()=>dispatch({type:"CHECK",payload:false})} >check element</button>}</div>
        {List.sort((a,b)=> parseInt(a[0])-parseInt(b[0])).map((x,i)=>{
        
            return(
              <div key={`fitGrid99${i}`} className={`   m-1 flex justify-between ${MaxSize?"w-[5rem] h-4":"w-36 h-8"}`}>
              <span className="text-[1rem] font-bold text-black">{x[0]}</span>
              <div className={` h-full bg-white ${MaxSize?"w-12":"w-24 "}`}><MyDropTargetFit accept={x[2]} /></div>
              <div className={` h-full bg-white text-center ml-[0.2rem] ${MaxSize?"w-4":"w-8"}`} ><MyDropTargetFit2 accept={x[1]} /></div>
              </div>
            )
        })}
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