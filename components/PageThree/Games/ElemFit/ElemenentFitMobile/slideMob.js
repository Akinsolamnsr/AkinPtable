import { useEffect, useState } from "react"
import { List } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"





export default function ElementSlideMobile(){
    const context=useAppContext()
    const {state,dispatch}=context
    const [matchName,setMatchName]=useState("")
    const [matchSymbol,setMatchSymbol]=useState("")
    const setList=new Set(state.matchDropFit)
    const arrayList=Array.from(setList)
 const TwentyList=List.slice(0,20)
 const FortyList=List.slice(0,40)
const limit=state.mobA40
const Element=false

return(
   <>
   {
    limit==="Twenty"?(
        <div className=" h-12 w-[210%] flex flex-wrap">
         {
            TwentyList.map((x,i)=>{
                const Stat=arrayList.indexOf(x[1]) >-1
                return(
                    <button key={`SldTwenty${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH3",  payload:x[1] })}   className={`w-12 h-12 bg-gray-200 shadow-xl mt-2 ml-4 border-4 rounded-full text-center font-bold text-[1.5rem] ${state.arrangeMobileMatch3===x[1]?"border-black text-black opacity-25":"border-cyan-200 text-cyan-700"}  ${Stat?"hidden":""}`}>{x[1]}</button>
                )
            })
         }
        </div>
    ):limit==="Forty"?(
        <div className=" h-12 w-[410%] flex flex-wrap">
         {
            FortyList.map((x,i)=>{
                const Stat=arrayList.indexOf(x[1]) >-1
                return(
                    <button key={`SldForty${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH3",  payload:x[1] })}   className={`w-12 h-12 bg-gray-100 shadow-xl mt-2 ml-4 border-4 rounded-full text-center font-bold text-[1.5rem] ${state.arrangeMobileMatch3===x[1]?"border-black text-black opacity-25":"border-pink-200 text-pink-700"}  ${Stat?"hidden":""}`}>{x[1]}</button>
                )
            })
         }
        </div>
    ):(
        <div className=" h-12 w-[2400%] flex flex-wrap">
         {
            List.map((x,i)=>{
                const Stat=arrayList.indexOf(x[1]) >-1
                return(
                    <button key={`HorTwenty${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH3",  payload:x[1] })}   className={`w-12 h-12 bg-gray-100 shadow-xl mt-2 ml-4 border-4 rounded-full text-center font-bold text-[1.5rem] ${state.arrangeMobileMatch3===x[1]?"border-black text-black opacity-25":"border-green-200 text-green-700"}  ${Stat?"hidden":""}`}>{x[1]}</button>
                )
            })
         }
        </div>
    )
   }
   </>
)
}