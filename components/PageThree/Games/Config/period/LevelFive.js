import { useEffect, useMemo, useState } from "react"
import Image from 'next/image'
import Imgs from "../../../../../public/images/6TpoBbxac.png"
import { Confg } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"

export default function Level5({count}){
    const context=useAppContext()
    const {dispatch}=context
    const data=Confg[count]
    const [val,setVal]=useState("")
    const [val2,setVal2]=useState("")
    const [val3,setVal3]=useState("")
    const [val4,setVal4]=useState("")
    const [val5,setVal5]=useState("")
    useEffect(()=>{
      setVal("")
      setVal2("")
      setVal3("")
      setVal4("")
      setVal5("")
    },[count])
    const List=data[3].split(",")

    const size = useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
  
  useMemo(()=>{
    if(val==List[0] && val2==List[1] && val3==List[2] && val4==List[3] && val5==List[4]){
      dispatch({  type:"FIG",payload:[count]})
  }
  },[count])
    return(
        <div className="flex">
        <div className={` flex ${MaxSize?"":"flex-col"} `}>  
      <div className="">
      <input value={val}  onChange={(e)=>setVal(e.target.value)} className={`${MaxSize?"w-[50px] h-[50px] text-[1.5rem] text-center border-4 border-pink-400 shadow-xl bg-gray-200":"w-8"} ml-1`} />
      </div>
      <span className="w-8">
      {val==List[0]?(<Image src={Imgs} alt="react Logo" width={`${MaxSize?"40":"20"}`} height={`${MaxSize?"40":"20"}`}  />):""}
      </span>
      </div>

      <div className={` flex ${MaxSize?"":"flex-col"} `}>  
      <div className="">
      <input value={val2}  onChange={(e)=>setVal2(e.target.value)} className={`${MaxSize?"w-[50px] h-[50px] text-[1.5rem] text-center border-4 border-pink-400 shadow-xl bg-gray-200":"w-8"} ml-1`} />
      </div>
      <span className="w-8">
      {val2==List[1]?(<Image src={Imgs} alt="react Logo" width={`${MaxSize?"40":"20"}`} height={`${MaxSize?"40":"20"}`}  />):""}
      </span>
      </div>

      <div className={` flex ${MaxSize?"":"flex-col"} `}>  
      <div className="">
      <input value={val3}  onChange={(e)=>setVal3(e.target.value)} className={`${MaxSize?"w-[50px] h-[50px] text-[1.5rem] text-center border-4 border-pink-400 shadow-xl bg-gray-200":"w-8"} ml-1`} />
      </div>
      <span className="w-8">
      {val3==List[2]?(<Image src={Imgs} alt="react Logo" width={`${MaxSize?"40":"20"}`} height={`${MaxSize?"40":"20"}`}  />):""}
      </span>
      </div>

      <div className={` flex ${MaxSize?"":"flex-col"} `}>  
      <div className="">
      <input value={val4}  onChange={(e)=>setVal4(e.target.value)} className={`${MaxSize?"w-[50px] h-[50px] text-[1.5rem] text-center border-4 border-pink-400 shadow-xl bg-gray-200":"w-8"} ml-1`} />
      </div>
      <span className="w-8">
      {val4==List[3]?(<Image src={Imgs} alt="react Logo" width={`${MaxSize?"40":"20"}`} height={`${MaxSize?"40":"20"}`}   />):""}
      </span>
      </div>

      <div className={` flex ${MaxSize?"":"flex-col"} `}>  
      <div className="">
      <input value={val5}  onChange={(e)=>setVal5(e.target.value)} className={`${MaxSize?"w-[50px] h-[50px] text-[1.5rem] text-center border-4 border-pink-400 shadow-xl bg-gray-200":"w-8"} ml-1`} />
      </div>
      <span className="w-8">
      {val5==List[4]?(<Image src={Imgs} alt="react Logo" width={`${MaxSize?"40":"20"}`} height={`${MaxSize?"40":"20"}`}  />):""}
      </span>
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