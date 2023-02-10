import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import GridFile from './smallGrid';
import ElemFile from "./ElementProp"
import Oprop from "./OtherProp"
import Isoprop from "./IsoPrp"
import { useAppContext } from '../UseContext';
const PropBox = () => {
  const size = useWindowSize();
  const Wdth=size.width>500 && size.height>1000
  return(
    <div className={`inline-flex h-full w-full overflow-auto mr-[3rem]` }>
     <div className={` flex   ${size.width< 500?"flex-row w-[70rem]":`${Wdth?"flex-row  w-[70rem] ":"flex-col h-[60rem]  w-full"}`}`}>
        <div className='inline-flex w-[16rem]'>
          {<GridFile />}
        </div>
        <div className={`inline-flex w-[17.5rem] pl-1 pr-1 ${size.width< 500?" scale-y-[80%] -mt-[2%]":`${Wdth?" scale-y-[80%] -mt-[2%]":""}`}`}>{<ElemFile />}</div>
        <div className='inline-flex w-[17.5rem] pl-1 pr-1'><Oprop /></div>
    </div>
    </div>
  )
}

export default PropBox




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