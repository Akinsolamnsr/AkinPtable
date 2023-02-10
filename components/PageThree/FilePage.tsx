import { NextPage } from 'next';
import { useEffect, useMemo } from 'react';
import useSWR from 'swr'
import Screen from "./Screen"
import { useAppContext } from '../UseContext';
import WrapDiv from "./WrapDiv"  
import Loading from '../Loading';
const DataFile3:NextPage = (prop) => {
     const context=useAppContext()
     const {dispatch,state}=context
     useEffect(()=>dispatch({
          type:"DATA",
          payload:prop
       }),[])
       if(Object.keys(state.data).length !== 0){
          
          return(
               <WrapDiv>
             <Screen />
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

export default DataFile3