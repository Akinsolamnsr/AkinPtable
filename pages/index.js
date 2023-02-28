
import DataFile from '../components/Pageone/FilePage'
import useSWR from 'swr'
import Loading from '../components/Loading'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataTwo from '../components/PageTwo/TwoFile';
import DataFile3 from '../components/PageThree/FilePage';
import WrapDiv from '../components/PageThree/WrapDiv';
import AppSize from '../components/Pageone/ScreenDim';
import { useEffect, useState } from 'react';
import { useAppContext } from '../components/UseContext';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Ptable from '../components/Pageone/TableBox';
import PropBox from '../components/Pageone/PropBox';
const Home = () => {
  const router = useRouter();
  const {status} =useSession()
 const context=useAppContext()
 const {dispatch,state}=context

 const size = useWindowSize();
 const MaxSize=(size.height/size.width)<0.75 && size.width<1025
  const marg=size.width<1300?true:false
 const Wdth=size.width>500 && size.height>1000

  const { data, error } = useSWR('/api/dataFile',(datum)=>fetch(datum).then((res) => res.json()))
  const [check,setCheck]=useState(false)
  useEffect(()=>{
    if(data){
      dispatch({
        type:"DATA",
        payload:data
     })
     setCheck(true)
    }
  },[data])
 if(check){
  
   

  return (
    <div className=' w-screen h-screen overflow-hidden '>
    <WrapDiv>
    <div className={`  h-screen w-[90%] ml-[5%] order-1 md:order-2 flex  ${size.width< 500?"flex-col":`${Wdth?"flex-col":"flex-row"}`}`}>
      <div className={`${size.width< 500?"w-full h-[67%] overflow-auto":`${Wdth?"w-full h-[70%] overflow-auto":`${MaxSize?"w-[70%] h-full overflow-auto mb-12":`${size.width<1300?"w-[70%] h-full overflow-auto":`w-[79%] scale-[85%] -mt-[4rem] h-full  ${state.slide?"overflow-auto":""}`}`}`}`} `}><Ptable {...data} /></div>
      <div className={`${size.width< 500?"w-full h-[33%]":`${Wdth?"w-full h-[30%]":`${MaxSize?"w-[30%] h-full":`${size.width<1300?"w-[30%] h-full":"w-[25%] h-full "}`}`}`} `}><PropBox {...data} /></div> 
        </div>
    </WrapDiv>
    </div>
  )
 }
 else{
  return(
    <div className="w-full h-screen flex justify-center items-center bg-blue-100">
   <Loading />
    </div>
  )
 }
}

export default Home




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