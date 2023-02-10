import { useDrop } from 'react-dnd'
import arrowLogoUp from "../../../../public/images/up-arrow-svgrepo-com.svg"
import arrowLogoDown from "../../../../public/images/down-arrow-svgrepo-com.svg"
import Image from 'next/image'
import { Trend } from '../../../ConsttSpdf'
import { useAppContext } from '../../../UseContext'
import { useEffect, useState } from 'react'


export default function MyDropTargetV2({accept,switch1,count}) {
    const  context=useAppContext()
    const {state}=context
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
    const marg=size.width<1300?true:false
   const Wdth=size.width>500 && size.height>1000
    const [chg,setChg]=useState(true)
    const data2=Trend[state.counter][1][3]
    const swtcher=data2==="ATOMIC RADIUS"?!switch1:switch1
    const acct=data2==="ATOMIC RADIUS"?"up":"down"
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept:acct,
    drop: (item,montor) =>{
      setChg(false)
    },
    collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
  }))
  if(chg){
    return (
        <div ref={drop} className={`w-full h-full ${MaxSize?"":""}  ${canDrop?"bg-red-300":""}`}>
            
            
         </div>
      )
  }
  else{

    return(
        <div className={`w-full  bg-red-300 h-full ${MaxSize?"":""}`}>
       {swtcher? <Image src={arrowLogoUp} alt="react Logo" width="80" height="200"  />:
        <Image src={arrowLogoDown} alt="react Logo" width="80" height="200"  />
       }
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