import { useEffect, useMemo, useState } from "react"
import Image from 'next/image'
import Imgs from "../../../../../public/images/6TpoBbxac.png"
import { Confg } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"

export default function Level4({count}){
    const context=useAppContext()
    const {dispatch}=context
    const data=Confg[count]
    const [val,setVal]=useState("")
    const [val2,setVal2]=useState("")
    const [val3,setVal3]=useState("")
    useEffect(()=>{
      setVal("")
      setVal2("")
      setVal3("")
    },[count])
    const List=data[3].split(",")
   

  useMemo(()=>{
    if(val==List[0] && val2==List[1] && val3==List[2] ){
      dispatch({  type:"FIG",payload:[count]})
  }
  },[count])
    return(
        <div className="flex">
        <div className="w-8">  
      <div className="w-8">
      <input value={val}  onChange={(e)=>setVal(e.target.value)} className="w-8 ml-1" />
      </div>
      <span className="w-8">
      {val==List[0]?(<Image src={Imgs} alt="react Logo" width="20" height="20"  />):""}
      </span>
      </div>

      <div className="w-8">  
      <div className="w-8">
      <input value={val2}  onChange={(e)=>setVal2(e.target.value)} className="w-8 ml-1" />
      </div>
      <span className="w-8">
      {val2==List[1]?(<Image src={Imgs} alt="react Logo" width="20" height="20"  />):""}
      </span>
      </div>

      <div className="w-8">  
      <div className="w-8">
      <input value={val3}  onChange={(e)=>setVal3(e.target.value)} className="w-8 ml-1" />
      </div>
      <span className="w-8">
      {val3==List[2]?(<Image src={Imgs} alt="react Logo" width="20" height="20"  />):""}
      </span>
      </div>
        </div>
    )
}