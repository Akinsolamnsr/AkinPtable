import { useEffect } from "react"
import useSound from 'use-sound'
import { useAppContext } from "../../UseContext"


export default function Sound(){
    const context=useAppContext()
    const {dispatch,state}=context
   
    function refreshPage() {
        window.location.reload(false);
      }
    return(
        <button className="border-2 border-cyan-300 text-whit p-1 pl-4 pr-4 rounded-full mt-4 ml-[35%] w-[100%] bg-white relative z-5 font-bold" onClick={()=>{dispatch({type:"MODAL",payload:false});refreshPage()}}>
            Close
        </button>
    )
}