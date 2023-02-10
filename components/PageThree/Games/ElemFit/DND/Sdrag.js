import { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd'
import { useAppContext } from '../../../../UseContext'
export default function SDragDnd(prop){
  const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
  const marg=size.width<1300?true:false
 const Wdth=size.width>500 && size.height>1000
  const {data,Index}=prop
  const context=useAppContext()
    const {state,dispatch}=context
    const [{ isDragging }, drag] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type:data[2]  ,
    item:{itm:data[2] } ,
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
        end:(item,monitor)=>{
          
          
        },
      
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
      
    return(
        <div className={`${Index?"hidden":""} inline-flex flex-col bg-cyan-700 text-white ml-1 ${MaxSize?"w-8 h-8":"w-12 h-12"} shadow-lg rounded-full font-bold ${isDragging?"hidden":""} hover:cursor-pointer
        `} ref={drag}>
        <div className={`text-center ${MaxSize?"text-[0.7rem]":""}`}>{data[1]}</div><div className="text-[0.5rem] text-center">{data[2]}</div>
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