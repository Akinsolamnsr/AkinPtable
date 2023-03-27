import { useEffect, useState } from "react"
import { List,DataFamily, Sblock, Pblock, Dblock, Fblock } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"





export default function SpdfDropMobile(){
    const context=useAppContext()
    const {state,dispatch}=context
    const grpfm=[['Other non metals'], ['Noble gas'], ['Alkaline metal'], ['Alkaline earth metal'],
    ['Metalloid'], ['Halogen'], ['Post-transition metal',"Post-Transition Metal"], 
    ['Transition metal',"Transition Metal","Transitional Metal","Post Transitional Metal"],["Actinide"],["Lanthanide"]]
    const Filter1=DataFamily.filter((x)=>grpfm[2][0]===x[4])
    const Indie1=Filter1.map((v)=>v[1])

    const Filter2=DataFamily.filter((x)=>grpfm[3][0]===x[4])
    const Indie2=Filter2.map((v)=>v[1])

    const Filter3=DataFamily.filter((x)=>grpfm[8][0]===x[4])
    const Indie3=Filter3.map((v)=>v[1])

    const Filter4=DataFamily.filter((x)=>grpfm[5][0]===x[4])
    const Indie4=Filter4.map((v)=>v[1])


    const Elem1=Array.from(new Set(state.blockDropFit))
    const [matchSymbol,setMatchSymbol]=useState("")

return(
    <div className=" h-screen w-screen flex flex-wrap">

<div className="basis-[15%]">
<button onClick={()=>{setMatchSymbol("s");dispatch({ type:"ARRANGEMOBILEMATCH5",  payload:"s" })} } className={`${matchSymbol==="s"?"":"border-cyan-200"} w-full inline-flex flex-col border-4   shadow-xl`}>
    <div className={`${matchSymbol==="s"?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>S-Block</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol==="s"?"bg-cyan-300":""}`}>{Sblock.map((x,i)=>{
     
        return(
            <div key={`Sblock${i}`} className={`${matchSymbol==="s"?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x[1])?"":"hidden"}`}>{x[1]}</span>
            </div>
        )
    })}</div>
   </button>
</div>
<div className="basis-[60%] flex flex-col">
    <div className="w-full h-[50%]">
    <button onClick={()=>{setMatchSymbol("p");dispatch({ type:"ARRANGEMOBILEMATCH5",  payload:"p" })} } className={`${matchSymbol==="p"?"":"border-cyan-200"} w-full inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${matchSymbol==="p"?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>P-Block</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol==="p"?"bg-cyan-300":""}`}>{Pblock.map((x,i)=>{
    
        return(
            <div key={`Pblock${i}`} className={`${matchSymbol==="p"?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x[1])?"":"hidden"}`}>{x[1]}</span>
            </div>
        )
    })}</div>
   </button>

    </div>
    <div className="w-full h-[65%]">
    <button onClick={()=>{setMatchSymbol("d");dispatch({ type:"ARRANGEMOBILEMATCH5",  payload:"d" })} } className={`${matchSymbol==="d"?"":"border-cyan-200"} w-full inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${matchSymbol==="d"?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>D-Block</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol==="d"?"bg-cyan-300":""}`}>{Dblock.map((x,i)=>{
      
        return(
            <div key={`Dblock${i}`} className={`${matchSymbol==="d"?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x[1])?"":"hidden"}`}>{x[1]}</span>
            </div>
        )
    })}</div>
   </button>
    </div>
</div>
<div className="basis-[21%]">
<button onClick={()=>{setMatchSymbol("f");dispatch({ type:"ARRANGEMOBILEMATCH5",  payload:"f" })} } className={`${matchSymbol==="f"?"":"border-cyan-200"} w-full inline-flex flex-col border-4   shadow-xl`}>
    <div className={`${matchSymbol==="f"?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>F-Block</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol==="f"?"bg-cyan-300":""}`}>{Fblock.map((x,i)=>{
  
        return(
            <div key={`Fblock${i}`} className={`${matchSymbol==="f"?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x[1])?"":"hidden"}`}>{x[1]}</span>
            </div>
        )
    })}</div>
   </button>
</div>
 
    </div>
)
}
