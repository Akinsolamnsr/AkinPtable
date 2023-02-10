
import { useEffect, useMemo, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Sblock } from '../../../../Const'
import { useAppContext } from '../../../../UseContext'

export default function Sdrop(){

    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000

    const context=useAppContext()

    const {dispatch,state}=context
    
    const [box, setBox]=useState([])
    const Block=[]
    const LstFilter=Sblock.map((x)=>x[2])
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept:LstFilter,
        drop: (item,montor) =>{
          console.log(state.dragDrop)
          dispatch({  type:"DROPSTATUS",payload:[item.itm]});
            
          Block.push(Sblock[LstFilter.indexOf(item.itm)])
            
          setBox([...box,...Block])
          
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
          }),
      }))
      const sortPush=(len)=>{
        if(len===14){
            dispatch({  type:"SPDF",payload:"sblock"});
        }
        else{
            return
        }
     }
           const sortBox=box.sort((a,b)=>parseInt(a[0])-parseInt(b[0]))
           const sortBox2=box.sort((a,b)=>parseInt(a[0])-parseInt(b[0]))
           const sortBox3=box.sort((a,b)=>parseInt(a[0])-parseInt(b[0]))
           useMemo(()=>{sortPush(sortBox.length)},[sortBox])
           
    return(
        <div className='inline-flex flex-col ' >
            
            <div className={`${MaxSize?"w-[3rem] text-[0.5rem]":"w-[5.5rem] ml-12"} bg-green-700  p-1 font-bold text-white border-2 border-green-200 rounded`} style={{zIndex:2}}>S-BLOCK {sortBox.length===14?<div>Complete!</div>:<></>}</div>
            <div className={`${MaxSize?"w-[3rem] h-[10.5rem] text-[0.5rem] bg-white":"w-[5.5rem] h-[20.5rem] ml-12"} inline-flex    flex-wrap  ${isOver?"border-gray-500 border-4":""}   ` } ref={drop} style={{zIndex:2}}>
            
        {sortBox.map((x,i)=>{
            
        return(
            <div key={`DNDFour${i}`} className={`${MaxSize?"w-[1rem] h-[1rem]":"w-[2rem] h-[2rem]"}   border bg-[#ff1a75] ml-[0.5rem] border-2 border-white text-white font-bold text-center mt-[0.3rem]`}>{x[1]}</div>
        )
    })}
            </div>
            {MaxSize?(<></>):<div className='absolute w-[5.5rem] h-[24.5rem]  bg-cyan-700 opacity-50 border-2 border-gray-400 ml-12' style={{zIndex:1}}></div>}
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
  