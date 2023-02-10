import { useEffect, useState } from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd'
import { useAppContext } from '../../../UseContext'

export default function DragDndA2(prop){
  const context=useAppContext()

  const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000
       


  const {state}=context
  const {data,Index}=prop
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type:data[2],
    item:{items:data[2]},
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
        end:(item,monitor)=>{
         
        },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
  const Block=data[3].split(',')[0]  
    return(
        <div className={`${Index?"hidden":""} inline-flex flex-col p-1  ${isDragging?"hidden":""} hover:cursor-pointer ${MaxSize?" h-4":"h-8" } mt-2
        ${Block==="s"?"text-[#002933] bg-[#99ebff]":`${Block==="p"?"text-[#660029] bg-[#ff80b3]":`${Block==="d"?"text-[#004d1a] bg-[#80ffaa]":"text-[#330033] bg-[#ff80ff]"}`}`}
        `} ref={drag}>
        <div className={`text-center  ${MaxSize?"text-[0.5rem]":"text-[1rem]"}`}>{data[2]}</div>
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