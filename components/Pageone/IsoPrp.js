import { useAppContext } from "../UseContext"



  
const Isoprop = () => {
  const context=useAppContext()
  const {state}=context
  if(state.PropElement){  
    const {isotopes}=state.PropElement
    
    
    return(
    
    <div className='inline-flex flex-col w-full'>
    
    <div className='inline-flex flex-col'>
        <div>Isotopes</div>
        <div>Na23,Na26</div>
    </div>
    </div>
  )}
  else{
    return(
      <>
      
      </>
    )
  }
}

export default Isoprop