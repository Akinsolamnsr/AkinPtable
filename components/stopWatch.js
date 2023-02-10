import { useEffect, useMemo, useState } from "react";
import { useAppContext } from "./UseContext";



export default function StopWatch({set,ind}){
    const context=useAppContext()
    const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
    const {state,dispatch}=context
   
    function refreshPage() {
        window.location.reload(false);
      }
    const [time,setTimer]=useState(0)
    const [start, setStart]=useState(false)
    const [clr, setClr]=useState(false)
    useEffect(()=>{
      setClr()
        let Interval=null
        if(start){
            if(!set){
              Interval=setInterval(()=>{
                setTimer(prev=>prev+1)
            },10)
            }

            else{
              setStart(false)
            }
        }

        

        else{
          clearInterval(Interval)
          dispatch({ type:"TIMEUPDATE",  payload:time })  
          
        }
        return ()=>clearInterval(Interval)

        
    },[start,set,time])

    
    return(
        <div className={`flex flex-col `}>
            <div className={`${MaxSize?"text-[1rem]":"text-[1.2rem]"} text-center  flex  justify-center`}><span className="flex"><span className="text-[2.3rem]">{msToTime2(time)[0]}:</span><span className="text-[2.3rem]">{msToTime2(time)[1]}:</span><span className='flex flex-col'><span>{msToTime2(time)[3]}ms</span><span>{msToTime2(time)[2]}s</span></span></span></div>
            <button className={`${MaxSize?"text-[0.7rem]":"pt-1 pb-1"} ${state.timer[ind-1]?"font-gray-400 border-gray-400":"text-white border-cyan-300 bg-blue-700"}  border-2  rounded-full font-bold `} onClick={()=>{setStart(true);dispatch({type:`TIMER`,payload:[ind-1,true]})}}><span className={`${state.timer[ind-1]?"":"animate-ping  inline-flex h-4 w-4 relative rounded-full bg-sky-400 opacity-75"}`}></span>Start Game</button>
            <button className={`${MaxSize?"text-[0.7rem]":"pt-1 pb-1"}  border-2 border-gray-400 rounded-full font-bold font-gray-400`} onClick={()=>{setStart(false);refreshPage()}}>Reset Game</button>
        </div>
    )
}
function pad(n, z) {
  z = z || 2;
  return ('00' + n).slice(-z);
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
  function msToTime(s) {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
  
    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
  }

  function msToTime2(s) {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
  
    return [pad(hrs),pad(mins), pad(secs), pad(ms, 3)]
  }