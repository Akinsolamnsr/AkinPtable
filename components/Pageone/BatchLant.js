import { Abox,Arr} from "./constant"
import { useAppContext } from "../UseContext"


const BatchLant = (prop) => {
  const context=useAppContext()
  const {dispatch,state}=context
  const ElemProp=(e,data)=>{
    e.preventDefault()
   dispatch({
      type:"PROP",
      payload:data
   })
  
  }
        const Mass=Math.round(parseFloat(prop?.General.mass))
let color=prop?.General.family

const phase= state.temp < prop?.Physical.melting?"solid":`${prop.temp < prop?.Physical.boiling?"liquid":"gas"}`
    return(
      <button  onClick={(e)=>ElemProp(e,prop)} className={`inline-flex flex-col w-full h-full bg-[#EF4444] hover:opacity-50 justify-between
      ${color==="Lanthanide"?`${phase==="solid"?"bg-[#ff4d94] text-[#330014]":`${phase==="liquid"?"bg-[#ffcce0] text-[#330014] border-solid border-4 rounded border-[#330014]":`bg-[#ffcce0] text-[#330014]`}`}`:`${phase==="solid"?"bg-[#a2a276] text-[#330014]":`${phase==="liquid"?"bg-[#e0e0d1] text-[#2e2e1f] border-solid border-4 rounded border-[#2e2e1f]":`bg-[#e0e0d1] text-[#2e2e1f]`}`}`}`}>
      <div className="text-[0.6rem] flex font-bold justify-between w-full "><span>{prop?.General.number}</span><span>{Mass}</span></div>
       <div className="text-lg font-bold">{prop?.General.symbol}</div>
       <div className="text-[0.6rem] font-bold">{prop?.General.name}</div>
      </button>
    )
  }
  
  export default BatchLant