import { signIn,signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import useSWR from "swr"
import ScoreData from "./scoreData"


export default function ScoreBoard(prop){
  const router=  useRouter()
        const { data, error } = useSWR('/api/Users',(datum)=>fetch(datum).then((res) => res.json()))
       
        const size =useWindowSize();
        const MaxSize=(size.height/size.width)<0.75 && size.width<1025
         const marg=size.width<1300?true:false
        const Wdth=size.width>500 && size.height>1000

    return(
        <div className="w-full h-full flex flex-col">
       	<button  className={`${MaxSize?"text-[0.7rem]":"text-[1rem]"}  bg-cyan-700 text-cyan-200 border-4 border-cyan-200`}   onClick={() => signIn("google", { callbackUrl: `http://localhost:3000${router.route}` })} >ENTER SCORE BOARD GAME</button>
        {data?<ScoreData {...data}  />:<div></div>}
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