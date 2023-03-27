import { useEffect, useMemo, useState } from "react"
import Image from 'next/image'
import Imgs from "../../../../../public/images/6TpoBbxac.png"
import { Confg, TrueBox } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"

export default function Level4({count}){
  const nms=[1,2,3]
  const [Arr,setArr]=useState([])
    const context=useAppContext()
    const {dispatch,state}=context
    const data=Confg[count]
    const [val,setVal]=useState("")
    const [cont,setCont]=useState([])
    const [val2,setVal2]=useState("")
    const List=data[3].split(",")
    const ListDup=data[3].split(",")
    useEffect(()=>{
      setVal("")
      setVal2("")
      
    },[count])
    
    useMemo(()=>{
     
      if(ListDup.every((x,i)=>cont.includes(x))){
        TrueBox[count]=true
      }
    },[ListDup,cont])

    const size = useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000


  const cb=(value)=>{
    setCont(prev=>[...prev,value])
  }

  const cb2=(value)=>{
    setCont(prev=>[...prev,value])
   
  }
  
    return(
        <form>
          <div className="flex">
        <div className={` flex ${MaxSize?"":"flex-col"}`}>  
      <div className={``}>
      <input value={val}  onChange={(e)=>{setVal(e.target.value);cb(e.target.value)}} className={`${MaxSize?"w-[50px] h-[50px] text-[1.5rem] text-center border-4 border-pink-400 shadow-xl bg-gray-200":"w-8"} ml-1`} />
      </div>
      <span className={` ${MaxSize?"ml-4":"w-8 ml-2"}`}>
      {val==List[0]?(<Image src={Imgs} alt="react Logo" width={`${MaxSize?"40":"20"}`} height={`${MaxSize?"40":"20"}`}   />):""}
      </span>
      </div>

      <div className={` flex ${MaxSize?"":"flex-col"}`}>  
      <div className={``}>
      <input value={val2}  onChange={(e)=>{setVal2(e.target.value);cb2(e.target.value)}} className={`${MaxSize?"w-[50px] h-[50px] text-[1.5rem] text-center border-4 border-pink-400 shadow-xl bg-gray-200":"w-8"} ml-1`} />
      </div>
      <span className={` ${MaxSize?"ml-4":"w-8 ml-2"}`}>
      {val2==List[1]?(<Image src={Imgs} alt="react Logo" width={`${MaxSize?"40":"20"}`} height={`${MaxSize?"40":"20"}`}   />):""}
      </span>
      </div>
        </div>
        
        </form>
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