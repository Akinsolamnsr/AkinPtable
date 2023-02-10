import { useDrop } from 'react-dnd'
import arrowLogoRight from "../../../../public/images/vright-arrow-svgrepo-com2.svg"
import arrowLogoLeft from "../../../../public/images/left-arrow-svgrepo-com.svgleft-arrow-svgrepo-com2.svg"
import Image from 'next/image'
import { Trend } from '../../../ConsttSpdf'
import { useAppContext } from '../../../UseContext'
import { useEffect, useReducer, useState } from 'react'
import { disp } from '../../../Const'

export default function MyDropTargetH2({accept,switch2,count}) {
    const  context=useAppContext()
    const {state,dispatch}=context
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
    const [chg,setChg]=useState(true)
    const data1=Trend[state.counter][0][3]
    const swtcher=data1==="ATOMIC RADIUS"?!switch2:switch2
    const acct=data1==="ATOMIC RADIUS"?"right":"left"
     const ElemNumber={0:true, 1:true, 2:true, 3:true}
     const Elem=['Elem1', 'Elem2', 'Elem3', 'Elem4']
    const reducer=(state,action)=>{
      let newState
      
        switch(action.type){
          
          case `Elem1`:
            state[action.payload]=false
           newState={...state}
           break;
           case `Elem2`:
            state[action.payload]=false
           newState={...state}
           break;
           case `Elem3`:
            state[action.payload]=false
            console.log(state)
           newState={...state}
           break;
           case `Elem4`:
            state[action.payload]=false
           newState={...state}
           break;
           default:
           throw new Error()
        }
        return newState
   }
      const[Elemnum,dispatched]=useReducer(reducer,ElemNumber)  

    useEffect(()=>{
      if(!chg) setChg(true)
     if(!chg){
      dispatch({ type:"TREND",  payload:state.counter })
     }
    },[])
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept:acct,
    drop: (item,montor) => {
      setChg(false)
       
    },
    collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
  }))
    console.log(state.trend)
  if(state.trend[state.counter]){
    return (
        <div ref={drop} className={`w-full h-full  ${canDrop?"bg-red-400":""}`}>
            
            
         </div>
      )
  }
  else{

    return(
        <div className='w-full h-full bg-red-300'>
       {swtcher?<span className={` ${MaxSize?"ml-[5rem]":"ml-48"} `}><Image src={arrowLogoRight} alt="react Logo" width="150" height="400" /></span>:
       <span className={` ${MaxSize?"ml-[5rem] ":"ml-48"} `}><Image src={arrowLogoLeft} alt="react Logo" width="150" height="400" /></span>

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