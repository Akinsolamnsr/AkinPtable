
import { useEffect, useMemo, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Pblock } from '../../../../Const'
import { useAppContext } from '../../../../UseContext'

export default function Pdrop(){

    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000

    const context=useAppContext()
    const {dispatch,state}=context
    const [box, setBox]=useState([])
    const Block=[]
    const LstFilter=Pblock.map((x)=>x[2])
    
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept:LstFilter,
        drop: (item,montor) =>{
            //setStatus(true); 
             dispatch({  type:"DROPSTATUS",payload:[item.itm]});
             
             Block.push(Pblock[LstFilter.indexOf(item.itm)])
               
             setBox([...box,...Block])
             
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
          }),
      }))
      const sortPush=(len)=>{
        if(len===36){
            dispatch({  type:"SPDF",payload:"pblock"});
        }
        else{
            return
        }
     }
      const sortBox=box.sort((a,b)=>parseInt(a[0])-parseInt(b[0]))
      useMemo(()=>sortPush(sortBox.length),[sortBox])
    return(
        <div className='inline-flex flex-col mt-2'>
   <div className={`ml-12  ${MaxSize?"w-[8.4rem]  text-[0.5rem] ":"w-[16.5rem] h-[2rem] ml-12"}  bg-green-700 bg-green-700  p-1 font-bold text-white border-2 border-green-200 rounded text-center`}>P-BLOCK {sortBox.length===36?<>Complete!</>:<></>}</div>
            <div className={`${MaxSize?"w-[8.4rem] h-[8.5rem] bg-white":"w-[16.5rem] h-[17rem] "} ml-12 inline-flex    flex-wrap ${isOver?"border-gray-500 border-4":""}`} ref={drop} style={{zIndex:2}}>
            
        {sortBox.map((x)=>{
            return(
                <div key={`DNDThree${i}`} className={`${MaxSize?"w-[1rem] h-[1rem] text-[0.6rem]":"w-[2rem] h-[2rem] mt-[0.5rem]"} border border-white ml-[0.5rem] border-2 text-center  text-white font-bold bg-[#2db300]`}>{x[1]}</div>
            )
        })}
            </div>
            {MaxSize?(<></>):<div className='absolute ml-12 w-[16.5rem] h-[17rem] mt-[2rem]  bg-cyan-700 opacity-50 border-2 border-gray-400' style={{zIndex:1}}></div>}
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