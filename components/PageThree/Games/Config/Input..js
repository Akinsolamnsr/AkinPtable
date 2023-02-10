import { Confg } from "../../../Const";
import MidFig from "./MidFig";
export default function InputConfig({count}){
    const data=Confg[count]     
    return(
        <div className="w-full h-full bg-gray-300 flex flex-col">
            <div className="h-[80%] flex flex-col">
            <div className="h-[15%] bg-blue-500 text-center">{data[0]}</div>
            <div className="h-[70%] bg-blue-100 text-center text-[8rem]">{data[1]}</div>
            <div className="h-[15%] bg-blue-500 text-center">{data[2]}</div>
            </div>
            <div className="h-[20%] bg-blue-300 ">
            <form>
      
      <div className="flex w-full ">
      <div className="w-8">
        <MidFig count={count} />
      </div>


      </div>
      
    </form>
   
            </div>
        </div>
    )
}