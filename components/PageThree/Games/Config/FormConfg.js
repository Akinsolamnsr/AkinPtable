import { useEffect, useMemo, useState } from "react"
import Image from 'next/image'
import { useAppContext } from "../../../UseContext"
//import Imgs from "../../../../../public/images/6TpoBbxac.png"
export default function FormConfig({count}){
    const context=useAppContext()
    const {dispatch}=context
    const [val,setVal]=useState("")
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
    useEffect(()=>{
        if(val==count){
            dispatch({  type:"FIG",payload:[count]})
        }
      },[count])
   
    useMemo(()=>{
        if(val==count){
          dispatch({  type:"FIG",payload:[count]})
      }},[count])

    return(
        <>
    <input className="w-8 ml-1" value={val}  onChange={(e)=>setVal(e.target.value)} />    
    {val==count?(<>Correct</>):"Not Correct"}  
        </>
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