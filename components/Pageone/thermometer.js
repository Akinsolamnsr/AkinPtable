import { Range } from 'react-range';
import Draggable, {DraggableCore} from 'react-draggable'
import { createRef, useReducer, useRef, useState } from 'react';
import { useAppContext } from '../UseContext';



 const Thermo=()=>{
    const context=useAppContext()
    const {dispatch,state}=context
    const [Kelvin, setKelvin] =useState(0);
    const [cel,setCel]=useState(-273)
    const [fah,setFah]=useState(-459)
    const Temp=createRef()
    
    /* const init={
       tempK:0,
       tempC:0,
       tempF:0
    } 
    const reducer=(state,action)=>{
        let newState
          switch(action.type){
            case "FAREINHEIT":
            const FAR=(action.temp * (9/5) )+35
            state.tempF=FAR
             newState={...state}
             break;
             case "KELVIN":
            state.tempK=action.temp
             newState={...state}
             break;
             case "CELSIUS":
            const CEL=action.melt-273.15
            state.tempC=CEL
             newState={...state}
             break;
             default:
             throw new Error()
          }
          return newState
       }
        const[temp,dispatched]=useReducer(reducer,init)
    console.log(Kelvin) */
    const HandleChange=(e,scale)=>{
        const Chg=(s)=>{
          return s==="K"?0:s==="C"?-273.15:-459.7
        }
        const temp=e.target.value
        
        if(scale==="K"){
            setKelvin(temp);
            setCel(parseFloat(temp)-273.15);
            setFah(((parseFloat(temp)-273.15)*(9/5)+32).toFixed(1))
            dispatch({
                type:"TEMPCHANGE",
                payload:temp
            })
        }
        else if(scale==="C"){
            setKelvin(parseFloat(temp)+273.15);
            setCel(temp);
            setFah(((parseFloat(temp)*(9/5))+32).toFixed(1))
            dispatch({
                type:"TEMPCHANGE",
                payload:parseFloat(temp)+273.15
            })
        }
        else if(scale==="F"){
            setKelvin((parseFloat(temp)-32)*(5/9)+273.15);
            setCel( (parseFloat(temp)-32)*(5/9));
            setFah(temp)
            dispatch({
                type:"TEMPCHANGE",
                payload:((parseFloat(temp)-32)*(5/9)+273.15).toFixed(0)
            })
        }
        else{
            return
        }
    };

    return(
        <div className={`${state.status?"absolute -my-4":""}`}> 
            <span className='ml-[19rem] absolute -mt-[0.5rem]'><span className=''><input type="number" value={Kelvin} min="0" max="6000" onChange={(e)=>HandleChange(e,"K")} className='w-[4.5rem] h-[1.2rem] ml-2 text-xs' />K</span><span className=''><input type="number" className= 'form-input text-xs  w-[5rem] h-[1.2rem] ml-2'min="-273" max="5027" value={cel}  onChange={(e)=>HandleChange(e,"C")} />{String.fromCharCode(176)}C</span><span className=''><input type="number" className='w-[5rem] h-[1.2rem] ml-2 text-xs' value={fah}  onChange={(e)=>HandleChange(e,"F")} min="-459.7" max="10340.3" />{String.fromCharCode(176)}F</span></span>
            <div className='-ml-8'><input type="range" min="0" value={Kelvin} max="6000" onChange={(e)=>HandleChange(e,"K")} className='w-[20rem] h-1 range-sm bg-gray-200 border border-[0.25rem] border-gray-100  rounded-lg' style={{}} /></div>
   
        </div>
    )
}

export default Thermo


const ThermoBar=()=>{
    return(
        <div className='mb-4 -ml-[1rem]'>
        <div className='w-[1rem] h-[1rem] bg-black rounded-full relative'></div><div className='w-[20rem] h-1 bg-black rounded -mt-[0.7rem]'></div>
        </div>
    )
}
