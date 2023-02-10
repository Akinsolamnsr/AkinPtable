
import { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { DataFamily } from '../../../Const'
import { useAppContext } from '../../../UseContext'



export default function Famdrop({data,fam}){

  const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
    
    const context=useAppContext()
    const {dispatch}=context
    const [box, setBox]=useState([])
    const Block=[]
  const Filter=DataFamily.filter((x)=>data.includes(x[4]))
 
    const Indie=Filter.map((v)=>v[2])
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept:data,
        drop: (item,montor) =>{
            dispatch({  type:"DROP2",payload:[item.itm]});

            Block.push(Filter[Indie.indexOf(item.itm)])
       
             setBox([...box,...Block])
             
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
          }),
      }))
          
    return(
        <div className='flex flex-col w-full h-full'>    
        <div  className={`text-center  bg-[#005266] text-white rounded border-2 border-[#66e0ff] ${MaxSize?"text-[0.5rem]":""}`}>{fam}</div>
        <div className={`flex flex-wrap w-full h-full ${isOver?"bg-cyan-300":""}`} ref={drop}>
              {box.map((x,i)=>{
                return(
                    <span key={`FamDrop${i}`} className={`${MaxSize?"w-[1rem] h-[1rem] ml-1 text-[0.7rem] bg-cyan-100":"w-12 h-12"}  font-bold  ${isOver?"text-white":"text-[#003333]"}`}>{x[1]}</span>
                )
              })}
            </div>
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