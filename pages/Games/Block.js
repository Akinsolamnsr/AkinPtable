import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import NavWrap2 from '../../components/PageThree/NavWrap2'
import BlockFit from '../../components/PageThree/Games/BlockFit'
import { useEffect, useState } from 'react'
import ElementFitMobile from '../../components/PageThree/Games/ElemFit/ElemenentFitMobile/ElementMob'

export default function Block(){
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
     const marg=size.width<1300?true:false
    const Wdth=size.width>500 && size.height>1000
    
  if(MaxSize){
    return (
      <NavWrap2>
        <DndProvider backend={HTML5Backend} >
        <ElementFitMobile />
        </DndProvider>
      </NavWrap2>
  )
  }
  else{
    return (
      <NavWrap2>
        <DndProvider backend={HTML5Backend} >
         <BlockFit />
        </DndProvider>
      </NavWrap2>
  )
  }
}  


function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
             height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }