import { useEffect, useMemo, useState } from 'react'
import { useDrop } from 'react-dnd'
import { useAppContext } from '../../../UseContext'


export default function MyDropTargetFit({accept}) {
    const [drp,setDrp]=useState(false)
    const context=useAppContext()
    const {state,dispatch}=context

    const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept,
    drop: (item,montor) =>{
        setDrp(true)
        dispatch({type:"DROP3",payload:[item.items]})
       
    },
    collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
  }))
  
  return (
    <div ref={drop} className={`w-ful h-full flex text-center   ${isOver?"scale-[150%] bg-green-300":""}`}>
    <span className={`w-full h-full ${state.check?"text-gray-400":`${drp?" bg-[#ff3399] text-white font-bold shadow-lg":"hidden"}`} ${MaxSize?"text-[0.6rem]":""} `}>{accept}</span>
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