import { useEffect, useMemo, useState } from "react"
import Image from 'next/image'
import Imgs from "../../../../../public/images/6TpoBbxac.png"
import { Confg } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"

export default function Level7({count}){
    const context=useAppContext()
    const {dispatch}=context
    const data=Confg[count]
    const [val,setVal]=useState("")
    const [val2,setVal2]=useState("")
    const [val3,setVal3]=useState("")
    const [val4,setVal4]=useState("")
    const [val5,setVal5]=useState("")
    const [val6,setVal6]=useState("")
    const [val7,setVal7]=useState("")
    useEffect(()=>{
      setVal("")
      setVal2("")
      setVal3("")
      setVal4("")
      setVal5("")
      setVal6("")
      setVal7("")
    },[count])
    const List=data[3].split(",")
 
  useMemo(()=>{
    if(val==List[0] && val2==List[1] && val3==List[2] && val4==List[3] && val5==List[4] && val6==List[5] && val7==List[6]){
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

      <div className="w-8">  
      <div className="w-8">
      <input value={val4}  onChange={(e)=>setVal4(e.target.value)} className="w-8 ml-1" />
      </div>
      <span className="w-8">
      {val4==List[3]?(<Image src={Imgs} alt="react Logo" width="20" height="20"  />):""}
      </span>
      </div>

      <div className="w-8">  
      <div className="w-8">
      <input value={val5}  onChange={(e)=>setVal5(e.target.value)} className="w-8 ml-1" />
      </div>
      <span className="w-8">
      {val5==List[4]?(<Image src={Imgs} alt="react Logo" width="20" height="20"  />):""}
      </span>
      </div>

      <div className="w-8">  
      <div className="w-8">
      <input value={val6}  onChange={(e)=>setVal6(e.target.value)} className="w-8 ml-1" />
      </div>
      <span className="w-8">
      {val6==List[5]?(<Image src={Imgs} alt="react Logo" width="20" height="20"  />):""}
      </span>
      </div>

      <div className="w-8">  
      <div className="w-8">
      <input value={val7}  onChange={(e)=>setVal7(e.target.value)} className="w-8 ml-1" />
      </div>
      <span className="w-8">
      {val7==List[6]?(<Image src={Imgs} alt="react Logo" width="20" height="20"  />):""}
      </span>
      </div>
      
        </div>
    )
}