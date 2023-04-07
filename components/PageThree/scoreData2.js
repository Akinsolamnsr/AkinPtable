import { useEffect, useState } from "react"
import { useSession } from 'next-auth/react';

export default function ScoreData2({datum,data}) {
  
   const MapData=datum.data.map((x,i)=>{
    const Arrange=(1/((x.Games.Arrange.fst===0?3000000:x.Games.Arrange.fst)/3000000)) +( 1/((x.Games.Arrange.scd===0?10000000:x.Games.Arrange.scd)/10000000 ))+ (1/((x.Games.Arrange.thd===0?20000000:x.Games.Arrange.thd)/20000000));
    const Elem=(1/((x.Games.ElementFit.fst===0?2000000:x.Games.ElementFit.fst)/2000000)) + (1/((x.Games.ElementFit.scd===0?4500000:x.Games.ElementFit.scd)/4500000)) + (1/((x.Games.ElementFit.thd===0?10000000:x.Games.ElementFit.thd)/10000000));
    const Ener=(1/((x.Games.EnergyLevel.fst===0?4500000:x.Games.EnergyLevel.fst)/4500000)) +(1/((x.Games.EnergyLevel.scd===0?10000000:x.Games.EnergyLevel.scd)/10000000) )+(1/((x.Games.EnergyLevel.thd===0?30000000:x.Games.EnergyLevel.thd)/30000000));
    const Con=(1/((x.Games.Configuration.fst===0?10000000:x.Games.Configuration.fst)/10000000))+ (1/((x.Games.Configuration.scd===0?20000000:x.Games.Configuration.scd)/20000000)) + (1/((x.Games.Configuration.thd===0?50000000:x.Games.Configuration.thd)/50000000));
    const fam=1/((x.Games.Family.pos===0?10000000:x.Games.Family.pos)/10000000)
    const blck=1/((x.Games.Block.pos===0?10000000:x.Games.Block.pos)/10000000)
    const trend=1/((x.Games.Trend.pos===0?3000000:x.Games.Trend.pos) / 3000000)
    const sum=Math.round(Arrange+Elem+Ener+Con+fam+blck+trend)
     return [x.name,sum]
})

  const SortMap=MapData.sort((x,y)=>x[1]-y[1]).map((x,i)=>[...x,i+1]).filter((x)=>x[0]===data.user.name)
 
    const User=datum.data.filter((x)=>x.name===data.user.name)
    const List=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
    const [swtch,setSwtch]=useState("0")
    const [swtch2,setSwtch2]=useState("1")
    const [count,setCount]=useState(1)
    const [count2,setCount2]=useState(1)
    const [count3,setCount3]=useState(1)
    const [count4,setCount4]=useState(1)
    const lth=3
    
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000

    const Position=(type,sec)=>{
      
        switch(type){
          case "arrange":
          if(sec===20){
          return  datum.data.sort((x,y)=>x.Games.Arrange.fst-y.Games.Arrange.fst).map((x)=>x.name).indexOf(data.user.name)+1
          }
         else if(sec===40){
          return  datum.data.sort((x,y)=>x.Games.Arrange.scd-y.Games.Arrange.scd).map((x)=>x.name).indexOf(data.user.name)+1
          }
          else{
            return  datum.data.sort((x,y)=>x.Games.Arrange.thd-y.Games.Arrange.thd).map((x)=>x.name).indexOf(data.user.name)+1
          }
           break;
          case "ElemFit":
          if(sec===20){
          return  datum.data.sort((x,y)=>x.Games.ElementFit.fst-y.Games.ElementFit.fst).map((x)=>x.name).indexOf(data.user.name)+1
          }
         else if(sec===40){
          return  datum.data.sort((x,y)=>x.Games.ElementFit.scd-y.Games.ElementFit.scd).map((x)=>x.name).indexOf(data.user.name)+1
          }
          else{
            return  datum.data.sort((x,y)=>x.Games.ElementFit.thd-y.Games.ElementFit.thd).map((x)=>x.name).indexOf(data.user.name)+1
          }
           break;
           case "Energy":
            if(sec===20){
              return  datum.data.sort((x,y)=>x.Games.EnergyLevel.fst-y.Games.EnergyLevel.fst).map((x)=>x.name).indexOf(data.user.name)+1
              }
             else if(sec===40){
              return  datum.data.sort((x,y)=>x.Games.EnergyLevel.scd-y.Games.EnergyLevel.scd).map((x)=>x.name).indexOf(data.user.name)+1
              }
              else{
                return  datum.data.sort((x,y)=>x.Games.EnergyLevel.thd-y.Games.EnergyLevel.thd).map((x)=>x.name).indexOf(data.user.name)+1
              }
           break;
           case "Con":
            if(sec===20){
              return  datum.data.sort((x,y)=>x.Games.Configuration.fst-y.Games.Configuration.fst).map((x)=>x.name).indexOf(data.user.name)+1
              }
             else if(sec===40){
              return  datum.data.sort((x,y)=>x.Games.Configuration.scd-y.Games.Configuration.scd).map((x)=>x.name).indexOf(data.user.name)+1
              }
              else{
                return  datum.data.sort((x,y)=>x.Games.Configuration.thd-y.Games.Configuration.thd).map((x)=>x.name).indexOf(data.user.name)+1
              }
           break;
           case "blck":
            return  datum.data.sort((x,y)=>x.Games.Block.pos-y.Games.Block.pos).map((x)=>x.name).indexOf(data.user.name)+1
           break;
           case "family":
            return  datum.data.sort((x,y)=>x.Games.Family.pos-y.Games.Family.pos).map((x)=>x.name).indexOf(data.user.name)+1
           break;
           case "trend":
            return  datum.data.sort((x,y)=>x.Games.Family.pos-y.Games.Family.pos).map((x)=>x.name).indexOf(data.user.name)+1
           break;
           default:
           throw new Error()
        }
    
     }
     function msToTime(s) {

      // Pad to 2 or 3 digits, default is 2
      function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
      }
    
      var ms = s % 1000;
      s = (s - ms) / 1000;
      var secs = s % 60;
      s = (s - secs) / 60;
      var mins = s % 60;
      var hrs = (s - mins) / 60;
    
      return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
    }
      const Reload=User[0]?.name?true:false
  return (
    <>
    {Reload?<><div  className="w-full h-full  flex flex-col shadow-xl">
          <span className={`${MaxSize?"text-[0.7rem]":""}`}>Welcome <span className="font-bold text-gray-700">{User[0].name}</span></span>
        <div className="flex flex-col relative z-3">
        <div className={`  border-white ${MaxSize?"text-[0.6rem] border-2":"text-[0.8rem] p-1 border-1"}  font-bold bg-[#b30047] text-white text-center`} >Overall best position</div>
        <div className={`${swtch==="0"?"":"hidden"} ${MaxSize?"":"h-[2rem]"} mr-1 ml-1 `}>
        <div className={`flex ${MaxSize?"text-[0.7rem]":""}`}><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{SortMap[0][1]}<span className="pr-1"><span className="font-bold">pos</span>:{SortMap[0][2]}</span></span></div>
        </div>
        </div>

        <div className="flex flex-col relative z-3">
        <div className={`  border-white ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-1"}  font-bold bg-[#b30047] text-white flex justify-between`} ><button onClick={()=>setCount(prev=>prev<=1?prev:count-1)} className="font-extrabold rotate-180">&gt;</button><span>Arrange Elements</span><button onClick={()=>setCount(prev=>prev>=3?prev:count+1)} className="font-extrabold">&gt;</button></div>
        <div className={`  mr-1 ml-1 text-[#660029]`}>
            <div className={`${MaxSize?"":"pt-2 pb-2"} text-[0.8rem] `}>
                {count===1 && (<div className={`flex`}><span className="pr-2 font-bold">20:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.Arrange.fst)}<span className="pr-1"><span className="font-bold">p</span>:{Position("arrange",20)}</span></span></div>)}
                {count===2 && (<div className="flex"><span className="pr-2 font-bold">40:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.Arrange.scd)}<span className="pr-1"><span className="font-bold">p</span>:{Position("arrange",40)}</span></span></div>)}
                {count===3 && (<div className="flex"><span className="pr-2 font-bold">All:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.Arrange.thd)}<span className="pr-1"><span className="font-bold">p</span>:{Position("arrange")}</span></span></div>)}
                </div>
        </div>
        </div>

        <div className="flex flex-col relative z-3">
        <div className={`  border-white ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-1"}  font-bold bg-[#b30047] text-white flex justify-between`} ><button onClick={()=>setCount2(prev=>prev<=1?prev:count2-1)} className="font-extrabold rotate-180">&gt;</button><span>Fit Elements</span><button onClick={()=>setCount2(prev=>prev>=3?prev:count2+1)} className="font-extrabold">&gt;</button></div>
        <div className={`  mr-1 ml-1 text-[#660029]`}>
            <div className={`${MaxSize?"":"pt-2 pb-2"} text-[0.8rem] `}>
                {count2===1 && (<div className={`flex ${MaxSize?"text-[0.7rem]":""}`}><span className="pr-2 font-bold">20:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.ElementFit.fst)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("ElemFit",20)}</span></span></div>)}
                {count2===2 && (<div className={`flex ${MaxSize?"text-[0.7rem]":""}`}><span className="pr-2 font-bold">40:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.ElementFit.scd)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("ElemFit",40)}</span></span></div>)}
                {count2===3 && (<div className={`flex ${MaxSize?"text-[0.7rem]":""}`}><span className="pr-2 font-bold">All:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.ElementFit.thd)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("ElemFit")}</span></span></div>)}
                </div>
        </div>
        </div>

        <div className="flex flex-col relative z-3">
        <div className={`  border-white ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-1"}  font-bold bg-[#b30047] text-white flex justify-between`} ><button onClick={()=>setCount3(prev=>prev<=1?prev:count3-1)} className="font-extrabold rotate-180">&gt;</button><span>Energy Level</span><button onClick={()=>setCount3(prev=>prev>=3?prev:count3+1)} className="font-extrabold">&gt;</button></div>
        <div className={`  mr-1 ml-1 text-[#660029]`}>
            <div className={`${MaxSize?"":"pt-2 pb-2"} text-[0.8rem] `}>
                {count3===1 && (<div className={`flex `}><span className="pr-2 font-bold">20:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.EnergyLevel.fst)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("Energy",20)}</span></span></div>)}
                {count3===2 && (<div className="flex"><span className="pr-2 font-bold">40:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.EnergyLevel.scd)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("Energy",40)}</span></span></div>)}
                {count3===3 && (<div className="flex"><span className="pr-2 font-bold">All:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.EnergyLevel.thd)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("Energy")}</span></span></div>)}
                </div>
        </div>
        </div>

        <div className="flex flex-col relative z-3">
        <div className={`  border-white ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-1"}  font-bold bg-[#b30047] text-white flex justify-between`} ><button onClick={()=>setCount4(prev=>prev<=1?prev:count4-1)} className="font-extrabold rotate-180">&gt;</button><span>Electronic Config</span><button onClick={()=>setCount4(prev=>prev>=3?prev:count4+1)} className="font-extrabold">&gt;</button></div>
        <div className={`  mr-1 ml-1 text-[#660029]`}>
            <div className={`${MaxSize?"":"pt-2 pb-2"} text-[0.8rem] `}>
                {count4===1 && (<div className={`flex `}><span className="pr-2 font-bold">20:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.Configuration.fst)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("Con",20)}</span></span></div>)}
                {count4===2 && (<div className="flex"><span className="pr-2 font-bold">40:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.Configuration.scd)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("Con",40)}</span></span></div>)}
                {count4===3 && (<div className="flex"><span className="pr-2 font-bold">All:</span><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.Configuration.thd)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("Con")}</span></span></div>)}
                </div>
        </div>
        </div>

        <div className="flex flex-col relative z-3">
        <div className={`  border-white ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-1"}  font-bold bg-[#b30047] text-white text-center`} >Spdf Block</div>
        <div className={`${swtch==="0"?"":"hidden"} ${MaxSize?"":"h-[2rem]"} mr-1 ml-1`}>
        <div className={`flex `}><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.Block.pos)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("blck")}</span></span></div>
        </div>
        </div>

        <div className="flex flex-col relative z-3">
        <div className={`  border-white ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-1"}  font-bold bg-[#b30047] text-white text-center`} >Family drop</div>
        <div className={`${swtch==="0"?"":"hidden"} ${MaxSize?"":"h-[2rem]"} mr-1 ml-1`}>
        <div className={`flex `}><span className="w-full  flex justify-between text-black font-bold text-[0.7rem]">{msToTime(User[0].Games.Family.pos)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("family")}</span></span></div>
        </div>
        </div>

        <div className="flex flex-col relative z-3">
        <div className={`  border-white ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-1"}  font-bold bg-[#b30047] text-white text-center`} >Trend</div>
        <div className={`${swtch==="0"?"":"hidden"} ${MaxSize?"":"h-[2rem]"} mr-1 ml-1`}>
        <div className={`flex `}><span className="w-full  flex justify-between ttext-black font-bold text-[0.7rem]">{msToTime(User[0].Games.Trend.pos)}<span className="pr-1"><span className="font-bold">pos</span>:{Position("trend")}</span></span></div>
        </div>
        </div>

        
     </div></>:<div className="text-[2rem] font-bold text-center">Refersh Browser to load data</div>}
    </>
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