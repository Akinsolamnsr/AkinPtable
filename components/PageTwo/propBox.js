import { useAppContext } from "../UseContext"
import Ptb from "../../public/images/ptb.svg"
import ListPic from "../../public/images/List.svg"
import IcePic from "../../public/images/IceCube.svg"
import Image from 'next/image';
import { useState } from "react";

const PropboxTwo=()=>{
  const [bgd,setBgd]=useState(false)
  const [val,setVal]=useState(false)
    const context=useAppContext()
    const {dispatch}=context
    return(
        <div className={`w-full h-full `}>
            <div className={`flex  h-12 `}>
              
          <button className={`basis-1/2 p-2 flex box-content text-center ${!bgd?"border-2 border-white bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 border":"font-bold"}`} onClick={()=>{dispatch({  type:"SWITCH",  payload:true});setBgd(true)}}>
          <span className="ml-1 w-full text-center">Table</span>
          </button>
            <button className={`basis-1/2  p-2 box-border flex ${bgd?"border-2 border-white bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 border ":"font-bold"}`} onClick={()=>{dispatch({  type:"SWITCH",  payload:false});setBgd(false)}}>
            
            <span className="ml-1 w-full text-center">List</span>
              </button>
          </div>
           <div className="inline-flex w-full h-full overflow-y-auto">
           <div className="inline-flex w-full flex-col h-[30rem]">
           <div className="flex">
          <button className={`basis-1/2  h-12 shadow-lg   ${val==="1"?"border-2 rounded font-bold":"text-gray-500"}`} value="1" onClick={()=>{[dispatch({  type:"ELEMENTPROP",  payload:"Melting"})];setVal("1")}} >
            melting point
          </button>
          <button className={`basis-1/2 shadow-lg text-gray-500 ${val==="2"?"border-2 rounded font-bold text-black":"text-gray-500"} `} value="2" onClick={()=>{dispatch({  type:"ELEMENTPROP",  payload:"Boiling"});setVal("2")}}>
            boiling point
          </button>
          </div>
          <hr className=" border-gray-400 border-2 m-1" />
          <div><button onClick={()=>{dispatch({  type:"ELEMENTPROP",  payload:"Ionization"});setVal("3")}} value="3" className={`p-2 text-center shadow-lg w-full mt-2 text-gray-500 ${val==="3"?"border-2 rounded font-bold text-black":"text-gray-500"}`}>Ionization Energy</button></div>
          <div><button onClick={()=>{dispatch({  type:"ELEMENTPROP",  payload:"Negativity"});setVal("4")}} value="4"  className={`p-2 text-center shadow-lg w-full mt-2 text-gray-500 ${val==="4"?"border-2 rounded font-bold text-black":"text-gray-500"}`} >Electronegativity</button></div>
          <div><button onClick={()=>{dispatch({  type:"ELEMENTPROP",  payload:"Afinity"});setVal("5")}} value="5" className={`p-2 text-center shadow-lg w-full mt-2 text-gray-500 ${val==="5"?"border-2 rounded font-bold text-black":"text-gray-500"}`}>Electron Afinity</button></div>
          <hr className="border-gray-400 border-2 m-1" />
          <div><button onClick={()=>{dispatch({  type:"ELEMENTPROP",  payload:"Covalent"});setVal("6")}} value="6" className={`p-2 text-center shadow-lg w-full mt-2 text-gray-500 ${val==="6"?"border-2 rounded font-bold text-black":"text-gray-500"}`}>Covalent radius</button></div>
          <div><button onClick={()=>{dispatch({  type:"ELEMENTPROP",  payload:"Wall"});setVal("7")}} value="7" className={`p-2 text-center shadow-lg w-full mt-2 text-gray-500 ${val==="7"?"border-2 rounded font-bold text-black":"text-gray-500"}`}>Vandal wall</button></div>
          <div><button onClick={()=>{dispatch({  type:"ELEMENTPROP",  payload:"Emprical"});setVal("8")}} value="8" className={`p-2 text-center shadow-lg w-full mt-2 text-gray-500 ${val==="8"?"border-2 rounded font-bold text-black":"text-gray-500"}`}>Emprical Radius</button></div>
           </div>
           </div>
        </div>
    )
}



export default PropboxTwo