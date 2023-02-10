import { useAppContext } from "../UseContext"




  
const Indicator = () => {
  const context=useAppContext()
  const {state}=context
    const {isotopes}=state.PropElement
    return(
      <div className={`${state.status?"hidden":""} text-xs inline-flex flex-wrap w-full h-full  -ml-[1.9rem]`}>
        <div className="inline-flex h-full w-[45%] absolute border  border-[0.2rem] border-cyan-700">
        <span className=" rotate-90 absolute flex flex-col mt-[2.4rem] -ml-[1rem]"> <span className="h-4  font-bold text-[#1a0000]">Alkaline metal</span><span className="inline-flex h-[1.5rem]  ">
            <div className="bg-[#e60000] ml-1 w-8 flex flex-col font-bold text-[#1a0000]">
            <span className="text-center">S</span><span className="text-[0.4rem] text-center -mt-[0.2rem]">solid</span>
            </div><div className="bg-[#ffcccc]  border-solid border-2 rounded border-[#330000] ml-1 w-8 text-[#b30000] flex flex-col font-bold">
            <span className="text-center">L</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">liquid</span>
                </div><div className="bg-[#ffcccc] ml-1 w-8 text-[#b30000] flex flex-col font-bold">
                <span className="text-center">G</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">Gas</span>
                </div>
                </span>
        </span>
        <span className="  rotate-90 absolute flex flex-col ml-[1.5rem] mt-[2.4rem] font-bold text-[#00334d]"> <span className="h-4">Alkaline earth metal</span><span className="inline-flex h-[1.5rem]  ">
           <div className="bg-[#1ab2ff] ml-1 w-8 flex flex-col font-bold text-[#00334d]">
             <span className="text-center">S</span><span className="text-[0.4rem] text-center -mt-[0.2rem]">solid</span>
            </div>
            <div className="bg-[#cceeff]  border-solid border-2 rounded border-[#00334d] ml-1 w-8 text-[#00334d] flex flex-col font-bold">
              <span className="text-center">L</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">liquid</span>
            </div>
            <div className="bg-[#cceeff] ml-1 w-8 text-[#00334d] flex flex-col font-bold">
              <span className="text-center">G</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">Gas</span>
            </div>
            
            </span>
        </span>
        <span className=" rotate-90 absolute flex flex-col ml-[4.5rem] mt-[2.4rem]"> <span className="h-4 font-bold text-[#003300]">Transition  metal</span><span className="inline-flex h-[1.5rem]  ">
            <div className="bg-[#4dff4d]  ml-1 w-8 flex flex-col font-bold text-[#003300]">
             <span className="text-center">S</span><span className="text-[0.4rem] text-center -mt-[0.2rem]">solid</span>
            </div>
            <div className="bg-[#b3ffb3]  border-solid border-2 rounded border-[#003300] ml-1 w-8 text-[#003300] flex flex-col font-bold">
              <span className="text-center">L</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">liquid</span>
            </div>
            <div className="bg-[#b3ffb3]  ml-1 w-8 text-[#003300] flex flex-col font-bold">
              <span className="text-center">G</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">Gas</span>
            </div>
        </span>
        </span>
        <span className=" rotate-90 absolute flex flex-col ml-[6.8rem] mt-2 mt-[2.6rem] font-bold text-[#1a0033]"> <span className="h-4">  Post-transition metal</span><span className="inline-flex h-[1.5rem]  ">
        <div className="bg-[#a94dff]  ml-1 w-8 flex flex-col font-bold text-[#1a0033]">
             <span className="text-center">S</span><span className="text-[0.4rem] text-center -mt-[0.2rem]">solid</span>
            </div>
            <div className="bg-[#e6ccff]  border-solid border-2 rounded border-[#1a0033] ml-1 w-8 text-[#1a0033] flex flex-col font-bold">
              <span className="text-center">L</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">liquid</span>
            </div>
            <div className="bg-[#e6ccff]  ml-1 w-8 text-[#1a0033] flex flex-col font-bold">
              <span className="text-center">G</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">Gas</span>
            </div>
            </span>
        </span>
        <span className=" rotate-90 absolute flex flex-col ml-[9.8rem] mt-[2.4rem] font-bold text-[#330014]"> <span className="h-4">Actinide</span><span className="inline-flex h-[1.5rem]  ">
        <div className="bg-[#ff4d94]  ml-1 w-8 flex flex-col font-bold text-[#330014]">
             <span className="text-center">S</span><span className="text-[0.4rem] text-center -mt-[0.2rem]">solid</span>
            </div>
            <div className="bg-[#ffcce0]   border-solid border-2 rounded border-[#330014] ml-1 w-8 text-[#330014] flex flex-col font-bold">
              <span className="text-center">L</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">liquid</span>
            </div>
            <div className="bg-[#ffcce0]   ml-1 w-8 text-[#330014] flex flex-col font-bold">
              <span className="text-center">G</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">Gas</span>
            </div>
            </span>
        </span>
        <span className=" rotate-90 absolute flex flex-col ml-[12.6rem] mt-[2.4rem] font-bold text-[#2e2e1f]"> <span className="h-4">Lanthanide</span><span className="inline-flex h-[1.5rem]  ">
        <div className="bg-[#a2a276]  ml-1 w-8 flex flex-col font-bold text-[#2e2e1f]">
             <span className="text-center">S</span><span className="text-[0.4rem] text-center -mt-[0.2rem]">solid</span>
            </div>
            <div className="bg-[#e0e0d1]   border-solid border-2 rounded border-[#2e2e1f] ml-1 w-8 text-[#2e2e1f] flex flex-col font-bold">
              <span className="text-center">L</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">liquid</span>
            </div>
            <div className="bg-[#e0e0d1]   ml-1 w-8 text-[#2e2e1f] flex flex-col font-bold">
              <span className="text-center">G</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">Gas</span>
            </div>
            </span>
        </span>
        </div>
        <span className=" bg-gray-200 rotate-90 absolute flex flex-col ml-[16.3rem] mt-[2.4rem]"> <span className="h-4 text-[#003333] font-bold">Metalloid</span><span className="inline-flex h-[1.5rem]  ">
        <div className="bg-[#4dffff] ml-1 w-8 flex flex-col font-bold text-[#003333]">
             <span className="text-center">S</span><span className="text-[0.4rem] text-center -mt-[0.2rem]">solid</span>
            </div>
            <div className="bg-[#ccffff]   border-solid border-2 rounded border-[#003333] ml-1 w-8 text-[#003333] flex flex-col font-bold">
              <span className="text-center">L</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">liquid</span>
            </div>
            <div className="bg-[#ccffff]   ml-1 w-8 text-[#003333] flex flex-col font-bold">
              <span className="text-center">G</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">Gas</span>
            </div>
            </span>
        </span>
        <div className="inline-flex border  border-[0.2rem] border-cyan-700 h-full w-[23%] absolute ml-[21.5rem]">
        <span className=" bg-gray-200 rotate-90 absolute flex flex-col -ml-[1.5rem] mt-[2.4rem]"> <span className="h-4 font-bold text-[#330033]">Other non metals</span><span className="inline-flex h-[1.5rem]  ">
        <div className="bg-[#ff00ff] ml-1 w-8 flex flex-col font-bold text-[#330033]">
             <span className="text-center">S</span><span className="text-[0.4rem] text-center -mt-[0.2rem]">solid</span>
            </div>
            <div className="bg-[#ffb3ff]   border-solid border-2 rounded border-[#330033] ml-1 w-8 text-[#330033] flex flex-col font-bold">
              <span className="text-center">L</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">liquid</span>
            </div>
            <div className="bg-[#ffb3ff]   ml-1 w-8 text-[#330033] flex flex-col font-bold">
              <span className="text-center">G</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">Gas</span>
            </div>
            </span>
        </span>
        <span className=" bg-gray-200 rotate-90 absolute flex flex-col ml-[1.3rem] mt-[2.4rem]"> <span className="h-4 font-bold text-[#000033]">Halogen</span><span className="inline-flex h-[1.5rem]  ">
        <div className="bg-[#4d4dff] ml-1 w-8 flex flex-col font-bold text-[#000033]">
             <span className="text-center">S</span><span className="text-[0.4rem] text-center -mt-[0.2rem]">solid</span>
            </div>
            <div className="bg-[#b3b3ff]   border-solid border-2 rounded border-[#330033] ml-1 w-8 text-[#000033] flex flex-col font-bold">
              <span className="text-center">L</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">liquid</span>
            </div>
            <div className="bg-[#b3b3ff]   ml-1 w-8 text-[#000033] flex flex-col font-bold">
              <span className="text-center">G</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">Gas</span>
            </div>
            </span>
        </span>
        <span className=" bg-gray-200 rotate-90 absolute flex flex-col ml-[4.1rem] mt-[2.4rem]"> <span className="h-4 font-bold text-[#331a00]">Noble gas</span><span className="inline-flex h-[1.5rem]  ">
        <div className="bg-[#ff9c33] ml-1 w-8 flex flex-col font-bold text-[#331a00]">
             <span className="text-center">S</span><span className="text-[0.4rem] text-center -mt-[0.2rem]">solid</span>
            </div>
            <div className="bg-[#ffd9b3]   border-solid border-2 rounded border-[#331a00] ml-1 w-8 text-[#331a00] flex flex-col font-bold">
              <span className="text-center">L</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">liquid</span>
            </div>
            <div className="bg-[#ffd9b3]   ml-1 w-8 text-[#331a00] flex flex-col font-bold">
              <span className="text-center">G</span><span className="text-[0.4rem] text-center -mt-[0.3rem]">Gas</span>
            </div>
            </span>
        </span>
        </div>
        <span className="absolute mt-[7.4rem] ml-[7.5rem] bg-gray-200 font-bold">Metals</span>
         <span className="absolute mt-[7.4rem]  ml-[24.5rem] bg-gray-200 font-bold">Non Metals</span>
         <span className="absolute ml-[31rem] mt-[1rem]">Solid</span>
         <span className="absolute ml-[31rem] mt-[3rem]">Liquid</span>
         <span className="absolute ml-[31rem] mt-[5rem]">Gas</span>
      </div>
    )
  
}

export default Indicator