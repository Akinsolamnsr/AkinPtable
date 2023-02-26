import { useDrop } from 'react-dnd'
import arrowLogoUp from "../../../../public/images/UpArrow.svg"
import arrowLogoDown from "../../../../public/images/DownArrow.svg"
import Image from 'next/image'
import { Trend } from '../../../ConsttSpdf'
import { useAppContext } from '../../../UseContext'
import { useEffect, useState } from 'react'


export default function MyDropTargetV() {
   
  const [stateDir,setStateDir]=useState([])
  const dir=["11","13","15","17","19"]
  const  context=useAppContext()
  const {state,dispatch}=context
 
const [{ canDrop, isOver }, drop] = useDrop(() => ({
  accept:"up",
  drop: (item,monitor) => {
    dispatch({ type:"TRENDROP",  payload:`${item.id}` })
   setStateDir(old=>[...old,item.id])
   
  },
  collect: (monitor) => ({                                                                                                                                                           
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
}))
const Arrow=state.counter===3?arrowLogoDown:arrowLogoUp 
return(
  <>
  {state.trendDrop.includes(dir[state.counter])?(<div className={`w-full h-full  `}>
  <span className='my-24 relative'> <Image src={Arrow} alt="react Logo" width="75" height="175"  /></span>
        </div>)
        
        :(
          <div ref={drop} className={`w-full h-full  ${isOver?"bg-[#b3ffff]":""}`}>
        
           
          </div>
        )}
  </>
)
}

