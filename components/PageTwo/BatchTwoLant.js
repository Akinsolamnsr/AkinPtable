import { useAppContext } from "../UseContext"
import Boil from "./Element/Boiiling"
import Melt from "./Element/Melting"
import Ionizations from "./Element/Ionization"
import Afinity from "./Element/Afinity"
import Negativity from "./Element/Negativity"
import Covalent from "./Element/covalent"
import Emprical from "./Element/Emprical"
import Wall from "./Element/Wall"
import ElementsProp from "./Element/Element"


const BatchTwoLant = (prop) => {
    const context=useAppContext()
    const {state}=context
   const {melting,boiling}=prop.Physical
   const {name,symbol,number}=prop.General
   const {Ionization,afinity,covalentRadius,negativity,radius,vandalForces}=prop.Reactive
    

       if(state.elemrntProp==="Melting"){
        return(
            <div>
        <Melt {...{melting,name,symbol}}/>
            </div>
        )
       }

       else if(state.elemrntProp==="Boiling"){
        return(
            <div>
    <Boil {...{boiling,name,symbol}}/>
            </div>
        )
       }
       else if(state.elemrntProp==="Ionization"){
        return(
            <div>
         <Ionizations {...{Ionization,name,symbol}} />
            </div>
        )
       }

       else if(state.elemrntProp==="Negativity"){
        return(
            <div>
            <Negativity {...{negativity,name,symbol}} />
            </div>
        )
       }
       else if(state.elemrntProp==="Afinity"){
        return(
            <div>
               <Afinity {...{afinity,name,symbol}} />
            </div>
        )
       }
       else if(state.elemrntProp==="Covalent"){
        return(
            <div>
              <Covalent {...{covalentRadius,name,symbol}} />
            </div>
        )
       }

       else if(state.elemrntProp==="Wall"){
        return(
            <div>
             <Wall {...{vandalForces,name,symbol}} />
            </div>
        )
       }
       else if(state.elemrntProp==="Emprical"){
        return(
            <div>
             <Emprical {...{radius,name,symbol}} />
            </div>
        )
       }
  else{
    return(
        <div>
          <ElementsProp {...{number,symbol}} />
        </div>
    )
  }

}


export default BatchTwoLant