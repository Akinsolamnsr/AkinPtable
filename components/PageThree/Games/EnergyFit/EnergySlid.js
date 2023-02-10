import { useEffect, useState } from "react"
import { useAppContext } from "../../../UseContext"
import EnergyDragDnd from "./EnergyDrag"


export default function EnergySlide({idn}){
    const context=useAppContext()
    const {dispatch,state}=context
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000

const spdf=[["1s¹","1s","1s1"],["1s²","1s","1s2"],["2s¹","2s","2s1"],["2s²","2s","2s2"],["2p¹","2p","2p1"],["2p²","2p","2p2"],["2p³","2p","2p3"],["2p⁴","2p","2p4"],["2p⁵","2p","2p5"],["2p⁶","2p","2p6"],
["3s¹","3s","3s1"],["3s²","3s","3s2"],["3p¹","3p","3p1"],["3p²","3p","3p2"],["3p³","3p","3p3"],["3p⁴","3p","3p4"],["3p⁵","3p","3p5"],["3p⁶","3p","3p6"],
["3d¹","3d","3d1"],["3d²","3d","3d2"],["3d³","3d","3d3"],["3d⁴","3d","3d4"],["3d⁵","3d","3d5"],["3d⁶","3d","3d6"],["3d⁷","3d","3d7"],["3d⁸","3d","3d8"],["3d⁹","3d","3d9"],["3d¹⁰","3d","3d10"],
["4s¹","4s","4s1"],["4s²","4s","4s2"],["4p¹","4p","4p1"],["4p²","4p","4p2"],["4p³","4p","4p3"],["4p⁴","4p","4p4"],["4p⁵","4p","4p5"],["4p⁶","4p","4p6"],
["4d¹","4d","4d1"],["4d²","4d","4d2"],["4d³","4d","4d3"],["4d⁴","4d","4d4"],["4d⁵","4d","4d5"],["4d⁶","4d","4d6"],["4d⁷","4d","4d7"],["4d⁸","4d","4d8"],["4d⁹","4d","4d9"],["4d¹⁰","4d","4d10"],
["4f¹","4f","4f1"],["4f²","4f","4f2"],["4f³","4f","4f3"],["4f⁴","4f","4f4"],["4f⁵","4f","4f5"],["4f⁶","4f","4f6"],["4f⁷","4f","4f7"],["4f⁸","4f","4f8"],["4f⁹","4f","4f9"],["4f¹⁰","4f","4f10"],["4f¹¹","4f","4f11"],["4f¹²","4f","4f12"],["4f¹³","4f","4f13"],["4f¹⁴","4f","4f14"],
["5s¹","5s","5s1"],["5s²","5s","5s2"],["5p¹","5p","5p1"],["5p²","5p","5p2"],["5p³","5p","5p3"],["5p⁴","5p","5p4"],["5p⁵","5p","5p5"],["5p⁶","5p","5p6"],
["5d¹","5d","5d1"],["5d²","5d","5d2"],["5d³","5d","5d3"],["5d⁴","5d","5d4"],["5d⁵","5d","5d5"],["5d⁶","5d","5d6"],["5d⁷","5d","5d7"],["5d⁸","5d","5d8"],["5d⁹","5d","5d9"],["5d¹⁰","5d","5d10"],
["5f¹","5f","5f1"],["5f²","5f","5f2"],["5f³","5f","5f3"],["5f⁴","5f","5f4"],["5f⁵","5f","5f5"],["5f⁶","5f","5f6"],["5f⁷","5f","5f7"],["5f⁸","5f","5f8"],["5f⁹","5f","5f9"],["5f¹⁰","5f","5f10"],["5f¹¹","5f","5f11"],["5f¹²","5f","5f12"],["5f¹³","5f","5f13"],["5f¹⁴","5f","5f14"],
["6s¹","6s","6s1"],["6s²","6s","6s2"],["6p¹","6p","6p1"],["6p²","6p","6p2"],["6p³","6p","6p3"],["6p⁴","6p","6p4"],["6p⁵","6p","6p5"],["6p⁶","6p","6p6"],
["6d¹","6d","6d1"],["6d²","6d","6d2"],["6d³","6d","6d3"],["6d⁴","6d","6d4"],["6d⁵","6d","6d5"],["6d⁶","6d","6d6"],["6d⁷","6d","6d7"],["6d⁸","6d","6d8"],["6d⁹","6d","6d9"],["6d¹⁰","6d","6d10"],
["7s¹","7s","7s1"],["7s²","7s","7s2"],["7p¹","7p","7p1"],["7p²","7p","7p2"],["7p³","7p","7p3"],["7p⁴","7p","7p4"],["7p⁵","7p","7p5"],["7p⁶","7p","7p6"]
]
return(
    <div className="h-full  w-full">
    {spdf.map((x,i)=>{
        
        return(
            <div key={`SpdfSlide${i}`}  className={`${MaxSize?"w-[1.35rem] ml-1 text-[0.8rem] border-2":"w-[2.7rem] ml-1 text-[1.2rem] font-bold border-4"}    text-center  h-full  border-pink-300 shadow-lg text-black bg-white inline-block ${x[1]===state.spdfConfig?"":"hidden"}`}><EnergyDragDnd data={x[0]}  /></div>
        )
    })}
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