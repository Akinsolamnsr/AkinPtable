import { DragPreviewImage, useDrag } from 'react-dnd'

import arrowLogoUp from "../../../../public/images/up-arrow-svgrepo-com.svg"
import arrowLogoDown from "../../../../public/images/down-arrow-svgrepo-com.svg"
import Image from 'next/image'


export default function DragDndTrendDown({id}){
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type:"down",
    item:{arrow:"down",id},
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
        end:(item,monitor)=>{
         
        },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return(
    <div className='w-[100%] h-12' ref={drag}>
     <Image src={arrowLogoUp} alt="react Logo" width="300" height="1000"  />
    </div>
    )
 
}