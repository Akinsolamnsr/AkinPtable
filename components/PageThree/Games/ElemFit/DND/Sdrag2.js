import { useDrag } from 'react-dnd'
import { useAppContext } from '../../../../UseContext'
export default function SDragDnd2(prop){
  
  const {data,Index}=prop
  const context=useAppContext()
    const {state,dispatch}=context
    const [{ isDragging }, drag] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type:data[2]  ,
    item:{itm:data[2] } ,
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
        end:(item,monitor)=>{
        
          
        },
      
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
      
    return(
        <div className={`${Index?"hidden":""} inline-flex flex-col w-12 h-full ml-1  shadow-lg rounded-full font-bold ${isDragging?"hidden":""} hover:cursor-pointer
        `} ref={drag}>
        <div className='text-center'>{data[1]}</div><div className="text-[0.5rem] text-center">{data[2]}</div>
        </div>
        )
}