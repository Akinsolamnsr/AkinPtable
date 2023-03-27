import { useEffect, useState } from "react"
import { useAppContext } from "../../../../UseContext";





export default function ConfigMobSelector(){
  const context=useAppContext()
  const {state,dispatch}=context
  const [swtch,setSwtch]=useState("1s")
   const Handle=(e)=>{
    dispatch({type:"CONSPDF",payload:e.target.value})
    setSwtch(e.target.value)
  };
  const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000
    return(
   <div className="text-white flex flex-col ">
    <div className=" ">
      <button onClick={Handle} value="1s" className={` m-1 font-bold bg-[#cc00cc] border-4 ${swtch==="1s"?"border-black":" border-white "}  ${MaxSize?"w-[3rem]  text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`} >1s</button>
      </div>
     
     <div className=" ">
        <button onClick={Handle} value="2s" className={` bg-[#00e6e6]  m-1 border-4  font-bold ${swtch==="2s"?"border-black":" border-white "} ${MaxSize?"w-[3rem]  text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>2s</button>
        <button  onClick={Handle} value="2p" className={` bg-[#990099] m-1 border-4 font-bold ${swtch==="2p"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>2p</button>
      </div>

      <div className=" ">
        <button onClick={Handle} value="3s" className={` bg-[#990099]  m-1 border-4 font-bold ${swtch==="3s"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>3s</button>
        <button  onClick={Handle} value="3p" className={` bg-[#009999]  m-1 border-4  font-bold ${swtch==="3p"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>3p</button>
        <button  onClick={Handle} value="3d" className={` bg-[#660066]  m-1 border-4  font-bold ${swtch==="3d"?"border-black":" border-white "} ${MaxSize?"w-[3rem]  text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>3d</button>
      </div>

      <div className=" ">
        <button onClick={Handle} value="4s" className={` bg-[#009999]  m-1 border-4  font-bold ${swtch==="4s"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>4s</button>
        <button onClick={Handle} value="4p" className={` bg-[#660066]  m-1 border-4  font-bold ${swtch==="4p"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>4p</button>
        <button onClick={Handle} value="4d" className={` bg-[#006666]  m-1 border-4  font-bold ${swtch==="4d"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>4d</button>
        <button onClick={Handle} value="4f"  className={` bg-[#4d004d]  m-1 border-4  font-bold ${swtch==="4f"?"border-black":" border-white "} ${MaxSize?"w-[3rem]  text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>4f</button>
      </div>

      <div className=" ">
        <button onClick={Handle} value="5s" className={` bg-[#660066]  m-1 border-4  font-bold ${swtch==="5s"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>5s</button>
        <button  onClick={Handle} value="5p" className={` bg-[#006666]  m-1 border-4  font-bold ${swtch==="5p"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>5p</button>
        <button  onClick={Handle} value="5d" className={` bg-[#4d004d]  m-1 border-4  font-bold  ${swtch==="5d"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>5d</button>
        <button  onClick={Handle} value="5f" className={` bg-[#003333]  m-1 border-4  font-bold  ${swtch==="5f"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>5f</button>
      </div>

      <div className="">
        <button onClick={Handle} value="6s" className={` bg-[#006666]   m-1 border-4  font-bold ${swtch==="6s"?"border-black":" border-white "} ${MaxSize?"w-[3rem]  text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>6s</button>
        <button onClick={Handle} value="6p" className={` bg-[#4d004d]  m-1 border-4  font-bold  ${swtch==="6p"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>6p</button>
        <button onClick={Handle} value="6d" className={` bg-[#003333]  m-1 border-4  font-bold  ${swtch==="6d"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>6d</button>
      </div>

      <div className=" ">
        <button onClick={Handle} value="7s" className={` bg-[#4d004d]  m-1 border-4 font-bold ${swtch==="7s"?"border-black":" border-white "} ${MaxSize?"w-[3rem]  text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>7s</button>
        <button onClick={Handle} value="7p" className={` bg-[#003333]  m-1 border-4 font-bold  ${swtch==="7p"?"border-black":" border-white "} ${MaxSize?"w-[3rem]   text-[1.2rem]":"w-[3rem] h-12  text-[1.5rem]"}`}>7p</button>
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