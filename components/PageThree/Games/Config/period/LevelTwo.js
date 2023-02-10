import { useEffect, useMemo, useState } from "react"
import Image from 'next/image'
import Imgs from "../../../../../public/images/6TpoBbxac.png"
import { Confg } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"

export default function Level4({count}){
  const nms=[1,2,3]
  const [Arr,setArr]=useState([])
    const context=useAppContext()
    const {dispatch,state}=context
    const data=Confg[count]
    const [val,setVal]=useState("")
    const [val2,setVal2]=useState("")
    useEffect(()=>{
      setVal("")
      setVal2("")
    },[count])
    const List=data[3].split(",")
    


  const cb=(value)=>{
   const  test1=value===List[0]
   if(test1){
    dispatch({  type:"FIG2",payload:[count]})
  }
  }

  const cb2=(value)=>{
   const  test2=value===List[1] 
   if(test2){
    dispatch({  type:"FIG2",payload:[count]})
   }
     
   }

   console.log(state.fig)
    return(
        <form>
          <div className="flex">
        <div className="w-8">  
      <div className="w-8">
      <input value={val}  onChange={(e)=>{setVal(e.target.value);cb(e.target.value)}} className="w-8 ml-1" />
      </div>
      <span className="w-8">
      {val==List[0]?(<Image src={Imgs} alt="react Logo" width="20" height="20"  />):""}
      </span>
      </div>

      <div className="w-8">  
      <div className="w-8">
      <input value={val2}  onChange={(e)=>{setVal2(e.target.value);cb2(e.target.value)}} className="w-8 ml-1" />
      </div>
      <span className="w-8">
      {val2==List[1]?(<Image src={Imgs} alt="react Logo" width="20" height="20"  />):""}
      </span>
      </div>
        </div>
        
        </form>
    )
}