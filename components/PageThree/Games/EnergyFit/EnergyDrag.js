import { useEffect, useState } from 'react'
import { useDrag } from 'react-dnd'
import { useAppContext } from '../../../UseContext'


export default function EnergyDragDnd({data}){
  const context=useAppContext()
    const {dispatch,state}=context
    
    const [{ isDragging }, drag] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type:data  ,
    item:{itm:data} ,
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
        end:(item,monitor)=>{
         
        
          
        },
      
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
      
    return(
        <div className={` w-full h-full `} ref={drag}>
        {data}
        </div>
        )
}