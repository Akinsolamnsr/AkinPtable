import { useEffect, useState } from "react";
import GameLink from "../PageThree/GnsPage"

export default function Screen(){
  const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000
  const Tab=(Math.min(size.height,size.width))/(Math.max(size.height,size.width))
  const TabSize=Tab>0.62 && size.width>1000
  return(
   <div className="h-screen overflow-auto ">
 <div className={`flex flex-wrap `}>
 <div className={`${MaxSize?"w-48 h-48 ml-12 mb-8":""}`}>
      <GameLink href="/Games/Block">   
      <div className='w-48 h-48 border-2 bg-[#ffe6ff]  flex justify-center items-center flex-col text-gray-600   border-cyan-300 ml-12 mt-12   shadow-xl rounded  '>
          <span className="text-[2rem]">Fit</span>
          <span className="font-bold">Element</span>
          <span className="font-bold">{MaxSize || TabSize || size.width<550?<>Click n Click</>:<>Drag n Drop</>}  Game</span>
        </div>
      </GameLink>
      </div>
      <div className={`${MaxSize?"w-48 h-48 ":""}`}>
      <GameLink href="/Games/Arrange">
        <div className='w-48 h-48 border-2 bg-[#fff0e6]  flex justify-center items-center flex-col text-gray-600   border-cyan-300 ml-12 mt-12   shadow-xl rounded  '>
          <span className="text-[2rem]">Arrange</span>
          <span className="font-bold">Element</span>
          <span className={`font-bold `}>{MaxSize || TabSize || size.width<550?<>Click n Click</>:<>Drag n Drop</>}  Game</span>
        </div>
      </GameLink>
      </div>
      
      <div className={`${MaxSize?"w-48 h-48 ml-12 mb-8":""}`} >
      <GameLink href="/Games/Configuration"> 
      <div className='w-48 h-48 border-2 bg-[#ffe6f0]  flex justify-center items-center flex-col text-gray-600   border-cyan-300  ml-12 mt-12   shadow-xl rounded  '>
          <span className="text-[2rem]">Energy </span>
          <span className="font-bold">Level</span>
          <span className="font-bold"> Input Game</span>
        </div>
      </GameLink>
      </div>
      <div className={`${MaxSize?"w-48 h-48 ml-12 mb-8":""}`}>
      <GameLink href="/Games/EnergyLevel">
      <div className='w-48 h-48 border-2 bg-[#ffffe6]  flex justify-center items-center flex-col text-gray-600   border-cyan-300  ml-12 mt-12   shadow-xl rounded  '>
          <span className="text-[2rem]">Electronic</span>
          <span className="font-bold"> Configuration</span>
          <span className="font-bold">{MaxSize || TabSize || size.width<550?<>Click n Click</>:<>Drag n Drop</>}  Game</span>
        </div>
      </GameLink>
      </div>
      <div className={`${MaxSize?"w-48 h-48 ml-12 mb-8":""}`}>
      <GameLink href="/Games/Family">
      <div className='w-48 h-48 border-2 bg-[#fff5e6]  flex justify-center items-center flex-col text-gray-600   border-cyan-300  ml-12 mt-12   shadow-xl rounded  '>
          <span className="text-[2rem]">Family</span>
          <span className="font-bold">Periodic Table</span>
          <span className="font-bold">{MaxSize || TabSize || size.width<550?<>Click n Click</>:<>Drag n Drop</>}  Game</span>
        </div>
      </GameLink>
      </div>
      <div className={`${MaxSize?"w-48 h-48 ml-12 mb-8":""}`}>
      <GameLink href="/Games/FitElement">
      <div className='w-48 h-48 border-2 bg-[#f2e6ff]  flex justify-center items-center flex-col text-gray-600   border-cyan-300  ml-12 mt-12   shadow-xl rounded  '>
          <span className="text-[2rem]">SPDF</span>
          <span className="font-bold">Block</span>
          <span className="font-bold">{MaxSize || TabSize || size.width<550?<>Click n Click</>:<>Drag n Drop</>}  Game</span>
        </div>
      </GameLink>
      </div>
      <div  className={`${MaxSize?"w-48 h-48 ml-12 ":""} mb-24`}>
      <GameLink href="/Games/TableTrend">
      <div className='w-48 h-48 border-2 bg-[#e6f7ff]  flex justify-center items-center flex-col text-gray-600   border-cyan-300  ml-12 mt-12   shadow-xl rounded  '>
          <span className="text-[2rem]">Periodic</span>
          <span className="font-bold">Table Trend</span>
          <span className="font-bold">{MaxSize || TabSize || size.width<550?<>Click n Click</>:<>Drag n Drop</>}  Game</span>
        </div>
      </GameLink>
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

