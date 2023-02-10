import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import {Arr,Bckup,List,Section,Func} from "../Pageone/constant"
import { useAppContext } from '../UseContext';
import BatchTwo from "./BatchTwo"
import BatchTwoLant from "./BatchTwoLant"
import Ptb from "../../public/images/ptb.svg"
import useWindowSize from "../PageTwo/Resize"

 interface windowSize{
    width?: number
    height?: number
  }

const GridTwo:NextPage = () => {
 
  const Windo:windowSize=useWindowSize()
   const sts=  Windo.width
   const num =sts?sts:0

  const [Slide,setSlide]=useState(false)
    const context=useAppContext()
    const {state,dispatch}=context
  const status=state.status
  function slide(e:any){
   Slide?setSlide(false):setSlide(true)
   const Stat=Slide?false:true
     dispatch({
      type:"SLIDE",
      payload:Stat
     })
  }


const {array,lant2}=Func()

  return(
    <div className={`${num<700?"ml-12":""} ${Slide && !status?"":`${state.margin?"":`${status?"":"-ml-[6rem]"}`}`} inline-flex flex-col mt-8 font-bold `}>
      
        <div className={` flex ml-4 ${Slide && !status?"w-[180%] ":"w-full"} mb-2`}>
            <div className='flex flex-wrap'>
            {[1,2].map((x:any,i)=>{
            return(
          <div key={`P2GridOne${i}`} className={`${status?"w-[6rem] h-[3rem] ml-1 mt-1":"w-[3.5rem] h-[2rem] ml-1 mt-1"} text-center `} >{x}</div>
            )
        })}
            </div>
            <div className={`flex flex-wrap  ${status?"hidden":""} ${Slide && !status ?"ml-[52.4rem]":""}`}>  
             {[3,4,5,6,7,8,9,10,11,12].map((x:any,i)=>{
            return(
          <div key={`P2GridTwo${i}`} className={`w-[3.5rem] h-[2rem] ml-1 mt-1 text-center  `} >{x}</div>
            )
        })}</div>
            <div className='flex flex-wrap'>
            {[[13,3],[14,4],[15,5],[16,6],[17,7],[18,8]].map((x:any,i)=>{
            return(
          <div key={`P2GridThree${i}`} className={`${status?"w-[6rem] h-[3rem] ml-1 mt-1":"w-[3.5rem] h-[2rem] ml-1 mt-1 mb-2"} ${Slide && !status?"ml-[0.25rem]":""} text-center `} >{status?x[1]:x[0]}</div>
            )
        })}
            </div>
        </div>


        <div className={` ${status?"-my-[1rem]":"-my-[2rem]"} w-12 h-12 relative  mx-[15rem]`}><div className={` relative  ${status?"my-[2rem] -mx-[4rem] w-[40rem] h-[7rem] ":"my-[3rem] -mx-[3rem] w-[40rem] h-[8rem]"}`}></div></div>
        <div className='"inline-flex'>
        <div className='inline-flex '>
            <div className='w-4 h-full inline-flex flex-col font-bold'>
                <div>
                {[1,2,3,4].map((x:any,i)=>{
            return(
          <div key={`P2GridFour${i}`} className={` text-center  ${status?"w-4 h-[7rem] mt-1 ":"w-4 h-[4rem] mt-1 "} flex flex-col`} ><span className='mt-[1.5rem]'>{x}</span></div>
            )
        })}
                </div>
                <div>
                {[5,6,7].map((x:any,i)=>{
            return(
          <div key={`P2GridFive${i}`} className={`w-4 h-[4rem] mt-1 text-center ${status?"hidden":""} flex flex-col`} ><span className='mt-[1.5rem]'>{x}</span></div>
            )
        })}
                </div>
            </div>
            
        <div className={` flex ${status?"w-[50rem]":"w-[68rem]"} flex-col items-end`}>
          
        <div className={` flex flex-wrap ${status?"h-[29rem]":""}`}>
        {array.map((x:any,i:any,arr:any)=>{
          
            if(Arr.includes(x[1])){
                const Stat=List.includes(x[1])
                
                return(
                    <div key={`P2GridSix${i}`} className={` ${status?"w-[6rem] h-[7rem] ml-1 mt-1":"w-[3.5rem] h-[4rem] ml-1 mt-1"} border border-indigo-400 text-center   ${Stat && status?"hidden ":"invisible"}`} ></div>
                      )
            }
            else{
                const Stat=Bckup.includes(x[1])
                const trans=!Section.includes(x[1])
                
                 
                return(
                    <div key={`P2GridSeven${i}`} className={`${trans&&Slide && !status?"translate-x-[52.5rem]":""}  ${status?"w-[6rem] h-[7rem] ml-1 mt-1":"w-[3.5rem] h-[4rem] ml-1 mt-1"} text-center  ${Stat && status?"hidden ":""}`} >{<BatchTwo {...x[2]} />}</div>
                      )
            }
          
        })
        }
    </div>
    
    <button onClick={slide} className={`${Slide || status?"hidden":""} w-[3.5rem] h-[16.5rem] bg-purple-300 relative z-2 -my-[7.8rem] mx-[56.8rem] flex flex-col`}><span className='h-[4rem]'>57-71</span><span>89-103</span></button>
    
    <div className={` inline-flex flex-wrap w-[85%] -mr-4 ${status?"hidden":""} ${Slide?"-translate-x-[3.7rem] -translate-y-[8.5rem]":"mb-12"}`}>
    {lant2.map((x:any,i)=>{
      
            return(
          <div key={`P2GridEght${i}`} className='w-[3.5rem] h-[4rem] ml-1 mt-1 text-center' ><BatchTwoLant {...x} /></div>
            )
        })}
    </div>
    <button onClick={slide} className={` ${Slide?"":"hidden"} w-[77%] h-[3.5rem] bg-purple-300 opacity-0.5 relative z-2 -my-[20rem] mx-[8rem] ${status?"hidden":""}`}> ....Shrink</button>
    
    </div>
        </div>
        </div>
    </div>
  )
}

export default GridTwo




