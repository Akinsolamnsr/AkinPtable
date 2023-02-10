import { useAppContext } from '../UseContext';
import MeltList from "./LstBatch/ElemMelt"
import BoilList from "./LstBatch/BoilList"
import IonList from "./LstBatch/IonList"
import NegList from "./LstBatch/NegList"
import AfiList from "./LstBatch/AfinityList"
import CovList from "./LstBatch/covList"
import VanList from "./LstBatch/Vandal"
import EmpList from "./LstBatch/EmpriLisit"
import ElementList from "./LstBatch/Elements"
const ListPage = () => {

    const context=useAppContext()
    const {state}=context
    const Data=state.data
    const Objct=Object.entries(state.data)
    const Arr=Objct.map(x=>x[1])
    

       if(state.elemrntProp==="Melting"){
        return(
            <div className='w-full h-full mt-8'>
             <MeltList {...{data:Arr}} />
            </div>
        )
       }

       else if(state.elemrntProp==="Boiling"){
        return(
            <div className='w-full h-full mt-8'>
             <BoilList {...{data:Arr}} />
            </div>
        )
       }
       else if(state.elemrntProp==="Ionization"){
        return(
            <div className='w-full h-full mt-8'>
            <IonList {...{data:Arr}} />
            </div>
        )
       }

       else if(state.elemrntProp==="Negativity"){
        return(
            <div className='w-full h-full mt-8'>
            <NegList {...{data:Arr}} />
            </div>
        )
       }
       else if(state.elemrntProp==="Afinity"){
        return(
            <div className='w-full h-full mt-8'>
              <AfiList {...{data:Arr}} />
            </div>
        )
       }
       else if(state.elemrntProp==="Covalent"){
        return(
            <div className='w-full h-full mt-8'>
              <CovList {...{data:Arr}} />
            </div>
        )
       }

       else if(state.elemrntProp==="Wall"){
        return(
            <div className='w-full h-full mt-8'>
             <VanList {...{data:Arr}} />
            </div>
        )
       }
       else if(state.elemrntProp==="Emprical"){
        return(
            <div className='w-full h-full mt-8'>
             <EmpList {...{data:Arr}} />
            </div>
        )
       }
  else{
    return(
        <div className='w-full h-full mt-8'>
        <ElementList {...{data:Arr}} />
       </div>
    )
  }
         
}

export default ListPage