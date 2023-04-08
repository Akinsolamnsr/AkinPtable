import { useEffect, useState } from "react"
import { List, List20, List40 } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"





export default function VerticalArrangeMobile(){
    const context=useAppContext()
    const {state,dispatch}=context
    const [matchName,setMatchName]=useState("")
    const [matchSymbol,setMatchSymbol]=useState("")
    const setList=new Set(state.matchDrop)
    const arrayList=Array.from(setList)
 
const limit=state.mobA20


return(
   <>
   {
    limit==="Twenty"?(
        <div className=" w-full h-[200%] flex flex-wrap">
         {
            List20.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
                const Stat=arrayList.indexOf(x[2]) >-1
                return(
                    <button key={`VArrangeTwenty${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH2",  payload:x[2] })}   className={`w- h-12 bg-gray-100 shadow-xl mt-2 ml-4 border-2  text-center font-bold text-[1rem] ${state.arrangeMobileMatch2===x[2]?"border-black text-black opacity-25":"border-cyan-200 text-black"}  ${Stat?"hidden":""}`}>{state.arrangeMobbileCheck?x[0]:x[2]}</button>
                )
            })
         }
        </div>
    ):limit==="Forty"?(
        <div className=" w-full h-[400%] flex flex-wrap">
        {
           List40.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
               const Stat=arrayList.indexOf(x[2]) >-1
               return(
                   <button key={`VArrangeForty${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH2",  payload:x[2] })}   className={`w- h-12 bg-gray-100 shadow-xl mt-2 ml-4 border-2  text-center font-bold text-[1rem] ${state.arrangeMobileMatch2===x[2]?"border-black text-black opacity-25":"border-pink-200 text-pink-700"}  ${Stat?"hidden":""}`}>{state.arrangeMobbileCheck?x[0]:x[2]}</button>
               )
           })
        }
       </div>
    ):(
        <div className=" w-full h-[1000%] flex flex-wrap">
        {
           List.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
               const Stat=arrayList.indexOf(x[2]) >-1
               return(
                   <button key={`VArrangeFull${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH2",  payload:x[2] })}   className={`w- h-12 bg-gray-100 shadow-xl mt-2 ml-4 border-2  text-center font-bold text-[1rem] ${state.arrangeMobileMatch2===x[2]?"border-black text-black opacity-25":"border-green-200 text-cyan-green"}  ${Stat?"hidden":""}`}>{state.arrangeMobbileCheck?x[0]:x[2]}</button>
               )
           })
        }
       </div>
    )
   }
   </>
)
}