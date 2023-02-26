import type { NextPage } from 'next'
import { useEffect } from 'react'
import useSWR from 'swr'
import DataTwo from '../components/PageTwo/TwoFile'
import { useRouter } from "next/router"
const   Properties: NextPage = () => {
  const router=  useRouter()
  const { data, error } = useSWR('/api/dataFile',(datum)=>fetch(datum).then((res) => res.json()))
  useEffect(()=>{
      
    if(router.route==="/Games"){
      window.location.reload();  
    }
    
    
  },[])
 if(data){
  
  return (
    <div className=' w-screen h-screen overflow-hidden'>
      <DataTwo {...data} />
    </div>
  )
 }
 else{
  return(
    <>
    
    </>
  )
 }
}

export default Properties
