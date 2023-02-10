import { useCallback, useEffect, useMemo, useState } from "react"
import Image from 'next/image'
import Imgs from "../../../../../public/images/6TpoBbxac.png"
import { Confg } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"

export default function Level1({count}){
    const context=useAppContext()
    const {dispatch}=context
    const data=Confg[count]
    const [val,setVal]=useState("")
    
    useEffect(()=>{
      setVal("")
    },[count])
    const List=data[3].split(",")

  const cb=(value)=>{
      if(value==List[0]){
        dispatch({  type:"FIG",payload:[value]})
    }
      console.log(value)
    }

        return(
            <div className="w-8">  
          <div className="w-8">
          <input value={val}  onChange={(e)=>{setVal(e.target.value);cb(e.target.value)}}  className="w-8 ml-1" />
          </div>
          <span className="w-8">
          {val==List[0]?(<Image src={Imgs} alt="react Logo" width="20" height="20"  />):""}
          </span>
          </div>
        )
    
}