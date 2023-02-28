import { NextPage } from 'next';
import useSWR from 'swr'
import Gridtable from './Grid';

  
const Ptable:NextPage = (prop) => {
  return(
    <div className='inline '>
     <Gridtable {...prop} />
    </div>
  )
}

export default Ptable