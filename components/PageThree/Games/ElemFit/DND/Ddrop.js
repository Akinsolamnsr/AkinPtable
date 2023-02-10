
import { useEffect, useMemo, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Dblock, Pblock } from '../../../../Const'
import { useAppContext } from '../../../../UseContext'

export default function Ddrop({data}){
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
    const marg=size.width<1300?true:false
   const Wdth=size.width>500 && size.height>1000

    const context=useAppContext()
    const {dispatch,state}=context
    const [box, setBox]=useState([])
    const Block=[]
    const LstFilter=Dblock.map((x)=>x[2])
    const [status,setStatus]=useState(false)
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept:LstFilter,
        drop: (item,montor) =>{
            //setStatus(true); 
             dispatch({  type:"DROPSTATUS",payload:[item.itm]});
             Block.push(Dblock[LstFilter.indexOf(item.itm)])
               
             setBox([...box,...Block])
             
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
          }),
      }))
     const sortPush=(len)=>{
        if(len===38){
            dispatch({  type:"SPDF",payload:"dblock"});
        }
        else{
            return
        }
     }
      const sortBox=box.sort((a,b)=>parseInt(a[0])-parseInt(b[0]))
      useMemo(()=>sortPush(sortBox.length),[sortBox])
    return(
        <div className={`inline-flex flex-col`}>
        <div className={` bg-green-700 ${MaxSize?"w-[13rem] text-[0.5rem] ml-[2rem]":"w-[25.5rem] h-[2rem] ml-12"}   p-1 font-bold text-white border-2 border-green-200 rounded  text-center`}>D-BLOCK   {sortBox.length===38?<>Complete!</>:<></>}</div>
            <div className={` inline-flex ${MaxSize?"w-[13rem] h-[6.5rem] ml-[2rem] bg-white":"w-[25.5rem] h-[13rem] ml-12"}    flex-wrap ${isOver?"border-gray-500 border-4":""}`} ref={drop} style={{zIndex:2}}>
        {sortBox.map((x,i)=>{
            return(
                <div key={`DNDOne${i}`} className={`${MaxSize?"w-[1rem] h-[1rem] text-[0.6rem]":"w-[2rem] h-[2rem]"} border border-white ml-[0.5rem] border-2 text-center mt-[0.5rem] text-white font-bold bg-[#ff00ff]`}>{x[1]}</div>
            )
        })}
            </div>
            {MaxSize?(<></>):(<div className='absolute ml-12 w-[25.5rem] h-[13rem] mt-[2rem]  bg-cyan-700 opacity-50 border-2 border-gray-400' style={{zIndex:1}}></div>)}
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