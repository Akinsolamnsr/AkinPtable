import React, { useCallback, useEffect, useMemo, useState } from "react"
import Image from 'next/image'
import Imgs from "../../../../../public/images/6TpoBbxac.png"
import { TrueBox, TrueBox2 } from "../../../../Const"
import { useAppContext } from "../../../../UseContext"
export default function Mid({data,count,List}){
  const context=useAppContext()
    const {dispatch,state}=context
    const [swtche,setSwtche]=useState("")

    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
    
    const [val,setVal]=useState("")
    const [val2,setVal2]=useState("")
    const [val3,setVal3]=useState("")
    const [val4,setVal4]=useState("")
    const [val5,setVal5]=useState("")
    const [val6,setVal6]=useState("")
    const [val7,setVal7]=useState("")
    const test1=data[0]===val
    const test2=data[1]===val2
    const test3=data[2]===val3
    const test4=data[3]===val4
    const test5=data[4]===val5
    const test6=data[5]===val6
    const test7=data[6]===val7
  
    useEffect(()=>{
       if(TrueBox[count] ){
        setVal("")
        setVal2("")
        setVal3("")
        setVal4("")
        setVal5("")
        setVal6("")
        setVal7("")
       }
          
      },[TrueBox[count]])



      const ListNames=[
(<div className="" key='SliderMidNum1'>{state.arrangeMobbileCheck?(<div   className={` w-[4rem] h-12 ml-2 mr-2 text-[2rem]   font-bold border-4 border-gray-500  text-center bg-white text-gray-500`} >{data[0]}</div>):(<div key='SliderMidNum11' className={`  flex  items-center ${MaxSize?"ml-1 mr-1":"ml-2 mr-2"} `}><input value={val} type="number"  onChange={(e)=>{setVal(e.target.value)}} className={`w-[4rem] h-12 text-center  text-[1.5rem] font-bold border-4 ${data[0]===val?"border-cyan-500":"border-pink-500"}`} />{data[0]===val?<Image src={Imgs} alt="react Logo" width={`${MaxSize?"20":"40"}`} height={`${MaxSize?"20":"40"}`}  />:""}</div>)}</div>),
(<div className="" key='SliderMidNum2'>{state.arrangeMobbileCheck?<div   className={`  w-[4rem] h-12 ml-2 mr-2 text-[2rem] font-bold border-4 border-gray-500  text-center bg-white text-gray-500`} >{data[1]}</div>:<div key='SliderMidNum12' className={` flex  items-center ${MaxSize?"ml-1 mr-1":"ml-2 mr-2"} `}><input value={val2} type="number"  onChange={(e)=>{setVal2(e.target.value)}} className={`w-[4rem] h-12 text-center text-[1.5rem] font-bold border-4 ${data[1]===val2?"border-cyan-500":"border-pink-500"}`} />{data[1]===val2?<Image src={Imgs} alt="react Logo" width={`${MaxSize?"20":"40"}`} height={`${MaxSize?"20":"40"}`}  />:""}</div>}</div>),
(<div className="" key='SliderMidNum3'>{state.arrangeMobbileCheck?<div   className={`   w-[4rem] h-12 ml-2 mr-2 text-[2rem] font-bold border-4 border-gray-500  text-center bg-white text-gray-500`} >{data[2]}</div>:<div key='SliderMidNum13' className={` flex  items-center ${MaxSize?"ml-1 mr-1":"ml-2 mr-2"} `}><input value={val3} type="number"  onChange={(e)=>{setVal3(e.target.value)}} className={`w-[4rem] h-12 text-center text-[1.5rem] font-bold border-4 ${data[2]===val3?"border-cyan-500":"border-pink-500"}`} />{data[2]===val3?<Image src={Imgs} alt="react Logo" width={`${MaxSize?"20":"40"}`} height={`${MaxSize?"20":"40"}`}  />:""}</div>}</div>),
(<div className="" key='SliderMidNum4'>{state.arrangeMobbileCheck?<div    className={`  w-[4rem] h-12 ml-2 mr-2 text-[2rem] font-bold border-4 border-gray-500  text-center bg-white text-gray-500`} >{data[3]}</div>:<div key='SliderMidNum14' className={` items-center ${MaxSize?"ml-1 mr-1":"ml-2 mr-2"} `}><input value={val4} type="number"  onChange={(e)=>{setVal4(e.target.value)}} className={`w-[4rem] h-12 text-center text-[1.5rem] font-bold border-4 ${data[3]===val4?"border-cyan-500":"border-pink-500"}`} />{data[3]===val4?<Image src={Imgs} alt="react Logo" width={`${MaxSize?"20":"40"}`} height={`${MaxSize?"20":"40"}`}  />:""}</div>}</div>),
(<div className="" key='SliderMidNum5' >{state.arrangeMobbileCheck?<div   className={`  w-[4rem] h-12 ml-2 mr-2 text-[2rem] font-bold border-4 border-gray-500  text-center bg-white text-gray-500`} >{data[4]}</div>:<div key='SliderMidNum15' className={` flex  items-center ${MaxSize?"ml-1 mr-1":"ml-2 mr-2"}`}><input value={val5} type="number"  onChange={(e)=>{setVal5(e.target.value)}} className={`w-[4rem] h-12 text-center text-[1.5rem] font-bold border-4 ${data[4]===val5?"border-cyan-500":"border-pink-500"}`} />{data[4]===val5?<Image src={Imgs} alt="react Logo" width={`${MaxSize?"20":"40"}`} height={`${MaxSize?"20":"40"}`}  />:""}</div>}</div>),
(<div className="" key='SliderMidNum6' >{state.arrangeMobbileCheck?<div   className={`   w-[4rem] h-12 ml-2 mr-2 text-[2rem] font-bold border-4 border-gray-500  text-center bg-white text-gray-500`} >{data[5]}</div>:<div key='SliderMidNum16' className={` flex  items-center ${MaxSize?"ml-1 mr-1":"ml-2 mr-2"} `}><input value={val6} type="number"  onChange={(e)=>{setVal6(e.target.value)}} className={`w-[4rem] text-center h-12 text-[1.5rem] font-bold border-4 ${data[5]===val6?"border-cyan-500":"border-pink-500"}`} />{data[5]===val6?<Image src={Imgs} alt="react Logo" width={`${MaxSize?"20":"40"}`} height={`${MaxSize?"20":"40"}`}  />:""}</div>}</div>),
(<div className="" key='SliderMidNum7' >{state.arrangeMobbileCheck?<div   className={`   w-[4rem] h-12 ml-2 mr-2 text-[2rem] font-bold border-4 border-gray-500  text-center bg-white text-gray-500`} >{data[6]}</div>:<div key='SliderMidNum17' className={` flex  items-center ${MaxSize?"ml-1 mr-1":"ml-2 mr-2"} `}><input value={val7} type="number"  onChange={(e)=>{setVal7(e.target.value)}} className={`w-[4rem] h-12 text-center text-[1.5rem] font-bold border-4 ${data[6]===val7?"border-cyan-500":"border-pink-500"}`} />{data[6]===val7?<Image src={Imgs} alt="react Logo" width={`${MaxSize?"20":"40"}`} height={`${MaxSize?"20":"40"}`}  />:""}</div>}</div>),

      ]
      const SliceList=ListNames.slice(0,data.length)
      const Log=[test1,test2,test3,test4,test5,test6,test7]
      const SliceLog=Log.slice(0,data.length)
      if(SliceLog.every((x)=>x) && SliceLog.length===data.length){
        TrueBox[count]=true
        
       }
      
      useMemo(()=>{    
        if(TrueBox[count]){
          dispatch({  type:"FIG2",payload:[count]})
        }
       
      },[TrueBox[count]])
    return(
           
       <div className=" " key={`fragment${count}`}>
        {TrueBox[count]?<div className={`pl-12 pr-12  text-white bg-[#730099] border-4 border-white flex   items-center`}>
          <div className="flex ">{data.map((x,i)=><div key={`SliderConList${i}`}  className={`text-[2rem] ml-2 mr-2 font-bold `}>{x}</div>)}</div>
          <div className={`font-bold text-[1.2rem] "}`}>CORRECT</div>
          </div>:  
        <div className={`    items-center flex-col`}>
        <div className="flex w-full justify-center">
         {SliceList}
        </div>
        </div>}
       </div>
        )
}


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
           height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}