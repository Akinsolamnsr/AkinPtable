import { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { useAppContext } from '../../../UseContext'
import useSound from 'use-sound'
//import sound from "../../../../public/sound/mixkit-quick-jump-arcade-game-239.wav"

export default function MyDropBlock({data}) {
  const context=useAppContext()
  const {dispatch,state}=context
  const [status,setStatus]=useState(false)
  const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
const [{ canDrop, isOver }, drop] = useDrop(() => ({
  accept:data[1],
  drop: (item,montor) =>{
      setStatus(true); 
       dispatch({  type:"DROPSTATUS",payload:[data[1]]});
       
  },
  collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
}))
const Block=data[3].split(',')[0] 
return (
  <div key={`array-${data[0]}`} className={`w-full h-full ${isOver?`${MaxSize?"bg-cyan-500  scale-[200%]":"scale-[150%] bg-cyan-500 "}`:""} flex rounded-full items-center justify-center 
  ${status?`${Block==="s"?"text-[#002933] bg-[#005266] border-4 border-[#4ddbff] ":`${Block==="p"?"bg-[#660029] border-4 border-[#ff80b3]":`${Block==="d"?"text-[#004d1a] bg-[#80ffaa]":"text-[#330033] bg-[#ff80ff]"}`}`}`:"border border-black"}
  `}  ref={drop}>  
  <span className={`${status?"":`${state.flip?"text-gray-300 ":`${state.flip?"text-gray-300 ":"hidden "}`}`}  ${MaxSize?"text-[0.8rem]":"text-[2rem]"} text-white font-bold `}>{data[1]}</span>
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