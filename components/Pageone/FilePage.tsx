import { NextPage } from 'next';
import { useEffect, useMemo } from 'react';
import useSWR from 'swr'
import AppSize from "./ScreenDim"
import { useAppContext } from '../UseContext';
import Loading from '../Loading';
import ScreenDiv from './ScreenDiv';
  
const DataFile:NextPage = (prop) => {
     const context=useAppContext()
     const {dispatch,state}=context
     useEffect(()=>{
        const disp=()=>{
          dispatch({
               type:"DATA",
               payload:prop
            })
        }
        disp()
     })
       if(Object.keys(state.data).length !== 0){
          
          return(
               <>
             <ScreenDiv />
                 </>
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

export default DataFile