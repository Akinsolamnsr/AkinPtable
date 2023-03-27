import { useCallback, useEffect, useMemo, useState } from "react"
import Image from 'next/image'
import Imgs from "../../../../../public/images/6TpoBbxac.png"
import { Confg, TrueBox } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"

export default function Level1({count}){
    const context=useAppContext()
    const {dispatch}=context
    const data=Confg[count]
    const [val,setVal]=useState("")


    const size = useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
    
    useEffect(()=>{
      setVal("")
      
    },[count])
    const List=data[3].split(",")

  const cb=(value)=>{
      if(value==List[0]){
        console.log([value,List[0]])
    }
      console.log(value)
    }

        return(
            <div className={` flex ${MaxSize?"":"flex-col"}`}>  
          <div className={`  `}>
          <input value={val}  onChange={(e)=>{setVal(e.target.value);cb(e.target.value)}}  className={`${MaxSize?"w-[50px] h-[50px] text-[1.5rem] text-center border-4 border-pink-400 shadow-xl bg-gray-200":"w-8"} ml-1`} />
          </div>
          <span className={` ${MaxSize?"ml-8":"w-8 ml-2"}`}>
          {val==List[0]?(<Image src={Imgs} alt="react Logo" width={`${MaxSize?"40":"20"}`} height={`${MaxSize?"40":"20"}`}  />):""}
          </span>
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