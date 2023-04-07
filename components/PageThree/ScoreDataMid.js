import ScoreData2 from "./scoreData2"
import { useSession } from 'next-auth/react';




export default function ScoreDataMid({datum}) {

    const {data} =useSession()
    if(datum && data){
        
   return(
    <><ScoreData2 datum={datum} data={data}/></>
   )
    }
    else{
        return(

            <></>
        )
    }

}