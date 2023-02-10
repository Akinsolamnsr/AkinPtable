
import { useReducer, useState,useRef} from 'react';
import useSWR from 'swr'
import Loading from '../Loading';
import { useAppContext } from '../UseContext';


  
const Oprop = () => {
 const TEMP=["celsius","Fareiheit","kelvin"]
  const [swtch,setSwtch]=useState(false)
  const [ion,setIon]=useState(false)
  const [fin,setFin]=useState(false)
  const Ids=useRef()
  const context=useAppContext()
  const {state}=context
  const init={
    melt:0,
  boil:0
}
const ChangeTmp={
  kel:false,
  deg:false,
  fah:false
} 
const reduce=(state,action)=>{
  let newState
  switch(action.type){
    case"KEL":
    state.kel=true
    state.deg=false
    state.fah=false
    newState={...state}
    break;
    case"CEL":
    state.kel=false
    state.deg=true
    state.fah=false
    newState={...state}
    break;
    case"FAH":
    state.kel=false
    state.deg=false
    state.fah=true
    newState={...state}
    break;
    default:
    throw new Error()
  }
  return newState
}
const[chgTemp,dispatched2]=useReducer(reduce,ChangeTmp)

const reducer=(state,action)=>{
  let newState
    switch(action.type){
      case "FAREINHEIT":
      const CEl=(action.melt * (9/5) )+32
      const CEl2=(action.boil * (9/5) )+32
      state.melt=(CEl).toFixed(2) +String.fromCharCode(176) + "F"
      state.boil=(CEl2).toFixed(2) +String.fromCharCode(176) + "F"
       newState={...state}
       break;
       case "KELVIN":
      state.melt=action.melt+"K"
      state.boil=action.boil+"K"
       newState={...state}
       break;
       case "CELSIUS":
      const FAR=action.melt-273.15
      const FAR2=action.boil-273.15
       const CEL=FAR
      const CEL2=FAR2 
      state.melt=(CEL).toFixed(2)+ String.fromCharCode(176) + "C"
      state.boil=(CEL2).toFixed(2) +String.fromCharCode(176) + "C"
       newState={...state}
       break;
       default:
       throw new Error()
    }
    return newState
 }
  const[temp,dispatched]=useReducer(reducer,init)


  if(state.PropElement){
    const {General,Physical,Reactive}= state.PropElement
    const {config2,config1,family}=General
           const {phase,melting,boiling}=Physical
           const {allotropes}=Physical
           const {Ionization,afinity,negativity,radius,vandalForces,covalentRadius,oxidation}=Reactive
           const Fig1=config2.split(',')[0] +"...Shrink"
           const Fig2=config2.split(',')[1]  +"...Expand"
           const color=family.split(',')[0]
           const Melt=parseFloat(melting)
           const Boil=parseFloat(boiling)
           const IONS1=Ionization.split(",")[0] +"ev"
           const IONS2=Ionization?.split(",")[1] +" kJ/mol"
           const FIN1=afinity.split(",")[0] +"ev"
           const FIN2=afinity?.split(",")[1] +" kJ/mol"
          
    return(
      <div className='inline-flex flex-col w-full p-1'>
       <button onClick={()=>setSwtch(swtch?false:true)} className={`font-bold
        ${color==="Alkaline metal"?`border border-[0.1rem] bg-white border-[#ffcccc] text-[#b30000] rounded`:`
        ${color==="Alkaline earth metal"?`border border-[0.1rem] bg-white border-[#00334d] text-[#00334d] rounded`:`
        ${color==="Metalloid"?`border border-[0.1rem] bg-white border-[#330033] text-[#003333] rounded`:`
        ${color==="Other non metals"?`border border-[0.1rem] bg-white border-[#330033] text-[#330033] rounded`:
        `${color==="Halogen"?`border border-[0.1rem] bg-white border-[#000033] text-[#000033] rounded`:
        `${color==="Noble gas"?`border border-[0.1rem] bg-white border-[#331a00] text-[#331a00] rounded`:`
        ${color==="Transition metal"?`border border-[0.1rem] bg-white border-[#003300] text-[#003300] rounded`:
        `${color==="Post-transition metal"?`border border-[0.1rem] bg-white border-[#1a0033] text-[#1a0033] rounded`:
        `${color==="Actinide"?"border border-[0.1rem] bg-white border-[#2e2e1f] text-[#2e2e1f] rounded":`
        ${color==="Lanthanide"?"border border-[0.1rem] bg-white border-[#330014] text-[#330014] rounded":""}`}`}`}`}`}`}`}`}`}
       `}><div>{swtch && Fig2}{!swtch && Fig1}</div>
       <div><div><hr className='mt-2' /><span className='mr-4 text-xs'>Energy Level</span><span>{config1}</span></div></div>
       </button>
       
     <div className='overflow-y-auto'>
     <div className={` w-full inline-flex flex-col  h-[25rem]
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
     <div className='flex justify-between w-full'>
      <div className='font-bold ml-2'><div>Boiling</div><div>
        {chgTemp.kel && Boil+"K"}
        {chgTemp.deg && (Boil-273.15).toFixed(2)+ String.fromCharCode(176) + "C"}
        {chgTemp.fah &&((Boil * (9/5) )+32).toFixed(2) +String.fromCharCode(176) + "F"}
        </div></div>

      <div className={`flex flex-col`}>
        <button onClick={(e)=>{dispatched({type:"CELSIUS",melt:Melt,boil:Boil});dispatched2({type:"CEL"})}} ref={Ids} className={`${chgTemp.deg?"scale-x-[120%]":""} border border-2 bg-white  rounded text-xs pl-2 pr-2`}>celsius</button>
        <button  onClick={()=>{dispatched({type:"FAREINHEIT",melt:Melt,boil:Boil});dispatched2({type:"FAH"})}} ref={Ids} className={`${chgTemp.fah?"scale-x-[120%]":""} border border-2  bg-white rounded text-xs pl-2 pr-2`}>Fareiheit</button>
        <button onClick={()=>{dispatched({type:"KELVIN",melt:Melt,boil:Boil});dispatched2({type:"KEL"})}} ref={Ids} className={`${chgTemp.kel?"scale-x-[120%]":""} border border-2  bg-white rounded text-xs pl-2 pr-2`}>Kelvin</button>
      </div>
      <div className='font-bold mr-2'><div>melting</div><div>
        {chgTemp.kel && Melt+"K"}
        {chgTemp.deg && (Melt-273.15).toFixed(2)+ String.fromCharCode(176) + "C"}
        {chgTemp.fah &&((Melt * (9/5) )+32).toFixed(2) +String.fromCharCode(176) + "F"}
        </div></div>
       </div>
       <hr className={`mt-2 border-[0.1rem] 
        ${color==="Alkaline metal"?` border-[#b30000]`:`
        ${color==="Alkaline earth metal"?`border-[#00334d]`:`
        ${color==="Metalloid"?`border-[#330033]`:`
        ${color==="Other non metals"?`border-[#330033]`:
        `${color==="Halogen"?`border-[#000033]`:
        `${color==="Noble gas"?`border-[#331a00]`:`
        ${color==="Transition metal"?`border-[#003300]`:
        `${color==="Post-transition metal"?`border-[#1a0033]`:
        `${color==="Actinide"?"border-[#2e2e1f]":`
        ${color==="Lanthanide"?"border-[#330014]":""}`}`}`}`}`}`}`}`}`}
       `} />
       <div className='inline-flex flex-col text-sm'>
          <div className='flex justify-between'><span>Ionization Energy</span><button className='bg-white pl-1 pr-1 rounded mr-2' onClick={()=>{setIon(ion?false:true)}}><span className='relative font-bold text-[0.55rem] mt-[5rem]'>Toggle</span>{ion && IONS1}{!ion && IONS2}</button></div>
          <div className='flex justify-between'><span>Electonegativity</span><div className='mr-2'>{negativity}</div></div>
          <div className='flex justify-between'><span>Electron Afinity</span><button className='bg-white pl-1 pr-1 rounded mr-2' onClick={()=>{setFin(fin?false:true)}}><span className='relative font-bold text-[0.55rem] mt-[5rem]'>Toggle</span>{fin && FIN1}{!fin && FIN2}</button></div>
      </div>
      <hr className={`mt-2 border-[0.1rem] 
        ${color==="Alkaline metal"?` border-[#b30000]`:`
        ${color==="Alkaline earth metal"?`border-[#00334d]`:`
        ${color==="Metalloid"?`border-[#330033]`:`
        ${color==="Other non metals"?`border-[#330033]`:
        `${color==="Halogen"?`border-[#000033]`:
        `${color==="Noble gas"?`border-[#331a00]`:`
        ${color==="Transition metal"?`border-[#003300]`:
        `${color==="Post-transition metal"?`border-[#1a0033]`:
        `${color==="Actinide"?"border-[#2e2e1f]":`
        ${color==="Lanthanide"?"border-[#330014]":""}`}`}`}`}`}`}`}`}`}
       `} />
      <div className='inline-flex flex-col text-sm'>
      <div className='flex justify-between'><span>Covalent Radius</span><div className='mr-2'>{covalentRadius}</div></div>
      <div className='flex justify-between'><span>Vandal Wall</span><div className='mr-2'>{vandalForces}</div></div>
      <div className='flex justify-between'><span>Emprical Radius</span><div className='mr-2'>{radius}</div></div>
      </div>
      <hr className={`mt-2 border-[0.1rem] 
        ${color==="Alkaline metal"?` border-[#b30000]`:`
        ${color==="Alkaline earth metal"?`border-[#00334d]`:`
        ${color==="Metalloid"?`border-[#330033]`:`
        ${color==="Other non metals"?`border-[#330033]`:
        `${color==="Halogen"?`border-[#000033]`:
        `${color==="Noble gas"?`border-[#331a00]`:`
        ${color==="Transition metal"?`border-[#003300]`:
        `${color==="Post-transition metal"?`border-[#1a0033]`:
        `${color==="Actinide"?"border-[#2e2e1f]":`
        ${color==="Lanthanide"?"border-[#330014]":""}`}`}`}`}`}`}`}`}`}
       `} />
      <div className='inline-flex justify-between w-full'>
        <div className='mr-8'>Allotopes</div>
        <div>{allotropes}</div>
    </div>
     </div>
     </div>

      </div>
    )
  }
else{
  <div></div>
}
  
}

export default Oprop