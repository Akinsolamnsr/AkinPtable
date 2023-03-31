import { useEffect, useState } from "react"
import { List, ListElement, TwentyElement,LanAct } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"





export default function GridMobileElementFit(){
    const context=useAppContext()
    const {state,dispatch}=context
   const [matchSymbol,setMatchSymbol]=useState("")
const limit=state.mobA40
const Element=false
useEffect(()=>{
    if(state.arrangeMobileMatch3===matchSymbol){
        dispatch({ type:"MATCHDROPFIT",  payload:matchSymbol })
        dispatch({ type:"ELEMENTDROPFIT",  payload:matchSymbol })
       
    }

},[state.arrangeMobileMatch3,matchSymbol])

return(
   <>
   {
    limit==="Twenty"?(
        <div className="w-[38rem] flex flex-wrap mt- mb-4 "> 
            {TwentyElement.map((x,i)=>{
               if(x===0){
                return(
                    <div key={`BlockMobileTwenty${i}`} className="w-[4rem] h-[4rem] ml-2 mt-2 flex rounded-full border-2 border-black justify-between invisible">
                    </div>
                )
               }
               else{
                return(
                    <button onClick={()=>setMatchSymbol(x[1])} key={`BlockMobileTwenty${i}`} className={`w-[4rem] h-[4rem] ml-2 mt-2 font-bold rounded-full border-4 shadow-xl  ${matchSymbol===x[1]?"border-black border-4 bg-gray-200 text-gray-400":""} ${state.arrangeMobbileCheck3?" text-gray-400":`${ state.matchDropFit.includes(x[1])?"border-cyan-300 bg-pink-700 text-white":""}`}`}>
                       {state.arrangeMobbileCheck3 || state.matchDropFit.includes(x[1])?x[1]:(<>{x[0]}</>)}
                    </button>
                )
               }
            })}
        </div>
    ):limit==="Forty"?(
        <div className="w-[65rem] flex flex-wrap mt- mb-4 ">
        {ListElement.map((x,i)=>{
               if(x===0){
                return(
                    <div key={`BlockMobileTwenty${i}`} className="w-[3rem] h-[3rem] ml-2 mt-2 flex rounded-full border-2 border-black justify-between invisible">
                    </div>
                )
               }
               else if(i<76){
                return(
                    <button onClick={()=>setMatchSymbol(x[1])} key={`BlockMobileTwenty${i}`} className={`w-[3rem] h-[3rem] ml-2 mt-2 font-bold rounded-full border-4 shadow-xl  ${matchSymbol===x[1]?"border-black border-4 bg-gray-200 text-gray-400":""} ${state.arrangeMobbileCheck3?" text-gray-400":`${ state.matchDropFit.includes(x[1])?"border-cyan-300 bg-pink-700 text-white":""}`}`}>
                       {state.arrangeMobbileCheck3 || state.matchDropFit.includes(x[1])?x[1]:(<>{x[0]}</>)}
                    </button>
                )
               }
               else{
                return(
                    <button onClick={()=>setMatchSymbol(x[1])} key={`BlockMobileTwenty${i}`} className={`w-[3rem] h-[3rem] ml-2 mt-2 font-bold rounded-full border-4 shadow-xl  `}>
                      
                    </button>
                )
               }
            })}
            
    </div>
    ):(
        <>
        <div className="w-[65rem] flex flex-wrap mt- mb-4 ">
        {ListElement.map((x,i)=>{
               if(x===0){
                return(
                    <div key={`BlockMobileFull${i}`} className="w-[3rem] h-[3rem] ml-2 mt-2 flex rounded-full border-2 border-black justify-between invisible">
                    </div>
                )
               }
               else{
                return(
                    <button onClick={()=>setMatchSymbol(x[1])} key={`BlockMobileFull${i}`} className={`w-[3rem] h-[3rem] ml-2 mt-2 font-bold rounded-full border-4 shadow-xl  ${matchSymbol===x[1]?"border-black border-4 bg-gray-200 text-gray-400":""} ${state.arrangeMobbileCheck3?" text-gray-400":`${ state.matchDropFit.includes(x[1])?"border-cyan-300 bg-pink-700 text-white":""}`}`}>
                       {state.arrangeMobbileCheck3 || state.matchDropFit.includes(x[1])?x[1]:(<>{x[0]}</>)}
                    </button>
                )
               }
             
            })}
            
    </div>
   <div className="w-[55rem]">
   {LanAct.map((x,i)=>{
           return(
            <button onClick={()=>setMatchSymbol(x[1])} key={`BlockMobileFull${i}`} className={`w-[3rem] h-[3rem] ml-2 mt-2 font-bold rounded-full border-4 shadow-xl ${matchSymbol===x[1]?"border-black border-4 bg-gray-200 text-gray-400":""} ${state.arrangeMobbileCheck3?" text-gray-400":`${ state.matchDropFit.includes(x[1])?"border-cyan-300 bg-pink-700 text-white":""}`}`}>
               {state.arrangeMobbileCheck3 || state.matchDropFit.includes(x[1])?x[1]:(<>{x[0]}</>)}
            </button>
        )
    })}
   </div>
        </>
    )
   }
   </>
)
}