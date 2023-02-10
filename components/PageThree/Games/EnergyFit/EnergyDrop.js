import { useEffect, useReducer, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Abox, disp, ElemNumber } from '../../../Const'
import { useAppContext } from '../../../UseContext'

export default function EnergyDrop({accept,Ind}) {
  const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000
 const reducer=(state,action)=>{     
     let newState
       switch(action.type){
         case `${disp[Ind]}`:
          console.log(disp[Ind])
         state[Ind].push(...action.payload)
          newState={...state}
          break;
          default:
          throw new Error()
       }
       return newState
  }
     const[Elemnum,dispatched]=useReducer(reducer,ElemNumber)  
    
  const [drp,setDrp]=useState(false)
    const context=useAppContext()
    const {dispatch,state}=context
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept,
    drop: (item,montor) =>{
        dispatch({type:"SPDFBOX",payload:[item.itm]})
        setDrp(true)
        dispatched({type:"Elem"+(Ind+1),payload:[item.itm]})
       console.log(item)
    },
    collect: (monitor) => ({
        isOver: monitor.isOver(),   
        canDrop: monitor.canDrop()
      }),
  }))
  console.log(accept)
  return (
    <div ref={drop} className={`w-[3rem] h-[2.5rem] ml-1 mt-1 border border-black ${canDrop ?"bg-green-400":""}`}>
     <span className={`${state.onoff?"":`${drp?"":"hidden"}`} ${MaxSize?"text-[0.6rem]":""} `}>{accept}</span>
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