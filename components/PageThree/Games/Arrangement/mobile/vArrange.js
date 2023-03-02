import { useEffect, useState } from "react"
import { List } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"





export default function VerticalArrangeMobile(){
    const context=useAppContext()
    const {state,dispatch}=context
    const [matchName,setMatchName]=useState("")
    const [matchSymbol,setMatchSymbol]=useState("")
    const setList=new Set(state.matchDrop)
    const arrayList=Array.from(setList)
 const TwentyList=List.slice(0,20)
 const FortyList=List.slice(0,40)
const limit=state.mobA20
const Element=false

return(
   <>
   {
    limit==="Twenty"?(
        <div className=" w-full h-[200%] flex flex-wrap">
         {
            TwentyList.map((x,i)=>{
                const Stat=arrayList.indexOf(x[2]) >-1
                return(
                    <button key={`VArrangeTwenty${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH2",  payload:x[2] })}   className={`w- h-12 bg-gray-100 shadow-xl mt-2 ml-4 border-2  text-center font-bold text-[1rem] ${state.arrangeMobileMatch2===x[2]?"border-black text-black opacity-25":"border-cyan-200 text-cyan-700"}  ${Stat?"hidden":""}`}>{x[2]}</button>
                )
            })
         }
        </div>
    ):limit==="Forty"?(
        <div className=" w-full h-[400%] flex flex-wrap">
        {
           FortyList.map((x,i)=>{
               const Stat=arrayList.indexOf(x[2]) >-1
               return(
                   <button key={`VArrangeForty${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH2",  payload:x[2] })}   className={`w- h-12 bg-gray-100 shadow-xl mt-2 ml-4 border-2  text-center font-bold text-[1rem] ${state.arrangeMobileMatch2===x[2]?"border-black text-black opacity-25":"border-pink-200 text-pink-700"}  ${Stat?"hidden":""}`}>{x[2]}</button>
               )
           })
        }
       </div>
    ):(
        <div className=" w-full h-[1000%] flex flex-wrap">
        {
           List.map((x,i)=>{
               const Stat=arrayList.indexOf(x[2]) >-1
               return(
                   <button key={`VArrangeFull${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH2",  payload:x[2] })}   className={`w- h-12 bg-gray-100 shadow-xl mt-2 ml-4 border-2  text-center font-bold text-[1rem] ${state.arrangeMobileMatch2===x[2]?"border-black text-black opacity-25":"border-green-200 text-cyan-green"}  ${Stat?"hidden":""}`}>{x[2]}</button>
               )
           })
        }
       </div>
    )
   }
   </>
)
}