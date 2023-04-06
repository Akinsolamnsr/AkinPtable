import { useEffect, useState } from "react"
import { List, List20, List40 } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"





export default function HorizontalArrangeMobile(){
    const context=useAppContext()
    const {state,dispatch}=context
    const [matchName,setMatchName]=useState("")
    const [matchSymbol,setMatchSymbol]=useState("")
    const setList=new Set(state.matchDrop)
    const arrayList=Array.from(setList)
 

 
const limit=state.mobA20

const Element=false

if(limit==="Twenty"){
    
return(
    <div className=" h-12 w-[400%] flex flex-wrap">
    {
       List20.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
           const Stat=arrayList.indexOf(x[1]) >-1
           return(
               <button key={`HorTwenty${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH",  payload:x[1] })}   className={`w-12 h-12 bg-gray-100 shadow-xl mt-2 ml-4 border-2  text-center font-bold text-[1.5rem] ${state.arrangeMobileMatch===x[1]?"border-black text-black opacity-25":"border-cyan-200 text-black"}  ${Stat?"hidden":""}`}>{x[1]}</button>
           )
       })
    }
   </div>
)
}
else if(limit==="Forty"){
   
return(
    <div className=" h-12 w-[800%] flex flex-wrap">
    {
       List40.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
           const Stat=arrayList.indexOf(x[1]) >-1
           return(
               <button key={`HorTwenty${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH",  payload:x[1] })}   className={`w-12 h-12 bg-gray-100 shadow-xl mt-2 ml-4 border-2  text-center font-bold text-[1.5rem] ${state.arrangeMobileMatch===x[1]?"border-black text-black opacity-25":"border-pink-200 text-pink-700"}  ${Stat?"hidden":""}`}>{x[1]}</button>
           )
       })
    }
   </div>
)
}

else{
return(
    <div className=" h-12 w-[2400%] flex flex-wrap">
    {
       List.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1).map((x,i)=>{
           const Stat=arrayList.indexOf(x[1]) >-1
           return(
               <button key={`HorTwenty${i}`} onClick={()=>dispatch({ type:"ARRANGEMOBILEMATCH",  payload:x[1] })}   className={`w-12 h-12 bg-gray-100 shadow-xl mt-2 ml-4 border-2  text-center font-bold text-[1.5rem] ${state.arrangeMobileMatch===x[1]?"border-black text-black opacity-25":"border-green-200 text-green-700"}  ${Stat?"hidden":""}`}>{x[1]}</button>
           )
       })
    }
   </div>
)
}
}

