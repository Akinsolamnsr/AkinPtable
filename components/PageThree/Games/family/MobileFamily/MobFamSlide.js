import { useEffect, useState } from "react"
import { DataFamily, List } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"





export default function FamilySlideMobile(){
    const context=useAppContext()
    const {state,dispatch}=context
    const setList=new Set(state.matchDropFit2)
    const arrayList=Array.from(setList)
const Element=false
const [matchSymbol,setMatchSymbol]=useState("")
const [matchFamily,setMatchFamily]=useState("")
useEffect(()=>{
    if(state.arrangeMobileMatch4===matchFamily || state.arrangeMobileMatch4.includes(matchFamily)){
        dispatch({ type:"MATCHDROPFIT2",  payload:matchSymbol })
        dispatch({ type:"ELEMENTDROPFIT2",  payload:matchSymbol })
       
    }
},[state.arrangeMobileMatch4,matchSymbol])



return(
    <div className=" h-12 w-[478rem] flex flex-wrap ">
     {
        DataFamily.map((x,i)=>{
            const Stat=arrayList.indexOf(x[1]) >-1
            return(
                <button key={`FamAll${i}`} onClick={()=>{setMatchFamily(x[4]);setMatchSymbol(x[1])}}   className={`w-12 h-12  mt-2 ml-4 border rounded-full text-center font-bold  ${matchSymbol===x[1]?"border-black text-black opacity-25":"border-white text-white"}  ${Stat?"hidden":""}`}><span className="flex flex-col text-[0.7rem]"><span className="text-[1.5rem]">{x[1]}</span>{x[2]}</span></button>
            )
        })
     }
    </div>
)
}