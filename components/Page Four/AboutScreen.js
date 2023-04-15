import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import gamePic from "../../public/images/Game.svg"
import homePic from "../../public/images/Atom.svg"
import PropPic from "../../public/images/PropNew.svg"
import AboutPic from "../../public/images/pages-svgrepo-com.svg"
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useAppContext } from '../UseContext';

export default function AboutAppSizeScreen() {
  const router = useRouter();
  const context=useAppContext()
  const {dispatch,state}=context
  const size = useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
 
  const Wdth=size.width>500 && size.height>1000
  
  return (
    <div className={`flex-col flex`}>
      <div   className={`   h-12   w-full flex shadow-lg justify-evenly`}>
        <div className=''>
          <span className='text-[2rem] text-white font-bold bg-cyan-500 '>A</span><span className='text-cyan-500 font-bold'>table</span>
        </div>
        <div className='w-2/3 sm:w-1/3 flex justify-between h-full '>
        
           <span className='hover:text-cyan-500 flex items-center'>
           {size.width<550?(<><Link href="/"><a><Image src={homePic} alt="pics" width="25" heigth="25" /></a></Link></>):(<><Image src={homePic} alt="pics" width="25" heigth="25" /><span className={` h-full pl-[1.5rem] pr-[1.2rem] -ml-[1.5rem] flex items-center   ${router.pathname == "/" ? "border-b-4 border-cyan-700 bg-gray-100" : ""}`}><Link href="/"> Home</Link></span></>)}
           </span>
          <span className='hover:text-cyan-500 flex items-center'>
          {size.width<550?(<><Link href="/Properties"><a><Image src={PropPic} alt="pics" width="25" heigth="25" /></a></Link></>):(<><Image src={PropPic} alt="pics" width="25" heigth="25" /><span className={`h-full  flex items-center pl-[1.5rem] pr-[1.2rem] -ml-[1.5rem] ${router.pathname == "/Properties" ? "border-b-4 border-cyan-700 bg-gray-100" : ""}`}><Link href="/Properties">Properties</Link></span></>)}
           </span>
           <span className='hover:text-cyan-500 flex items-center'>
           {size.width<550?(<><Link href="/Games"><a><Image src={gamePic} alt="pics" width="25" heigth="25" /></a></Link></>):(<><Image src={gamePic} alt="pics" width="25" heigth="25" /><span className={`h-full  flex items-center pl-[1.5rem] pr-[1.2rem] -ml-[1.5rem] ${router.pathname == "/Games" ? "border-b-4 border-cyan-700 bg-gray-100" : ""}`}><Link href="/Games">Games</Link></span></>)}
           </span>
           <span className='hover:text-cyan-500 flex items-center'>
           {size.width<550?(<><Link href="/About"><a><Image src={AboutPic} alt="pics" width="25" heigth="25" /></a></Link></>):(<><Image src={AboutPic} alt="pics" width="25" heigth="25" /><span className={`h-full  flex items-center pl-[1.5rem] pr-[1.2rem] -ml-[1.5rem] ${router.pathname == "/About" ? "border-b-4 border-cyan-700 bg-gray-100" : ""}`}><Link href="/About">About</Link></span></>)}
           </span>
    
        </div>
        <span className='w-12'></span>
      </div>
      <div className={`text-[5rem]`}>
      COMMING SOON
        </div>
    </div>
  );;''
}  

// Hook
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