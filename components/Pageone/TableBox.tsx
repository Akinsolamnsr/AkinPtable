import { NextPage } from 'next';
import useSWR from 'swr'
import Gridtable from './Grid';

  
const Ptable:NextPage = () => {
  return(
    <div className='inline '>
     <Gridtable />
    </div>
  )
}

export default Ptable