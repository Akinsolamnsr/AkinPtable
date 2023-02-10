import { useDrop } from 'react-dnd'
import DragDnd from './useDrag'

export default function MyDropTarget({accept}) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept,
    drop: (item,montor) => console.log(montor.getDifferenceFromInitialOffset()),
    collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
  }))
  return (
    <div ref={drop} className="w-12 h-12 bg-blue-200 ml-24">
        
        {canDrop && isOver?"Dropped":"Drop Target"}
     </div>
  )
}