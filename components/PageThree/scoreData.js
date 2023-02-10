import { useEffect, useState } from "react"


export default function ScoreData(prop) {
    const {data}=prop
    const List=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
    const [swtch,setSwtch]=useState("0")
    const [swtch2,setSwtch2]=useState("1")

    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
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
      
const MapData=data.map((x,i)=>{
    const Arrange=x.Games.Arrange.fst + x.Games.Arrange.scd/2 + x.Games.Arrange.thd/6;
    const Elem=x.Games.ElementFit.fst + x.Games.ElementFit.scd/2 + x.Games.ElementFit.thd/6;
    const Ener=x.Games.EnergyLevel.fst + x.Games.EnergyLevel.scd/2 + x.Games.EnergyLevel.thd/6;
    const Con=x.Games.Configuration.fst + x.Games.Configuration.scd/2 + x.Games.Configuration.thd/6;
    const fam=x.Games.Family.pos
    const blck=x.Games.Block.pos
    const trend=x.Games.Trend.pos
    const sum=Math.round(Arrange+Elem+Ener+Con+fam+blck+trend)
     return [x.name,sum]
})

  return (
    <div  className="w-full h-full  flex flex-col shadow-xl">
        
        <div className="flex flex-col relative z-3">
        <button className={`flex justify-between  border-green-200 ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-4"}  font-bold bg-green-700 text-white rounded-full`}  onClick={()=>setSwtch("0")} value="0"><span className="">Overall best</span>{swtch==="7"?<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>:<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>}</button>
        <div className={`${swtch==="0"?"":"hidden"} ${MaxSize?"h-[10rem]":"h-[17rem]"} mr-1 ml-1 overflow-y-auto`}>
        {MapData.sort((x,y)=>x[1]-y[1]).map((x,i)=>(<div key={`bestScore${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x[0]}</span><span className="basis-[35%] ">{msToTime(x[1])}</span></div>))}
        </div>
        </div>

        <div className="flex flex-col   ">
        <button className={`flex justify-between  border-green-200  ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-4"} font-bold bg-green-700 text-white rounded-full`}  onClick={()=>setSwtch("1")} value="1"><span className="">Arrange Elements</span>{swtch==="1"?<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>:<span className={`-rotate-90 font-bold  ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>}</button>
        <div className={`${swtch==="1"?"":"hidden"} ${MaxSize?"h-[10rem] text-[0.7rem]":"h-[17rem]"}  mr-1 ml-1 flex flex-col`}>
            <div className="flex justify-between "><button onClick={()=>setSwtch2("1")} className={`${swtch2==="1"?"text-cyan-700 font-bold ":"bg-green-200  border-2 text-green-700 font-bold"} w-full `}>Twenty</button><button onClick={()=>setSwtch2("2")} className={`${swtch2==="2"?"text-cyan-700 font-bold":"bg-green-200 border-2  text-green-700 font-bold"} w-full`}>Forty</button><button onClick={()=>setSwtch2("3")} className={`${swtch2==="3"?"text-cyan-700 font-bold":"bg-green-200 border-2  text-green-700 font-bold"} w-full`}>Full</button></div>
            <div>
                {swtch2==="1"?<div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.Arrange.fst-y.Games.Arrange.fst).map((x,i)=>(<div key={`AScoreT${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.Arrange.fst)}</span></div>))}</div>:
                swtch2==="2"?<div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.Arrange.scd-y.Games.Arrange.scd).map((x,i)=>(<div key={`AScoreF${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.Arrange.scd)}</span></div>))}</div>:
                <div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.Arrange.thd-y.Games.Arrange.thd).map((x,i)=>(<div key={`AScoreA${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.Arrange.thd)}</span></div>))}</div>
                }
            </div>
        </div>
        </div>

        <div className="flex flex-col   ">
        <button className={`flex justify-between  border-green-200  ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-4"} font-bold bg-green-700 text-white rounded-full`}  onClick={()=>setSwtch("2")} value="1"><span className="">Fit Elements</span>{swtch==="1"?<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>:<span className={`-rotate-90 font-bold  ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>}</button>
        <div className={`${swtch==="2"?"":"hidden"} ${MaxSize?"h-[10rem] text-[0.7rem]":"h-[17rem]"}  mr-1 ml-1 flex flex-col`}>
            <div className="flex justify-between "><button onClick={()=>setSwtch2("1")} className={`${swtch2==="1"?"text-cyan-700 font-bold":"bg-green-200  border-2 text-green-700 font-bold"} w-full `}>Twenty</button><button onClick={()=>setSwtch2("2")} className={`${swtch2==="2"?"text-cyan-700 font-bold":"bg-green-200 border-2  text-green-700 font-bold"} w-full`}>Forty</button><button onClick={()=>setSwtch2("3")} className={`${swtch2==="3"?"text-cyan-700 font-bold":"bg-green-200 border-2  text-green-700 font-bold"} w-full`}>Full</button></div>
            <div>
            {swtch2==="1"?<div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.ElementFit.fst-y.Games.ElementFit.fst).map((x,i)=>(<div key={`FitScoreT${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.ElementFit.fst)}</span></div>))}</div>:
                swtch2==="2"?<div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.ElementFit.scd-y.Games.ElementFit.scd).map((x,i)=>(<div key={`FitcoreT${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.ElementFit.scd)}</span></div>))}</div>:
                <div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.ElementFit.thd-y.Games.ElementFit.thd).map((x,i)=>(<div  key={`FitScoreT${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.ElementFit.thd)}</span></div>))}</div>
                }
            </div>
        </div>
        </div>

        <div className="flex flex-col   ">
        <button className={`flex justify-between  border-green-200  ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-4"} font-bold bg-green-700 text-white rounded-full`}  onClick={()=>setSwtch("3")} value="1"><span className="">Energy Level</span>{swtch==="1"?<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>:<span className={`-rotate-90 font-bold  ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>}</button>
        <div className={`${swtch==="3"?"":"hidden"} ${MaxSize?"h-[10rem] text-[0.7rem]":"h-[17rem]"}  mr-1 ml-1 flex flex-col`}>
            <div className="flex justify-between "><button onClick={()=>setSwtch2("1")} className={`${swtch2==="1"?"text-cyan-700 font-bold":"bg-green-200  border-2 text-green-700 font-bold"} w-full `}>Twenty</button><button onClick={()=>setSwtch2("2")} className={`${swtch2==="2"?"text-cyan-700 font-bold":"bg-green-200 border-2  text-green-700 font-bold"} w-full`}>Forty</button><button onClick={()=>setSwtch2("3")} className={`${swtch2==="3"?"text-cyan-700 font-bold":"bg-green-200 border-2  text-green-700 font-bold"} w-full`}>Full</button></div>
            <div>
            {swtch2==="1"?<div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.EnergyLevel.fst-y.Games.EnergyLevel.fst).map((x,i)=>(<div key={`EnercoreT${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.EnergyLevel.fst)}</span></div>))}</div>:
                swtch2==="2"?<div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.EnergyLevel.scd-y.Games.EnergyLevel.scd).map((x,i)=>(<div key={`Enercoref${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.EnergyLevel.scd)}</span></div>))}</div>:
                <div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.EnergyLevel.thd-y.Games.EnergyLevel.thd).map((x,i)=>(<div key={`EnercoreA${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.EnergyLevel.thd)}</span></div>))}</div>
                }
            </div>
        </div>
        </div>

        <div className="flex flex-col   ">
        <button className={`flex justify-between  border-green-200  ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-4"} font-bold bg-green-700 text-white rounded-full`}  onClick={()=>setSwtch("4")} value="1"><span className="">Electronic Config</span>{swtch==="1"?<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>:<span className={`-rotate-90 font-bold  ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>}</button>
        <div className={`${swtch==="4"?"":"hidden"} ${MaxSize?"h-[10rem] text-[0.7rem]":"h-[17rem]"}  mr-1 ml-1 flex flex-col`}>
            <div className="flex justify-between "><button onClick={()=>setSwtch2("1")} className={`${swtch2==="1"?"text-cyan-700 font-bold":"bg-green-200  border-2 text-green-700 font-bold"} w-full `}>Twenty</button><button onClick={()=>setSwtch2("2")} className={`${swtch2==="2"?"text-cyan-700 font-bold":"bg-green-200 border-2  text-green-700 font-bold"} w-full`}>Forty</button><button onClick={()=>setSwtch2("3")} className={`${swtch2==="3"?"text-cyan-700 font-bold":"bg-green-200 border-2  text-green-700 font-bold"} w-full`}>Full</button></div>
            <div>
            {swtch2==="1"?<div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.Configuration.fst-y.Games.Configuration.fst).map((x,i)=>(<div key={`ConcoreT${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.Configuration.fst)}</span></div>))}</div>:
                swtch2==="2"?<div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.Configuration.scd-y.Games.Configuration.scd).map((x,i)=>(<div key={`ConcoreF${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.Configuration.scd)}</span></div>))}</div>:
                <div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.Configuration.thd-y.Games.Configuration.thd).map((x,i)=>(<div key={`ConcoreA${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.Configuration.thd)}</span></div>))}</div>
                }
            </div>
        </div>
        </div>

        <div className="flex flex-col relative z-3">
        <button className={`flex justify-between  border-green-200 ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-4"}  font-bold bg-green-700 text-white rounded-full`}  onClick={()=>setSwtch("5")} value="0"><span className="">Spdf Block</span>{swtch==="7"?<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>:<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>}</button>
        <div className={`${swtch==="5"?"":"hidden"} ${MaxSize?"h-[10rem] text-[0.7rem]":"h-[17rem]"} mr-1 ml-1 overflow-y-auto`}>
        <div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.Block.pos-y.Games.Block.pos).map((x,i)=>(<div key={`Elemcore${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.Block.pos)}</span></div>))}</div>
        </div>
        </div>

        <div className="flex flex-col relative z-3">
        <button className={`flex justify-between  border-green-200 ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-4"}  font-bold bg-green-700 text-white rounded-full`}  onClick={()=>setSwtch("6")} value="0"><span className="">Family drop</span>{swtch==="7"?<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>:<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>}</button>
        <div className={`${swtch==="6"?"":"hidden"} ${MaxSize?"h-[10rem] text-[0.7rem]":"h-[17rem]"} mr-1 ml-1 overflow-y-auto`}>
        <div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.Family.pos-y.Games.Family.pos).map((x,i)=>(<div key={`Famcore${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.Family.pos)}</span></div>))}</div>
        </div>
        </div>

        <div className="flex flex-col relative z-3">
        <button className={`flex justify-between  border-green-200 ${MaxSize?"text-[0.7rem] border-2":"text-[0.8rem] p-1 border-4"}  font-bold bg-green-700 text-white rounded-full`}  onClick={()=>setSwtch("7")} value="0"><span className="">Table Trend</span>{swtch==="7"?<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>:<span className={`rotate-90 font-bold ${MaxSize?"text-[0.7rem]":"text-[1rem]"}`}>&gt;</span>}</button>
        <div className={`${swtch==="7"?"":"hidden"} ${MaxSize?"h-[10rem] text-[0.7rem]":"h-[17rem]"} mr-1 ml-1 overflow-y-auto`}>
        <div className=" h-[18rem]  overflow-y-auto">{data.sort((x,y)=>x.Games.Trend.pos-y.Games.Trend.pos).map((x,i)=>(<div key={`Trecore${i}`} className="mt-1 flex bg-[#e6faff] text-[#00141a] text-[0.7rem] font-semibold"><span className="basis-[15%]">{i+1}</span><span className="basis-[50%]">{x.name}</span><span className="basis-[35%] ">{msToTime(x.Games.Trend.pos)}</span></div>))}</div>
        </div>
        </div>

        
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