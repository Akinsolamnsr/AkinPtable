import { useEffect, useState } from "react"
import { List,DataFamily } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"





export default function FamilyDropMobile(){
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

    const Filter5=DataFamily.filter((x)=>grpfm[9][0]===x[4])
    const Indie5=Filter5.map((v)=>v[1])

    const Filter6=DataFamily.filter((x)=>grpfm[4][0]===x[4])
    const Indie6=Filter6.map((v)=>v[1])

    const Filter7=DataFamily.filter((x)=>grpfm[1][0]===x[4])
    const Indie7=Filter7.map((v)=>v[1])

    const Filter8=DataFamily.filter((x)=>grpfm[0][0]===x[4])
    const Indie8=Filter8.map((v)=>v[1])

    const Filter9=DataFamily.filter((x)=>grpfm[7][0].includes(x[4]))
    const Indie9=Filter9.map((v)=>v[1])

    const Filter10=DataFamily.filter((x)=>grpfm[6][0].includes(x[4]))
    const Indie10=Filter10.map((v)=>v[1])

    const Elem1=Array.from(new Set(state.elementDropFit2))
    const [matchSymbol,setMatchSymbol]=useState("")

return(
    <div className=" h-screen w-[110%] flex flex-wrap">
   <button onClick={()=>{setMatchSymbol(grpfm[2][0]);dispatch({ type:"ARRANGEMOBILEMATCH4",  payload:grpfm[2][0] })} } className={`${matchSymbol===grpfm[2][0]?"":"border-cyan-200"} w-[10rem] inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${matchSymbol===grpfm[2][0]?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>Alkaline Metal</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol===grpfm[2][0]?"bg-cyan-300":""}`}>{Indie1.map((x,i)=>{
    
        return(
            <div key={`AlkalineMetal${i}`} className={`${matchSymbol===grpfm[2][0]?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x)?"":"hidden"}`}>{x}</span>
            </div>
        )
    })}</div>
   </button>


   <button onClick={()=>{setMatchSymbol(grpfm[3][0]);dispatch({ type:"ARRANGEMOBILEMATCH4",  payload:grpfm[3][0] })} } className={`${matchSymbol===grpfm[3][0]?"":"border-cyan-200"} w-[12rem] inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${matchSymbol===grpfm[3][0]?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>Alkaline Earth Metal</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol===grpfm[3][0]?"bg-cyan-300":""}`}>{Indie2.map((x,i)=>{
    
        return(
            <div key={`AlkalinEartheMetal${i}`} className={`${matchSymbol===grpfm[3][0]?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x)?"":"hidden"}`}>{x}</span>
            </div>
        )
    })}</div>
   </button>

   <button onClick={()=>{setMatchSymbol(grpfm[8][0]);dispatch({ type:"ARRANGEMOBILEMATCH4",  payload:grpfm[8][0] })} } className={`${matchSymbol===grpfm[8][0]?"":"border-cyan-200"} w-[12rem] inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${matchSymbol===grpfm[8][0]?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>Actinide</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol===grpfm[8][0]?"bg-cyan-300":""}`}>{Indie3.map((x,i)=>{
    
        return(
            <div key={`Actinides${i}`} className={`${matchSymbol===grpfm[4][0]?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x)?"":"hidden"}`}>{x}</span>
            </div>
        )
    })}</div>
   </button>

   <button onClick={()=>{setMatchSymbol(grpfm[5][0]);dispatch({ type:"ARRANGEMOBILEMATCH4",  payload:grpfm[5][0] })} } className={`${matchSymbol===grpfm[5][0]?"":"border-cyan-200"} w-[9.5rem] inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${matchSymbol===grpfm[5][0]?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>Halogen</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol===grpfm[5][0]?"bg-cyan-300":""}`}>{Indie4.map((x,i)=>{
    
        return(
            <div key={`Halogen${i}`} className={`${matchSymbol===grpfm[5][0]?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x)?"":"hidden"}`}>{x}</span>
            </div>
        )
    })}</div>
   </button>

   <button onClick={()=>{setMatchSymbol(grpfm[9][0]);dispatch({ type:"ARRANGEMOBILEMATCH4",  payload:grpfm[9][0] })} } className={`${matchSymbol===grpfm[9][0]?"":"border-cyan-200"} w-[12rem] inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${matchSymbol===grpfm[9][0]?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>Lanthanide</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol===grpfm[9][0]?"bg-cyan-300":""}`}>{Indie5.map((x,i)=>{
    
        return(
            <div key={`Lanthanide${i}`} className={`${matchSymbol===grpfm[9][0]?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x)?"":"hidden"}`}>{x}</span>
            </div>
        )
    })}</div>
   </button>

   <button onClick={()=>{setMatchSymbol(grpfm[4][0]);dispatch({ type:"ARRANGEMOBILEMATCH4",  payload:grpfm[4][0] })} } className={`${matchSymbol===grpfm[4][0]?"":"border-cyan-200"} w-[10rem] inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${matchSymbol===grpfm[4][0]?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>Metalloid</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol===grpfm[4][0]?"bg-cyan-300":""}`}>{Indie6.map((x,i)=>{
    
        return(
            <div key={`Metalloid${i}`} className={`${matchSymbol===grpfm[4][0]?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x)?"":"hidden"}`}>{x}</span>
            </div>
        )
    })}</div>
   </button>

   <button onClick={()=>{setMatchSymbol(grpfm[1][0]);dispatch({ type:"ARRANGEMOBILEMATCH4",  payload:grpfm[1][0] })} } className={`${matchSymbol===grpfm[1][0]?"":"border-cyan-200"} w-[10rem] inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${matchSymbol===grpfm[1][0]?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>Noble Gas</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol===grpfm[1][0]?"bg-cyan-300":""}`}>{Indie7.map((x,i)=>{
    
        return(
            <div key={`NobleGase${i}`} className={`${matchSymbol===grpfm[1][0]?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x)?"":"hidden"}`}>{x}</span>
            </div>
        )
    })}</div>
   </button>

   <button onClick={()=>{setMatchSymbol(grpfm[0][0]);dispatch({ type:"ARRANGEMOBILEMATCH4",  payload:grpfm[0][0] })} } className={`${matchSymbol===grpfm[1][0]?"":"border-cyan-200"} w-[10rem] inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${matchSymbol===grpfm[0][0]?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>Other non metals</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${matchSymbol===grpfm[0][0]?"bg-cyan-300":""}`}>{Indie8.map((x,i)=>{
    
        return(
            <div key={`OtherNonMetal${i}`} className={`${matchSymbol===grpfm[0][0]?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x)?"":"hidden"}`}>{x}</span>
            </div>
        )
    })}</div>
   </button>


   <button onClick={()=>{setMatchSymbol(grpfm[7][0]);dispatch({ type:"ARRANGEMOBILEMATCH4",  payload:grpfm[7] })} } className={`${grpfm[7].includes(matchSymbol)?"":"border-cyan-200"} w-[28rem] inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${grpfm[7].includes(matchSymbol)?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>Post-transition metal</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${grpfm[7].includes(matchSymbol)?"bg-cyan-300":""}`}>{Indie9.map((x,i)=>{
   
        return(
            <div key={`PostTransMetal${i}`} className={`${grpfm[7].includes(matchSymbol)?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x)?"":"hidden"}`}>{x}</span>
            </div>
        )
    })}</div>
   </button> 

   <button onClick={()=>{setMatchSymbol(grpfm[6][0]);dispatch({ type:"ARRANGEMOBILEMATCH4",  payload:grpfm[6] })} } className={`${grpfm[6].includes(matchSymbol)?"":"border-cyan-200"} w-[28rem] inline-flex flex-col border-4  h-36 shadow-xl`}>
    <div className={`${grpfm[7].includes(matchSymbol)?"bd-white text-cyan-700":"bg-cyan-700 text-white"} w-full font-bold - border-4 border-cyan-100`}>Transition metal</div>
    <div className={`w-full h-full flex flex-wrap text-[1.2rem] ${grpfm[6].includes(matchSymbol)?"bg-cyan-300":""}`}>{Indie10.map((x,i)=>{
   
        return(
            <div key={`TransneMetal${i}`} className={`${grpfm[6].includes(matchSymbol)?"text-white":"text-cyan-700"} w-8 h-8 ml-1 mt-1  font-bold`}>
            <span className={`${Elem1.includes(x)?"":"hidden"}`}>{x}</span>
            </div>
        )
    })}</div>
   </button> 

    </div>
)
}
