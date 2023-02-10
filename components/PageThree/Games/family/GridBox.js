
import { useEffect, useState } from "react";
import Famdrop from "./Famdrop"



export default function GridBox(){
  const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
    const grpfm=[['Other non metals'], ['Noble gas'], ['Alkaline metal'], ['Alkaline earth metal'],
     ['Metalloid'], ['Halogen'], ['Post-transition metal',"Post-Transition Metal"], 
     ['Transition metal',"Transition Metal","Transitional Metal","Post Transitional Metal"],["Actinide"],["Lanthanide"]]

    return(
     <div className="inline-flex">
     <div className="inline-flex flex-col">  
     <>
          <div className={`${MaxSize?"w-[7.5rem] h-[3rem]":"w-[15rem] h-[9rem]"}  bg-white  mt-1 shadow-lg`}> 
             <Famdrop data={grpfm[2]}  fam="Alkaline metal" />
            </div> 
            <div className={` bg-white mt-1 shadow-lg ${MaxSize?"w-[7.5rem] h-[3rem]":"w-[15rem] h-[9rem]"}`}> 
            <Famdrop data={grpfm[3]} fam="Alkaline earth metal" />
            </div> 
            <div className={` bg-white  mt-1 shadow-lg ${MaxSize?"w-[7.5rem] h-[7rem]":"w-[15rem] h-[14rem]"}`}> 
             <Famdrop data={grpfm[8]} fam="Actinide" />
            </div> 
          </> 
     </div>

     <div className="inline-flex flex-col">
     <>
            <div className={`  bg-white mt-1 ml-1 shadow-lg ${MaxSize?"w-[7.5rem] h-[3.5rem]":"w-[15rem] h-[7rem]"}`}> 
            <Famdrop data={grpfm[5]} fam="Halogen" />
              </div> 
              <div className={` bg-white mt-1 ml-1 shadow-lg ${MaxSize?"w-[7.5rem] h-[7.5rem]":"w-[15rem] h-[15rem]"}`}> 
              <Famdrop data={grpfm[9]} fam="Lanthanide" />
              </div> 
              <div className={` bg-white mt-1 ml-1 shadow-lg ${MaxSize?"w-[7.5rem] h-[3rem]":"w-[15rem] h-[9rem]"}`}> 
              <Famdrop data={grpfm[4]} fam="Metalloid" />
              </div> 
            </>   
     </div>
     
     <div className="inline-flex flex-col">
     <>
          <div className={` bg-white mt-1 ml-1 shadow-lg ${MaxSize?"w-[7rem] h-[3rem]":"w-[15rem] h-[9rem]"}`}> 
          <Famdrop data={grpfm[1]} fam="Noble gas" />
            </div> 
            <div className={` bg-white mt-1 ml-1 shadow-lg ${MaxSize?"w-[7rem] h-[3rem]":"w-[15rem] h-[9rem]"}`}> 
            <Famdrop data={grpfm[0]} fam="Other non metals" />
            </div>  
            <div className={` bg-white mt-1 ml-1 shadow-lg ${MaxSize?"w-[7rem] h-[3rem]":"w-[15rem] h-[9rem]"}`}> 
            <Famdrop data={grpfm[6]} fam="Post-Transition Metal" />
            </div> 
          </> 
     </div>

     <div className="inline-flex flex-col">
     <div className={` bg-white mt-1 ml-1 shadow-xl ${MaxSize?"w-[7rem] h-[13rem]":"w-[15rem] h-[26rem]"}`}> 
     <Famdrop data={grpfm[7]} fam="Transition Metal" />
            </div>      
     </div>  
     </div>
    )
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