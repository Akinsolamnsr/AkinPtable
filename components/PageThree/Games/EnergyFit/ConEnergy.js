import { useEffect, useMemo, useState } from "react";

import EnergyDrop from "./EnergyDrop";




export default function ConEnergy(prop){
    
    const [cont,setCont]=useState([])
    const names = []
    const {Data,index}=prop
    const num=[1,,3,5]  
    const ConfigList = ["1s¹","1s²","2s¹","2s²","2p¹","2p²","2p³","2p⁴","2p⁵","2p⁶",
    "3s¹","3s²","3p¹","3p²","3p³","3p⁴","3p⁵","3p⁶","4s¹","4s²","3d¹","3d²","3d³","3d⁴","3d⁵","3d⁶","3d⁷","3d⁸","3d⁹","3d¹⁰",
    "4p¹","4p²","4p³","4p⁴","4p⁵","4p⁶","5s¹","5s²","4d¹","4d²","4d²","4d⁴","4d⁵","4d⁶","4d⁷","4d⁸","4d⁹","4d¹⁰",
    "5p¹","5p²","5p³","5p⁴","5p⁵","5p⁶","6s¹","6s²",
    "4f¹","4f²","4f³","4f⁴","4f⁵","4f⁶","4f⁷","4f⁸","4f⁹","4f¹⁰","4f¹¹","4f¹²","4f¹³","4f¹⁴",
    "5d¹","5d²","5d³","5d⁴","5d⁵","5d⁶","5d⁷","5d⁸","5d⁹","5d¹⁰", "6p¹","6p²","6p³","6p⁴","6p⁵","6p⁶","7s¹","7s²",
    "5f¹","5f²","5f³","5f⁴","5f⁵","5f⁶","5f⁷","5f⁸","5f⁹","5f¹⁰","5f¹¹","5f¹²","5f¹³","5f¹⁴",
   "6d¹","6d²","6d³","6d⁴","6d⁵","6d⁶","6d⁷","6d⁸","6d⁹","6d¹⁰",
    "7p¹","7p²","7p³","7p⁴","7p⁵","7p⁶",
];
    
    ConfigList.forEach((data,i) => {
        names.push(<span className={`${index.includes(i)?"":"hidden"}`}><span className="hidden">{data}</span><EnergyDrop accept={data} Ind={i} /></span>)
      })

      
      //const Filt=names.filter((x)=>Data.includes(x.props.children[0].props.children))
           //console.log(names[0].props.children[0].props.children)
           //const ind=Filt.map((x)=>ConfigList.indexOf(x.props.children[0].props.children))
 
return(
    <div className="flex flex-wrap">
     {names}
    </div>
)

}