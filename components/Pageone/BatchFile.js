import { Abox,Arr} from "./constant"
import { useAppContext } from "../UseContext"


const Batch = (prop) => {
  const context=useAppContext()
  const {dispatch,state}=context
  const ElemProp=(e,data)=>{
    e.preventDefault()
   dispatch({
      type:"PROP",
      payload:data
   })
  
  }
const {data}=prop
const Mass=Math.round(parseFloat(data?.General.mass))
let Melt=parseFloat(data?.Physical.melting)
let Boil=parseFloat(data?.Physical.boiling)
let color=data?.General.family
const phase= state.temp < Melt?"solid":`${state.temp < Boil?"liquid":"gas"}`
    return(
      
      <button onClick={(e)=>ElemProp(e,data)} className={`
         ${color==="Alkaline metal"?`${phase==="solid"?"bg-[#e60000] text-[#1a0000]":`${phase==="liquid"?"bg-[#ffcccc] text-[#b30000] border-solid border-4 rounded border-[#330000]":`bg-[#ffcccc] text-[#b30000]`}`}`:`
         ${color==="Alkaline earth metal"?`${phase==="solid"?"bg-[#1ab2ff] text-[#002233]":`${phase==="liquid"?"bg-[#cceeff] text-[#00334d] border-[#00334d]  border-solid border-4 rounded ":`bg-[#cceeff] text-[#00334d]`}`}`:`
         ${color==="Metalloid"?`${phase==="solid"?"bg-[#4dffff] text-[#003333]":`${phase==="liquid"?"bg-[#ccffff] text-[#003333] border-[#003333]  border-solid border-4 rounded ":`bg-[#ccffff] text-[#003333]`}`}`:`
         ${color==="Other non metals"?`${phase==="solid"?"bg-[#ff00ff] text-[#330033]":`${phase==="liquid"?"bg-[#ffb3ff] text-[#330033] border-[#330033]  border-solid border-4 rounded ":`bg-[#ffb3ff] text-[#330033]`}`}`:
         `${color==="Halogen"?`${phase==="solid"?"bg-[#4d4dff] text-[#000033]":`${phase==="liquid"?"bg-[#b3b3ff] text-[#000033] border-[#000033]  border-solid border-4 rounded ":`bg-[#b3b3ff] text-[#000033]`}`}`:
         `${color==="Noble gas"?`${phase==="solid"?"bg-[#ff9c33] text-[#331a00]":`${phase==="liquid"?"bg-[#ffd9b3] text-[#331a00] border-[#331a00]  border-solid border-4 rounded ":`bg-[#ffd9b3] text-[#331a00]`}`}`:`
         ${color==="Transition metal"?`${phase==="solid"?"bg-[#4dff4d] text-[#003300]":`${phase==="liquid"?"bg-[#b3ffb3] text-[#003300] border-[#003300]  border-solid border-4 rounded ":`bg-[#b3ffb3] text-[#003300]`}`}`:
         `${color==="Post-transition metal"?`${phase==="solid"?"bg-[#a94dff] text-[#1a0033]":`${phase==="liquid"?"bg-[#e6ccff] text-[#1a0033] border-[#1a0033]  border-solid border-4 rounded ":`bg-[#e6ccff] text-[#1a0033]`}`}`:
         `${color===""?"":``}`}`}`}`}`}`}`}`}
      inline-flex flex-col w-[97%] h-full  hover:opacity-50 justify-between `}>
            <div className={`${state.status?"text-[1rem] flex font-bold justify-between w-full":"text-[0.6rem] flex font-bold justify-between w-full"}`}><span>{data?.General.number}</span><span>{Mass}</span></div>
       <div className={`${state.status?"text-[2rem] font-bold":"text-lg font-bold"} `}>{data?.General.symbol}</div>
       <div className={`${state.status?"text-[1rem] font-bold":"text-[0.6rem] font-bold"}`}>{data?.General.name}</div>
      </button>
    )
  }
  
  export default Batch