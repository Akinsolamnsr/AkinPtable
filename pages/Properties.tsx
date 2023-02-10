import type { NextPage } from 'next'
import useSWR from 'swr'
import DataTwo from '../components/PageTwo/TwoFile'
const   Properties: NextPage = () => {
  const { data, error } = useSWR('/api/dataFile',(datum)=>fetch(datum).then((res) => res.json()))
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
