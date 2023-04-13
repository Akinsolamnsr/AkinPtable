import { useEffect, useMemo, useReducer, useState } from "react";
import { Confg40, disp, Spdf, Spdf40, spdfRaw, spdfRaw40 } from "../../../../Const";
import { SpdfList, SpdfNumber, TrueBoxes} from "../../../../ConsttSpdf.js";
import { useAppContext } from "../../../../UseContext";




export default function SpdfMidMob({count,counter}){
    const context=useAppContext()
    const {dispatch,state}=context
    const [click, setClick] = useState("");
    const [stat, setStat] = useState(false);
    const names=[]
    const OList=Spdf40.sort((a,b)=> a[1] === b[1] ? 0 : a[1] < b[1] ? -1 : 1)
    const SpdfItem=OList[counter][3].split(",")[0].split(' ')
    const  checkForty=TrueBoxes.slice(0,40).every((x)=>x===true) && state.moben==="Forty"
    const init={...SpdfNumber} 
    const reducer=(state,action)=>{
        let newState
          switch(action.type){
            case count:
               
            let temp=state[count]
              let valTemp=[...temp,...action.payload]
              state[count].push(...valTemp)
             
          newState={...state}
             break;
             default:
             throw new Error()
          }
          return newState
       }
       const[spdfData,dispatched]=useReducer(reducer,init)

    useEffect(()=>{
        if(state.ConfigMobileMatch===state.ConfigMobileMatch1[count] && click!==""){
            dispatched({type:count,payload:[state.ConfigMobileMatch]})
         
        }
         
         
    },[state.ConfigMobileMatch,click])

    if(SpdfItem.every((x)=>Array.from(new Set(spdfData[count])).includes(x))){
          TrueBoxes[count]=true
    }
   
    const ConfigList = ["1s¹,1","1s²,2","2s¹,3","2s²,4","2p¹,5","2p²,6","2p³,7","2p⁴,8","2p⁵,9","2p⁶,10",
    "3s¹,11","3s²,12","3p¹,13","3p²,14","3p³,15","3p⁴,16","3p⁵,17","3p⁶,18","3d¹,19","3d²,20","3d¹,21","3d²,22","3d³,23","3d⁴,24","3d⁵,25","3d⁶,26","3d⁷,27","3d⁸,28","3d⁹,29","3d¹⁰,30",
    "4s¹,31","4s²,32","4p¹,33","4p²,34","4p³,35","4p⁴,36","4p⁵,37","4p⁶,38","4d¹,39","4d²,40","4d¹,41","4d²,42","4d³,43","4d⁴,44","4d⁵,45","4d⁶,46","4d⁷,47","4d⁸,48","4d⁹,49","4d¹⁰,50",
    "4f¹,51","4f²,52","4f³,53","4f⁴,54","4f⁵,55","4f⁶,56","4f⁷,57","4f⁸,58","4f⁹,59","4f¹⁰,60","4f¹¹,61","4f¹²,62","4f¹³,63","4f¹⁴,64",
    "5s¹,65","5s²,66","5p¹,67","5p²,68","5p³,69","5p⁴,70","5p⁵,71","5p⁶,72","5d¹,73","5d²,74","5d¹,75","5d²,76","5d³,77","5d⁴,78","5d⁵,79","5d⁶,80","5d⁷,81","5d⁸,82","5d⁹,83","5d¹⁰,84",
    "5f¹,85","5f²,86","5f³,87","5f⁴,88","5f⁵,89","5f⁶,90","5f⁷,91","5f⁸,92","5f⁹,93","5f¹⁰,94","5f¹¹,95","5f¹²,96","5f¹³,97","5f¹⁴,98",
    "6s¹,99","6s²,100","6p¹,101","6p²,102","6p³,103","6p⁴,104","6p⁵,105","6p⁶,106","6d¹,107","6d²,108","6d¹,109","6d²,110","6d³,111","6d⁴,112","6d⁵,113","6d⁶,114","6d⁷,115","6d⁸,116","6d⁹,117","6d¹⁰,118",
    "7s¹,119","7s²,120","7p¹,121","7p²,122","7p³,123","7p⁴,124","7p⁵,125","7p⁶,126",
];
const ConfigList2 = ["1s¹,1","1s²,2","2s¹,3","2s²,4","2p¹,5","2p²,6","2p³,7","2p⁴,8","2p⁵,9","2p⁶,10",
"3s¹,11","3s²,12","3p¹,13","3p²,14","3p³,15","3p⁴,16","3p⁵,17","3p⁶,18","4s¹,19","4s²,20","3d¹,21","3d²,22","3d³,23","3d⁴,24","3d⁵,25","3d⁶,26","3d⁷,27","3d⁸,28","3d⁹,29","3d¹⁰,30",
"4p¹,31","4p²,32","4p³,33","4p⁴,34","4p⁵,35","4p⁶,36","5s¹,37","5s²,38","4d¹,39","4d²,40","4d²,41","4d⁴,42","4d⁵,43","4d⁶,44","4d⁷,45","4d⁸,46","4d⁹,47","4d¹⁰,48",
"5p¹,49","5p²,50","5p³,51","5p⁴,52","5p⁵,53","5p⁶,54","6s¹,55","6s²,56",
"4f¹,57","4f²,58","4f³,59","4f⁴,60","4f⁵,61","4f⁶,62","4f⁷,63","4f⁸,64","4f⁹,65","4f¹⁰,66","4f¹¹,67","4f¹²,68","4f¹³,69","4f¹⁴,70",
"5d¹,71","5d²,72","5d³,73","5d⁴,74","5d⁵,75","5d⁶,76","5d⁷,77","5d⁸,78","5d⁹,79","5d¹⁰,80", "6p¹,81","6p²,82","6p³,83","6p⁴,84","6p⁵,85","6p⁶,86","7s¹,87","7s²,88",
"5f¹,89","5f²,90","5f³,91","5f⁴,92","5f⁵,93","5f⁶,94","5f⁷,95","5f⁸,96","5f⁹,97","5f¹⁰,98","5f¹¹,99","5f¹²,100","5f¹³,101","5f¹⁴,102",
"6d¹,103","6d²,104","6d³,105","6d⁴,106","6d⁵,107","6d⁶,108","6d⁷,108","6d⁸,109","6d⁹,110","6d¹⁰,111",
"7p¹,112","7p²,113","7p³,114","7p⁴,115","7p⁵,116","7p⁶,117",
];
    ConfigList2.forEach((data,i,x) => {
        const fig=data.split(",")[0]
        const fig2=data.split(",")[1]
        names.push(<button onClick={()=>{setClick(fig);dispatch({ type:"CONFIGMOBILEMATCH1",  payload:[fig,count] })}} key={`spdfMid${i}12s`} className={`${spdfRaw[count].includes(i)?"":"hidden"} ${spdfData[count].includes(fig)?"bg-pink-700":""} ${fig===click?`border-2 border-red-300`:``} w-12 h-12  ml-2 text-center font-bold text-[1.2rem] shadow-xl border-2 border-black`}>< ><span className={`${spdfData[count].includes(fig)?"text-white":`${state.mobClick?"text-gray-400":"hidden"}`}`}>{fig}</span></></button>)
      })
     
     
    
    return(
        <div className={` w-full h-full flex flex-wrap `} >
        {names}
        <button onClick={()=> dispatch({ type:"SPDF20F",  payload:true })} className={`${checkForty?"":"hidden"} absolute bg-green-700 font-bold text-white p-1 pt-4 pb-4 mt-[30%]`}>Click to complete</button>
        </div>    
        )
}   