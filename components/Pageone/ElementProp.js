import Loading from "../Loading"
import { useAppContext } from "../UseContext"




export default function ElemFile(){
    const context=useAppContext()
    const {state}=context
    
   if(state.PropElement){
    const {General,Physical}= state.PropElement
    const {mass,name,number,symbol,density,neutron,family}=General
           const {phase}=Physical
           const color=family.split(',')[0]
    
    return(
        <div className={`flex flex-col w-full p-1 
        ${color==="Alkaline metal"?`bg-[#ffcccc] text-[#b30000]`:`
        ${color==="Alkaline earth metal"?`bg-[#cceeff] text-[#00334d]`:`
        ${color==="Metalloid"?`bg-[#ccffff] text-[#003333]`:`
        ${color==="Other non metals"?`bg-[#ffb3ff] text-[#330033]`:
        `${color==="Halogen"?`bg-[#b3b3ff] text-[#000033]`:
        `${color==="Noble gas"?`bg-[#ffd9b3] text-[#331a00]`:`
        ${color==="Transition metal"?`bg-[#b3ffb3] text-[#003300]`:
        `${color==="Post-transition metal"?`bg-[#e6ccff] text-[#1a0033]`:
        `${color==="Actinide"?"bg-[#e0e0d1] text-[#2e2e1f]":`
        ${color==="Lanthanide"?"bg-[#ffcce0] text-[#330014]":""}`}`}`}`}`}`}`}`}`}
        `}>
        <div className={` flex justify-between font-bold  text-sm
        ${color==="Alkaline metal"?`bg-[#e60000] text-[#1a0000]`:`
        ${color==="Alkaline earth metal"?`bg-[#1ab2ff] text-[#003333]`:`
        ${color==="Metalloid"?`bg-[#4dffff] text-[#330033]`:`
        ${color==="Other non metals"?`bg-[#ff00ff] text-[#330033]`:
        `${color==="Halogen"?`bg-[#4d4dff] text-[#000033]`:
        `${color==="Noble gas"?`bg-[#ff9c33] text-[#331a00]`:`
        ${color==="Transition metal"?`bg-[#4dff4d] text-[#003300]`:
        `${color==="Post-transition metal"?`bg-[#a94dff] text-[#1a0033]`:
        `${color==="Actinide"?"bg-[#a2a276] text-[#2e2e1f]":`
          ${color==="Lanthanide"?"bg-[#ff4d94] text-[#330014]":""}`}`}`}`}`}`}`}`}`}
        `}>
            <span><div  className="text-[0.7rem]">Atomic no</div><div className="text-center">{number}</div></span>
            <span ><div className="text-[0.7rem]">Atomic mass</div><div className="text-center">{mass}</div></span>
            </div>
        <div className="  text-[6rem] text-center">{symbol}</div>
        <div className=" text-center font-bold">{name}</div>
        <div className=" text-center text-xs">{phase.toUpperCase()}</div>
        <div className={` flex justify-between font-bold  text-sm
        ${color==="Alkaline metal"?`bg-[#e60000] text-[#003333]`:`
        ${color==="Alkaline earth metal"?`bg-[#1ab2ff] text-[#00334d]`:`
        ${color==="Metalloid"?`bg-[#4dffff] text-[#330033]`:`
        ${color==="Other non metals"?`bg-[#ff00ff] text-[#330033]`:
        `${color==="Halogen"?`bg-[#4d4dff] text-[#000033]`:
        `${color==="Noble gas"?`bg-[#ff9c33] text-[#331a00]`:`
        ${color==="Transition metal"?`bg-[#4dff4d] text-[#003300]`:
        `${color==="Post-transition metal"?`bg-[#a94dff] text-[#1a0033]`:
        `${color==="Actinide"?"bg-[#a2a276] text-[#2e2e1f]":`
        ${color==="Lanthanide"?"bg-[#ff4d94] text-[#330014]":""}`}`}`}`}`}`}`}`}`}
        `}>
            <span><div  className="text-[0.6rem]">Neutron no</div><div className="text-center text-[0.7rem] -mt-1">{neutron}</div></span>
            <span ><div className="text-[0.6rem]">Density</div><div className="text-center text-[0.7rem] -mt-1">{density}</div></span>
            </div>
       <div className="text-center font-bold">{color}</div>
        </div>
    )
   }
   else{
      return(
        <div >
       
        </div>
      )
   }
    
}