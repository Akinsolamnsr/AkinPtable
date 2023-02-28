import type { NextPage } from 'next'
import { useEffect } from 'react'
import useSWR from 'swr'
import Loading from "../components/Loading"
import DataFile3 from '../components/PageThree/FilePage'
import { useRouter } from "next/router"
import AppSize from '../components/Pageone/ScreenDim'
import WrapDiv from '../components/PageThree/WrapDiv'

const   Games: NextPage = () => {
  const { data, error } = useSWR('/api/dataFile',(datum)=>fetch(datum).then((res) => res.json()))
  if(data){
   
   return (
     <div className=' w-screen h-screen overflow-hidden '>
     <DataFile3 {...data} />
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


export default Games
