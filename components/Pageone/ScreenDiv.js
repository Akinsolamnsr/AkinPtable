import { NextPage } from 'next';
import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr'
import { useAppContext } from '../UseContext';
import WrapDiv from "../PageThree/WrapDiv"  
import Loading from '../Loading';
import Ptable from './TableBox';
import PropBox from './PropBox';
const ScreenDiv = (prop) => {
     const context=useAppContext()
     const {dispatch,state}=context
     const size = useWindowSize();
     const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000

     useEffect(()=>dispatch({
          type:"DATA",
          payload:prop
       }),[])
       if(Object.keys(state.data).length !== 0){
          
          return(
              <WrapDiv>
              
              </WrapDiv>
                 )
       }

       else{
          return(
            <div className='flex w-screen h-screen flex justify-center items-center bg-blue-100'>
            <Loading />
            </div>
                 )
       }
         
}

export default ScreenDiv


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