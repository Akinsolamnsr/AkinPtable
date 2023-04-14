import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAppContext } from '../UseContext';

import gamePic from "../../public/images/Game.svg"
import homePic from "../../public/images/Atom.svg"
import PropPic from "../../public/images/PropNew.svg"
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function WrapDiv({children}) {
  const router = useRouter();
   const {status} =useSession()
  const context=useAppContext()
  const {dispatch,state}=context
  const size = useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000
  console.log(router.route)
   function Resize(){
      const Stat=state.status?false:true
    dispatch({
      type:"STATUS",
      payload:Stat
   })
   }
   useEffect(()=>{
    dispatch({
      type:"MARGIN",
      payload:marg
   })
   
   },[marg])
  return (
    <div className={` flex flex-col w-full `}>
      <div   className={` w-full  h-12  flex shadow-lg justify-evenly`}>
      <div className=''>
          <span className='text-[2rem] text-white font-bold bg-cyan-500 '>A</span><span className='text-cyan-500 font-bold'>tables<span className='text-[0.6rem] mr-4 text-pink-700'>Live</span></span>
        </div>
        <div className='w-2/3 sm:w-1/3 flex justify-between h-full  '>
        
           <span className='hover:text-cyan-500 flex items-center'>
           {size.width<550?(<><Link href="/"><a><Image src={homePic} alt="pics" width="25" heigth="25" /></a></Link></>):(<><Image src={homePic} alt="pics" width="25" heigth="25" /><span className={` h-full pl-[1.5rem] pr-[1.2rem] -ml-[1.5rem] flex items-center   ${router.pathname == "/home" ? "border-b-4 border-cyan-700 bg-gray-100" : ""}`}><Link href="/"> Home</Link></span></>)}
           </span>
          <span className='hover:text-cyan-500 flex items-center'>
          {size.width<550?(<><Link href="/Properties"><a><Image src={PropPic} alt="pics" width="25" heigth="25" /></a></Link></>):(<><Image src={PropPic} alt="pics" width="25" heigth="25" /><span className={`h-full  flex items-center pl-[1.5rem] pr-[1.2rem] -ml-[1.5rem] ${router.pathname == "/Properties" ? "border-b-4 border-cyan-700 bg-gray-100" : ""}`}><Link href="/Properties">Properties</Link></span></>)}
           </span>
           <span className='hover:text-cyan-500 flex items-center'>
           {size.width<550?(<><Link href="/Games"><a><Image src={gamePic} alt="pics" width="25" heigth="25" /></a></Link></>):(<><Image src={gamePic} alt="pics" width="25" heigth="25" /><span className={`h-full  flex items-center pl-[1.5rem] pr-[1.2rem] -ml-[1.5rem] ${router.pathname == "/Games" ? "border-b-4 border-cyan-700 bg-gray-100" : ""}`}><Link href="/Games">Games</Link></span></>)}
           </span>
           <span><button className={`h-12 bg-cyan-700 pl-4 pr-4 text-[0.8rem] font-bold text-white ${router.route==="/"?"":"hidden" }`} onClick={Resize}>{state.status?<span>{size.width<550?<>F</>:<>Full Table</>}</span>:<span>{size.width<550?<>20</>:<>First 20 Element</>}</span>}</button></span>
        </div>
        <span className='w-12'></span>
      </div>

      <div>
      {children}
      </div>


    </div>
  )
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