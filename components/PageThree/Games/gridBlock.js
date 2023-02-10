import { Elem,LanAct, ListElement, TwentyElement } from "../../Const"
import { useAppContext } from "../../UseContext"
import MyDropBlock2 from "./DND/DropBlock2"
import MyDropBlock from "./DND/DropBlockFit"
import React, { useEffect, useState } from "react"
import MyDropBlock3 from "./DND/DropBlock3"
import MyDropBlock4 from "./DND/DropBlock4"

export default function GridBlock(){
    
   // const [play] = useSound(sound);
    const context=useAppContext()
    const size =useWindowSize();
    const MaxSize=(size.height/size.width)<0.75 && size.width<1025
    const {state,dispatch}=context
    if(state.PeriodFlip==="Twenty"){
        return(
            <div  className={`${MaxSize?"w-[35rem]  h-[25vh]":"w-[25rem]  h-[25vh] md:w-[50rem] md:h-[50vh]"}  flex flex-wrap`}>
                       <div className="w-full ">{MaxSize?<button className={`w-full bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white  ${MaxSize?"text-[0.6rem]":""}`} onTouchStart={()=>dispatch({type:"FLIP",payload:true})} onTouchEnd={()=>dispatch({type:"FLIP",payload:false})} >check element</button>:<button className={`w-full bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white  ${MaxSize?"text-[0.6rem]":""}`} onMouseDown={()=>dispatch({type:"FLIP",payload:true})} onMouseUp={()=>dispatch({type:"FLIP",payload:false})} >check element</button>}</div>
            {TwentyElement.map((x,i)=>{
                
               if(x==0){
                return(
                    <div key={`GridBlockTwentyOne${i}`} className={`${MaxSize?"w-[4rem] h-[4rem]":"m-2 md:m-1 w-[2rem] h-[2rem] md:w-[5.5rem] md:h-[5.5rem] border border-black invisible"}`}>
                        
                    </div>
                )
               }
               else{
                return(
                    <div key={`GridBlockTwentyTwo${i}`}  className={`${MaxSize?"w-[4rem] h-[4rem]":"m-2 md:m-1 w-[2rem] h-[2rem] md:w-[5.5rem] md:h-[5.5rem]  rounded-full"}`}>
                     {<MyDropBlock data={x} />}
                    </div>
                )
               }
            })}
            </div>
                )
    } 
    
    else if(state.PeriodFlip==="Forty"){
        return(
            <div  className={`${MaxSize?"w-[26rem]  h-[25vh] scale-[60%] -ml-[13rem] relative -my-4":""}  w-[26rem]  h-[25vh] md:w-[65rem] md:h-[50vh] flex flex-wrap md:-mt-4`}>
                  <div className="w-full ">{MaxSize?<button className={`w-[98%] bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white  ${MaxSize?"text-[0.6rem]":""}`} onTouchStart={()=>dispatch({type:"FLIP",payload:true})} onTouchEnd={()=>dispatch({type:"FLIP",payload:false})} >check element</button>:<button className={`w-full bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white  ${MaxSize?"text-[0.6rem]":""}`} onMouseDown={()=>dispatch({type:"FLIP",payload:true})} onMouseUp={()=>dispatch({type:"FLIP",payload:false})} >check element</button>}</div>
            {ListElement.map((x,i)=>{
                
               if(x==0){
                return(
                    <div key={`GridBlockFortyTwo${i}`} className={`${MaxSize?"w-[1.2rem] h-[1.2rem]":""} m-[0.1rem] md:m-1 w-[1.2rem] h-[1.2rem] md:w-[3rem] md:h-[3rem] border border-black invisible`}>
                        
                    </div>
                )
               }
               else{
              
                return(
                    <div key={`GridBlocKFull${i}`} className={`${x[0]>40?"border-gray-400":"border-black "} ${MaxSize?"w-[1.2rem] h-[1.2rem] ":""} m-[0.1rem] md:m-1 w-[1.2rem] h-[1.2rem] md:w-[3rem] md:h-[3rem] border rounded-full`}>
                        {<MyDropBlock2 data={x} />}
                    </div>
                )
               }
            })}
            
            </div>
                )
    }

    else{
        return(
            <div className={`${MaxSize?"-mt-[4.4rem]":""}`}>
            <div className={`inline-flex flex-col md:-mt-12 `}>
                <div className={`${MaxSize?"scale-[50%] -ml-[13rem] ":""}  w-[65rem] h-[70vh] flex flex-wrap `}>
                <div className="w-full ">{MaxSize?<button className={`w-full bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white  ${MaxSize?"text-[0.6rem]":""}`} onTouchStart={()=>dispatch({type:"FLIP",payload:true})} onTouchEnd={()=>dispatch({type:"FLIP",payload:false})} >check element</button>:<button className={`w-full bg-cyan-700 border-2 border-cyan-300 rounded-full p-1 font-bold text-white  ${MaxSize?"text-[0.6rem]":""}`} onMouseDown={()=>dispatch({type:"FLIP",payload:true})} onMouseUp={()=>dispatch({type:"FLIP",payload:false})} >check element</button>}</div>
            {ListElement.map((x,i)=>{
                
               if(x==0){
                return(
                    <div key={`GriBlockLant${i}`} className="m-[0.1rem] md:m-1 w-[1.2rem] h-[1.2rem] md:w-[3rem] md:h-[3rem] border border-black invisible">
                        
                    </div>
                )
               }
               else{
                return(
                    <div key={`GriBlockActi${i}`} className="m-[0.1rem] md:m-1 w-[1.2rem] h-[1.2rem] md:w-[3rem] md:h-[3rem] border border-black rounded-full">
                        {<MyDropBlock3 data={x} />}
                    </div>
                   
                )
               }
            })}
            </div>

            <div className={`${MaxSize?"scale-[50%] -ml-[13rem]":""}  w-[22rem]  h-[10vh] md:w-[55rem] md:h-[20vh] flex flex-wrap  `}>
            {LanAct.map((x,i)=>{
              return(
                <div key={`GridBlockNideyOne${i}`} className="m-[0.1rem] md:m-1 w-[1.2rem] h-[1.2rem] md:w-[3rem] md:h-[3rem] border border-black rounded-full">
                     {<MyDropBlock4 data={x} />}
                </div>
              )
            })}
            </div>


            </div>
            </div>
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
/*
{
    // const [play] = useSound(sound);
     const context=useAppContext()
     const {state,dispatch}=context
     
     return(
        <div className="inline-flex h-[60vh] w-full flex-col items-end ">
         <button   onMouseDown={()=>dispatch({type:"FLIP",payload:true})} onMouseUp={()=>dispatch({type:"FLIP",payload:false})} className="bg-red-200 relative mx-[50%] ">Check</button>
         <div className="flex flex-wrap w-full h-[50vh]">
         {Elem.map((x,i)=>{
             if(!x[0]){
                 
                 return(
                     <div key={`array-${i}`} className={`${i<7 && state.PeriodFlip==="Twenty"?"w-[4rem] h-[4rem] border border-black ml-[3.5%] mt-[1%] rounded-full invisible":`${state.PeriodFlip==="Twenty"?"hidden":"w-[4.5%] h-[11%] border border-black ml-[1%] mt-[1%] rounded-full invisible"}`} `}>
                         
                     </div>
                 )
             }
             else{
                 
                 return(
                     <React.Fragment key={`array-${i}`}>
                     {<MyDropBlock data={x[1]} />}
                     </React.Fragment>
                 )
             }
            
         })}
         </div>
         <div className="flex flex-wrap w-[80%] h-[20vh]  -mr-4 mt-4">
         {LanAct.map((x,i)=>{
 
 return(
     <>
             {<MyDropBlock2 data={x} />}
         </>
 )
 })}
         </div>
        </div>
     )
 }   */