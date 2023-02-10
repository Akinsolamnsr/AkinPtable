import { NextPage } from "next"
import { useState } from "react"
import { Group,Bckup,Lant, Func } from "./constant"
import { useAppContext } from "../UseContext"




const GridFile:NextPage = () => {
  const Series=()=>{
   
    const stat=(state.PropElement?.General?.groupPeriod)?.split(",")[0]==="6"?"A":"B"
    return stat
   }
  
  const context=useAppContext()
  const {state}=context
  const {array,lant2}=Func()
  const Grp=(state.PropElement?.General?.groupPeriod)?.split(",")[1]
  const Prd=(state.PropElement?.General?.groupPeriod)?.split(",")[0]
  const Lat=isNaN(state.PropElement?.ids)
  const Act=Lat?Series():false
    
 
    return (
        <>
           <div className='inline-flex flex-col items-end'>
         <div className='inline-flex ml-[0.4rem]'> {Group.map((x,i)=>{
        
          return(
            <span key={`SmallGridOne${i}`} className={`${Grp==x?"visible":"invisible"} ml-[0.35rem] text-[0.5rem] font-bold w-[0.5rem] h-[0.5rem]`}>{x}</span>
          )
         })}</div>

         <div className='inline-flex '>
          <div className='flex flex-col'>
          {[1,2,3,4,5,6,7].map((x,i)=>{
          return(
            <span key={`SmallGridTwo${i}`} className={`ml-[0.1rem] text-sm ${Prd==x?"visible":"invisible"}`}>{x}</span>
          )
         })}
          </div>
          <div className="inline-flex flex-wrap">
            {array.map((x:any,i:any,arr:any)=>{
              
                if(!x[0]){
                  return(
                    <div key={`SmallGridTree${i}`} className={`w-[0.5rem] h-[0.5rem] ml-[0.35rem] border mt-1 rounded invisible`}>
                    </div>
                )
                }
                else{
                  const color=(x[2].General.pictures).split(",")[0]
                  const stat= state.PropElement.id===x[2].id
                   const Lat=Act==="A"
                   if(Lat){
                    
                   }
                  return(
                    <div key={`SmallGridFour${i}`} className={`${stat?"bg-cyan-700":""}  w-[0.5rem] h-[0.5rem] ml-[0.35rem] border mt-1 rounded ${color==="s"?"border-red-700":`${color==="p"?"border-green-700":`border-blue-700`}`}`}>
                    </div>
                )
                }
            })}
          </div>
          <div>
          </div>
         </div>

         <div className="inline-flex flex-wrap w-[12.8rem]">{lant2.map((x:any,i)=>{
           const stat=x.id===state.PropElement.id
          return(
            <span key={`SmallGridFive${i}`} className={`${stat?"bg-cyan-700":""} ml-[0.35rem] text-[0.5rem] font-bold w-[0.5rem] h-[0.5rem] border rounded mt-2 border-purple-700`}></span>
          )
         })}</div>

           <div className="w-48 inline-flex justify-between mt-2  w-full mr-8">
            {["s","p","d","f"].map((x,i)=>{
              return(
                <div key={`SmallGridSix${i}`} className="inline-flex mr-8">
                 <div className={` w-[0.5rem] h-[0.5rem] mr-1 rounded border mt-2 ${x==="s"?"border border-red-700":`${x==="p"?"border border-green-700":`${x==="d"?"border border-blue-700":"border border-purple-700"}`}`}`}></div>
                 <span>{x}</span>
                </div>
              )
            })}
           </div>
         </div>
        </>
    )

}

export default GridFile