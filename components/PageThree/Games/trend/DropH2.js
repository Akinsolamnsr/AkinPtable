import { useDrop } from 'react-dnd'
import arrowLogoRight from "../../../../public/images/rightArrow-com.svg"
import arrowLogoLeft from "../../../../public/images/LeftArrow.png.svg"
import Image from 'next/image'
import { Trend } from '../../../ConsttSpdf'
import { useAppContext } from '../../../UseContext'
import { useEffect, useReducer, useState } from 'react'
import { disp } from '../../../Const'

export default function MyDropTargetH2({accept,switch2,count}) {

  const [stateDir,setStateDir]=useState([])
  const dir=["2","4","6","8","10"]
  const  context=useAppContext()
  const {state,dispatch}=context
 
const [{ canDrop, isOver }, drop] = useDrop(() => ({
  accept:"left",
  drop: (item,monitor) => {
    dispatch({ type:"TRENDROP",  payload:`${item.id}` })
   setStateDir(old=>[...old,item.id])
   
  },
  collect: (monitor) => ({                                                                                                                                                           
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
}))
const Arrow=state.counter===3?arrowLogoRight:arrowLogoLeft
return(
  <>
  {state.trendDrop.includes(dir[state.counter])?(<div className={`w-full h-full `}>
  <span className='ml-48'> <Image src={Arrow} alt="react Logo" width="150" height="75" /></span>
        </div>)
        
        :(
          <div ref={drop} className={`w-full h-full  ${isOver?"bg-[#b3ffff]":""}`}>
        
           
          </div>
        )}
  </>
)
}

