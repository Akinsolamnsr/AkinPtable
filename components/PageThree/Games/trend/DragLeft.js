import { DragPreviewImage, useDrag } from 'react-dnd'
import arrowLogoRight from "../../../../public/images/right-arrow-svgrepo-com.svg"
import arrowLogoLeft from "../../../../public/images/left-arrow-svgrepo-com.svg"
import arrowLogoUp from "../../../../public/images/up-arrow-svgrepo-com.svg"
import arrowLogoDown from "../../../../public/images/down-arrow-svgrepo-com.svg"
import Image from 'next/image'


export default function DragDndTrendLeft(){
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type:"left",
    item:{},
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
     <Image src={arrowLogoLeft} alt="react Logo" width="250" height="180" />
    </div>
    )
 
}