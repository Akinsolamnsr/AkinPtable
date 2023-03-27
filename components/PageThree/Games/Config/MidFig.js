import ConList from "./ConList";
import FormConfig from "./FormConfg";
import Level1 from "./period/LevelOne";
import Level2 from "./period/LevelTwo";
import Level3 from "./period/LevelThree";
import Level4 from "./period/LevelFour";
import Level5 from "./period/LevelFive";
import Level6 from "./period/LevelSix";
import Level7 from "./period/LevelSeven";
import { useAppContext } from "../../../UseContext";


export default function MidFig({data,count}){
    const context=useAppContext()
    const {dispatch,state}=context
    const names=[]
  
    data.forEach((data,i) => {
        names.push(<span><FormConfig data={data} /></span>)
      })
 
const ListNames=[
(<span key='SliderMidNum1'><Level1 count={count} /></span>),(<span key='SliderMidNum2'><Level2 count={count} /></span>),(<span key='SliderMidNum3'><Level3 count={count} /></span>),
(<span key='SliderMidNum8'><Level4 count={count} /></span>),(<span key='SliderMidNum9'><Level5 count={count} /></span>),(<span key='SliderMidNum10'><Level6 count={count} /></span>),
(<span key='SliderMidNum7'><Level7 count={count} /></span>)
]
const SliceList=ListNames.slice(data.length-1,data.length)
//console.log(state.double)
const ListOne=data.length===1?[(<span key='SliderMid1'><Level1 count={count} /></span>)]:
data.length===2?[(<span key='SliderMidNum2'><Level2 count={count} /></span>)]:
data.length===3?[(<span key='SliderMidNum3'><Level3 count={count} /></span>)]:
data.length===4?[(<span key='SliderMidNum4'><Level4 count={count} /></span>)]:
data.length===5?[(<span key='SliderMidNum5'><Level5 count={count} /></span>)]:
data.length===6?[(<span key='SliderMidNum6'><Level6 count={count} /></span>)]:[(<span key='SliderMidNum7'><Level6 count={count} /></span>)]
    return(
        <div className="flex">
        {ListOne}
        </div>
    )

   }
