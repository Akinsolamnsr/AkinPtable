import { useAppContext } from "../../../../UseContext";
import EnergyContainer from "./gridEnergyMob";
import EnergyContainer2 from "./gridEnergyMob2";
import EnergyContainer3 from "./gridEnergyMob3";




export default function SwitchMob(){

    const context=useAppContext()  
    const {state,dispatch}=context


    return(
       <>
       { state.moben==="Twenty"?<EnergyContainer  />:state.moben==="Forty"?<EnergyContainer2 />:<EnergyContainer3 />}
       </>
    )
}