import NavWrap2 from "../../components/PageThree/NavWrap2";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import TrendFit from "../../components/PageThree/Games/trend/Trend";






export default function TableTrend(){
  return (
    <NavWrap2>
      <DndProvider backend={HTML5Backend} >
      <TrendFit />
      </DndProvider>
    </NavWrap2>
)
}

