import { useDrop } from 'react-dnd'
import arrowLogoRight from "../../../../public/images/rightArrow-com.svg"
import arrowLogoLeft from "../../../../public/images/LeftArrow.png.svg"
import Image from 'next/image'
import { Trend } from '../../../ConsttSpdf'
import { useAppContext } from '../../../UseContext'
import { useEffect, useState } from 'react'

export default function MyDropTargetH({}) {

    const [stateDir,setStateDir]=useState([])
    const dir=["1","3","5","7","9"]
    const  context=useAppContext()
    const {state,dispatch}=context
   
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept:"right",
    drop: (item,monitor) => {
      dispatch({ type:"TRENDROP",  payload:`${item.id}` })
     setStateDir(old=>[...old,item.id])
     
    },
    collect: (monitor) => ({                                                                                                                                                           
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
  }))
  console.log(state.counter)
const Arrow=state.counter===3?arrowLogoLeft:arrowLogoRight
  return(
    <>
    {state.trendDrop.includes(dir[state.counter])?(
           <div className={`w-full h-full  `}>
            <span className='ml-48'> <Image src={Arrow} alt="react Logo" width="150" height="75" /></span>
          </div>
          )
          
          :(
            <div ref={drop} className={`w-full h-full  ${isOver?"bg-[#b3ffff]":""}`}>
          
             
            </div>
          )}
    </>
  )
}


