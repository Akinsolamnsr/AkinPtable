import { Confg } from "../../../../Const";




export default function SideElement(){
    const context=useAppContext()

    return(
        <div className=" flex justify-center">
    <div className="w-[70%]  flex" >
        <div className={`basis-[60%] bg-[#e6005c] flex flex-col border-4 border-cyan-300 shadow-xl`}>
          <div className="text-center text-[1.5rem] font-bold text-white">{Confg[count][0]}</div>
          <div className="text-center text-[7rem] text-white">{Confg[count][1]}</div>
          <div className="text-center text-[2rem] text-white">{Confg[count][2]}</div>
        </div>
    </div>
    <div className="text-[2rem] relative">{count+1}/{length+1}</div>
</div>
    )
}