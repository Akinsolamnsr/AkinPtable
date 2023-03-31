import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation'
import { useAppContext } from './UseContext';


async function sendRequest(url, { arg }) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg)
  }).then(res => res.json())
}
  
const UpdateScore = ({status,type,name}) => {
 
  const [User,setUser]=useState(false)
  const { trigger, isMutating } = useSWRMutation('/api/scoreDb', sendRequest /* options */)
  const context=useAppContext()
    const {state}=context
  const Post=async()=>{
    try {
 
  const user = await trigger({timeUpdate:state.timeUpdate,status,type,name})
  setUser(user)
} catch (error) {
  console.log(error)
}
  }
  function msToTime(s) {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
  
    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
  }
  const size =useWindowSize();
  const MaxSize=(size.height/size.width)<0.75 && size.width<1025
   const marg=size.width<1300?true:false
  const Wdth=size.width>500 && size.height>1000
  return(
    <div className={`inline-flex  w-full h-full ${MaxSize?"text-[1.7rem]":""}`}>
     {User?.success?   <div className={`${MaxSize?"":"mt-[0.9rem] mt-[0.9rem]"}  inline-flex  h-full w-full text-white font-bold border-4 bg-green-700  `}>
    {User.update?<div>Best score updated</div>:<div>Not your Best score</div>}
    </div>
      :<div className='mt-[0.9rem] inline-flex flex-col p-4 w-full h-full text-white font-bold border-4 border-cyan-300 rounded-full bg-pink-700'><div>{msToTime(state.timeUpdate)}</div>
      <button disabled={isMutating} onClick={Post} >update score</button></div>}
    </div> 
  )
}     

export default UpdateScore

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