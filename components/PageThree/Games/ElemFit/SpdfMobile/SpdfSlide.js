import { useEffect, useState } from "react"
import { DataFamily, List } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"





export default function SpdfSlideMobile(){
    const context=useAppContext()
    const {state,dispatch}=context
    const setList=new Set(state.matchDropFit2)
    const arrayList=Array.from( state.blockDropFit)
const Element=false
const [matchSymbol,setMatchSymbol]=useState("")
const [matchFamily,setMatchFamily]=useState("")
useEffect(()=>{
    if(state.arrangeMobileMatch5===matchFamily){
        dispatch({ type:"MATCHDROPFIT3",  payload:matchSymbol })
        dispatch({ type:"BLOCKDROPFIT",  payload:matchSymbol })
       
    }
},[state.arrangeMobileMatch5,matchSymbol])



return(
    <div className=" h-12 w-[478rem] flex flex-wrap ">
     {
        DataFamily.map((x,i)=>{
            const Block=x[3].split(',')[0]
            const Stat=arrayList.indexOf(x[1]) >-1
            return(
                <button key={`SpdfAll${i}`} onClick={()=>{setMatchFamily(Block);setMatchSymbol(x[1])}}   className={`w-12 h-12  mt-2 ml-4 border rounded-full text-center font-bold  ${matchSymbol===x[1]?"border-black text-black opacity-25":"border-white text-white"}  ${Stat?"hidden":""}`}><span className="flex flex-col text-[0.7rem]"><span className="text-[1.5rem]">{x[1]}</span>{x[2]}</span></button>
            )
        })
     }
    </div>
)
}