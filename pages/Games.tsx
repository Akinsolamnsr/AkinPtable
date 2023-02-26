import type { NextPage } from 'next'
import { useEffect } from 'react'
import useSWR from 'swr'
import Loading from "../components/Loading"
import DataFile3 from '../components/PageThree/FilePage'
import { useRouter } from "next/router"
const   Games: NextPage = () => {

  const { data, error } = useSWR('/api/dataFile',(datum)=>fetch(datum).then((res) => res.json()))
 
  if(error){
    return(
      <></>
    )
  }
 else if(data){
 
  return (
    <>
      <DataFile3 {...data} />
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

export default Games
