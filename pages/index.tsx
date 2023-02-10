import type { NextPage } from 'next'
import DataFile from '../components/Pageone/FilePage'
import useSWR from 'swr'
import Loading from '../components/Loading'
const Home: NextPage = () => {
  const { data, error } = useSWR('/api/dataFile',(datum)=>fetch(datum).then((res) => res.json()))
 if(data){
  
  return (
    <div className=' w-screen h-screen overflow-hidden '>
      <DataFile {...data} />
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
