import { useEffect, useState } from "react"
import { List, List20, List40 } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"





export default function GridMobile(){
    const context=useAppContext()
    const {state,dispatch}=context
    const [matchName,setMatchName]=useState("")
    const [matchSymbol,setMatchSymbol]=useState("")
 const TwentyList=List.slice(0,20)
 const FortyList=List.slice(0,40)
const limit=state.mobA20
const Element=false
useEffect(()=>{
    if(state.arrangeMobileMatch===matchSymbol){
        dispatch({ type:"MATCHDROP",  payload:matchSymbol })
    }
    if(state.arrangeMobileMatch2===matchName){
        dispatch({ type:"MATCHDROP",  payload:matchName })
    }
},[state.arrangeMobileMatch,state.arrangeMobileMatch2,matchSymbol,matchName])
return(
   <>
   {
    limit==="Twenty"?(
        <div className="h-[100vh] flex flex-wrap mt- mb-4 ">
            {List20.sort((a,b)=> parseInt(a[0])-parseInt(b[0])).map((x,i)=>{
                return(
                    <div key={`GridMobileTwenty${i}`} className="w-[14rem] h-12 ml-4 mt-4 flex justify-between">
                      <button onClick={()=>setMatchName(x[2])} className={`${state.arrangeMobbileCheck?"basis-[70%] text-white font-bold":`  ${ state.matchDrop.includes(x[2])?"basis-[70%] bg-[#e60073] text-white font-bold":"bg-gray-200 basis-[70%] bg-[#e60073]"}`} ${matchName===x[2]?"border-black border-4 opacity-50":""}  shadow-xl  `}>{state.arrangeMobbileCheck || state.matchDrop.includes(x[2])?x[2]:(<>click {x[0]}</>)}</button>
                      <button onClick={()=>setMatchSymbol(x[1])} className={`${state.arrangeMobbileCheck?"basis-[25%] text-white font-bold":` ${state.matchDrop.includes(x[1])?"basis-[25%] bg-[#e60073] text-white font-bold":"bg-gray-200 basis-[25%] bg-[#e60073]"}`} ${matchSymbol===x[1]?"border-black border-4 opacity-50":""} shadow-xl`}>{state.arrangeMobbileCheck || state.matchDrop.includes(x[1])?x[1]:(<> {x[0]}</>)}</button>
                    </div>
                )
            })}
        </div>
    ):limit==="Forty"?(
        <div className="h-[200vh] flex flex-wrap mt- mb-4 ">
        {List40.sort((a,b)=> parseInt(a[0])-parseInt(b[0])).map((x,i)=>{
            return(
                <div key={`GridMobileForty${i}`} className="w-[14rem] h-12 ml-4 mt-4 flex justify-between">
                  <button onClick={()=>setMatchName(x[2])} className={`${state.arrangeMobbileCheck?"basis-[70%] text-white font-bold":`  ${ state.matchDrop.includes(x[2])?"basis-[70%] bg-[#e60073] text-white font-bold":"bg-gray-200 basis-[70%] bg-[#e60073]"}`} ${matchName===x[2]?"border-black border-4 opacity-50":""}  shadow-xl  `}>{state.arrangeMobbileCheck || state.matchDrop.includes(x[2])?x[2]:(<span className="text-green-700 font-bold">click {x[0]}</span>)}</button>
                  <button onClick={()=>setMatchSymbol(x[1])} className={`${state.arrangeMobbileCheck?"basis-[25%] text-white font-bold":` ${state.matchDrop.includes(x[1])?"basis-[25%] bg-[#e60073] text-white font-bold":"bg-gray-200 basis-[25%] bg-[#e60073]"}`} ${matchSymbol===x[1]?"border-black border-4 opacity-50":""} shadow-xl`}>{state.arrangeMobbileCheck || state.matchDrop.includes(x[1])?x[1]:(<span  className="text-green-700  font-bold"> {x[0]}</span>)}</button>
                </div>
            )
        })}
    </div>
    ):(
        <div className="h-[500vh] flex flex-wrap mt- mb-4 ">
        {List.sort((a,b)=> parseInt(a[0])-parseInt(b[0])).map((x,i)=>{
            return(
                <div key={`GridMobileFull${i}`} className="w-[14rem] h-12 ml-4 mt-4 flex justify-between">
                  <button onClick={()=>setMatchName(x[2])} className={`${state.arrangeMobbileCheck?"basis-[70%] text-white font-bold":`  ${ state.matchDrop.includes(x[2])?"basis-[70%] bg-[#e60073] text-white font-bold":"bg-gray-200 basis-[70%] bg-[#e60073]"}`} ${matchName===x[2]?"border-black border-4 opacity-50":""}  shadow-xl  `}>{state.arrangeMobbileCheck || state.matchDrop.includes(x[2])?x[2]:(<span className="text-blue-700  font-bold">click {x[0]}</span>)}</button>
                  <button onClick={()=>setMatchSymbol(x[1])} className={`${state.arrangeMobbileCheck?"basis-[25%] text-white font-bold":` ${state.matchDrop.includes(x[1])?"basis-[25%] bg-[#e60073] text-white font-bold":"bg-gray-200 basis-[25%] bg-[#e60073]"}`} ${matchSymbol===x[1]?"border-black border-4 opacity-50":""} shadow-xl`}>{state.arrangeMobbileCheck || state.matchDrop.includes(x[1])?x[1]:(<span  className="text-blue-700 font-bold"> {x[0]}</span>)}</button>
                </div>
            )
        })}
    </div>
    )
   }
   </>
)
}