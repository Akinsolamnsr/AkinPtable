import { useEffect, useMemo, useReducer, useState } from "react"
import { useDrop } from "react-dnd"
import { Numb2, SpdfList, SpdfNumber } from "../../../ConsttSpdf"
import { useAppContext } from "../../../UseContext"

export default function SpdfDrop({accept,count,pos,numb,cont}) {
    const SpdL=accept[0]
    const SpdN=accept[2]
     const [drp,setDrp]=useState(0)
     const [obj,setObj]=useState({})
     const [arr,setArr]=useState(0)
       const context=useAppContext()
       const {dispatch,state}=context
       
       const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
    
     const init={...SpdfNumber} 
     const reducer=(state,action)=>{
         let newState
           switch(action.type){
             case `${drp}`:
                state[count].push(action.payload) 
              newState={...state}
              break;
              default:
              throw new Error()
           }
           return newState
        }
         const[datum,dispatched]=useReducer(reducer,init)

     const [{ canDrop, isOver }, drop] = useDrop(() => ({
       accept:SpdL,
       drop: (item,montor) =>{
        dispatch({type:`ENERGYLEVEL`,payload:item.itm})
        setDrp(count)
        dispatched({type:`${drp}`,payload:SpdN})
        
       },
       collect: (monitor) => ({
           isOver: monitor.isOver(),
           canDrop: monitor.canDrop(),
         }),
     }))
     useEffect(()=>{
        const arrSet=Array.from(new Set(datum[count]))
        if(!arrSet.every((x)=>pos.includes(x))){
            dispatch({type:"SPDFLISTBOX1",payload:count})
        }
      
     },[count])
    //// console.log(state.EnergyLevel)
     return (
       <div ref={drop} className={`${MaxSize?"w-[1.5rem] h-[1.25rem]":"w-[3rem] h-[2.5rem]"}   ml-1 mt-1  ${datum[count].includes(SpdN)?" ":"bg-white"}  text-center ${isOver ?"bg-[#660029]":""}`}>
        <span className={`${datum[count].includes(SpdN)?`text-white font-bold ${MaxSize?"text-[0.8rem]":"text-[1.5rem]"}`:`${state.onoff?"text-gray-700":"hidden"}`}`}>{SpdL}</span>
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