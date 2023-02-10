import { DragPreviewImage, useDrag } from 'react-dnd'



export default function DragDnd({name,color}){
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type:name,
    item:{name},
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
        end:(item,monitor)=>{
             
        },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

 
    return(
        <div className={`w-12 h-12 ml-4  ${color==="red"?"bg-red-400":"bg-blue-400"} ${isDragging?"hidden":""}`} ref={drag}>
           {name}
        </div>
        )
}