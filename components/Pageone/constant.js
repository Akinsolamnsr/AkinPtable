import { useAppContext } from "../UseContext"

export const Abox=Array.from({length:126}, (_, i) => i + 1).map((x,i)=>i)
export const Lant=["61A","62A","63A","64A","65A","66A","67A","68A","69A","610A","611A","612A","613A","614A","615A"
,"71B" ,"72B","73B","74B","75B","76B","77B","78B","79B","710B","711B","712B","713B","714B","715B"
]

 export const Lant2=["62A","63A","64A","65A","66A","67A","68A","69A","610A","611A","612A","613A","614A","615A"
,"72A","73A","74A","75A","76A","77A","78A","79A","710A","711A","712A","713A","714A","715A"
]
export const Arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,
    14,15,16,20,21,22,23,24,25,26,27,28,
    29,38,39,40,41,42,43,44,45,46,47]  
 const Arr2=[1,2,3,4,5,6,7,8,9,10,11,12,13,
        14,15,16,20,21,22,23,24,25,26,27,28,
        29,38,39,40,41,42,43,44,45,46,47
        ] 
export const List=[7,8,9,10,11,12,13,14,15,16,20,21,22,23,24,25,26,27,28,29,38,39,40,41,42,43,44,45,46,47]
export const Section=[0,18,19,36,37,54,55,72,73,90,91,108,109]

export const Bckup=Array.from({length:126}, (_, i) => i + 1).map((x,i)=>i+56)
export const Group=Array.from({length:18}, (_, i) => i + 1).map((x,i)=>i+1)

export const Func=()=>{
    const context=useAppContext()
    const {state}=context
  const data=state.data
 
  
    const array=Abox.map((x)=>{
        const Filt=!Arr2.includes(x)
        return [Filt,x]
    })

   const ArrObj=Object.entries(data)
 
   const MapArr2=ArrObj.map((x)=>x[1])
   const FilterData=MapArr2.filter((x)=>!Lant2.includes(x.ids))
   
       array.reduce((a,b,i)=>{

        if(b[0]){
            b.push(FilterData[0])
            FilterData.splice(0,1)
            a.push(b)
            return a
        }
         else{
           b.push("")
           a.push(b)
           return a
         }
       },[])
 
    const lant=MapArr2.filter((x)=>isNaN(x.ids))
    const lant2=lant.filter((x)=>x.ids?true:false)


    return {array,lant2,data}
}