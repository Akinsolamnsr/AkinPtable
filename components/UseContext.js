
import { createContext, useContext, useReducer } from 'react';

function user(state, action) {
  switch (action.type) {
    case "UPDATE":
      const temper=action.payload.toFixed(0)
      return { ...state, Temp:temper };
    case "PROPERTIES":
     return  {...state,dataList:action.payload}
     case "DATA":   
      return  {...state,data:action.payload}
      case "STATUS":
        return  {...state,status:action.payload}
        case "PROP":
        return  {...state,PropElement:action.payload}
        case "SLIDE":
        return  {...state,slide:action.payload}
        case "TEMP":
        return  {...state,slide:action.payload}
        case "TEMPCHANGE":
        return  {...state,temp:action.payload}
        case "MARGIN":
        return  {...state,margin:action.payload}
        case "SWITCH":
          return  {...state,switch:action.payload}
          case "ELEMENTPROP":
            return  {...state,elemrntProp:action.payload}
            case "SIGN":
              return  {...state,sign:action.payload}
              case "DROPSTATUS":
                const temp=action.payload
                state.drop.push(...temp)
                return  {...state}
                case "DROPSTATUS2":
                  
                const tempS=action.payload
                state.dropS.push(...tempS)
                return  {...state}
                case "DROPSTATUS3":
                  
                const tempT=action.payload
                state.dropT.push(...tempT)
                return  {...state}
              case"FLIP":
              return {...state,flip:action.payload}
              case"PERIODFLIP":
              return {...state,PeriodFlip:action.payload}
              case"MODAL":
              return {...state,modal:action.payload}
              case"DRAG":
              
              return {...state,dragDrop:action.payload}
              case"SPDF":
                state.spdf.push(action.payload)
                return  {...state}
                case "DROP2":
                const temp2=action.payload
                state.drop2.push(...temp2)
                return  {...state}
                case"CONFIG":
                return {...state,config:action.payload}
                case"CONSPDF":
                return {...state,spdfConfig:action.payload}
                case "FIG":
                const tempo=Array.from(new Set(action.payload))   
                state.double.push(...tempo)
                return  {...state}
                case "SPDFBOX":
                const temp3=action.payload
                state.spdfBox.push(...temp3)
                return  {...state}
                case"ONOFF":
                return {...state,onoff:action.payload}
                case"FITELEMENT":
              return {...state,fitELement:action.payload}
              case"CHECK":
              return {...state,check:action.payload}
              case "DROP3":
                const temp4=[...action.payload]
                state.drop3.push(...temp4)
                return  {...state}
              case "DROP4":
                  const temp5=action.payload
                  state.drop4.push(...temp5)
                  return  {...state}
              case "FIG2":
                const temp6=action.payload
                state.fig.push(...temp6) 
                    return  {...state}
              case "SPDFLISTBOX1":
             state.spdfListBox1[action.payload]=true
                          return  {...state}
              case "TREND":
             state.trend[action.payload]=false
                          return  {...state}
              case  "TIMER":
                state.timer[action.payload[0]]=action.payload[1]
                  return {...state}
               case  "TIMER1":
                    return {...state,timer1:action.payload}
              case  "COUNTER":
                    return {...state,counter:action.payload}
              case  "ENERGYLEVEL":
                state.EnergyLevel.push(action.payload) 
                return  {...state}
              case  "TIMEUPDATE":
                     return {...state,timeUpdate:action.payload}
              case  "SPDFUPDATE":
                      return {...state,spdfUpdate:action.payload}
              case  "TRENDROP":
                  state.trendDrop.push(action.payload)
                      return {...state}
              case  "ARRANGEMOBILECHECK":
                        return {...state,arrangeMobbileCheck:action.payload}
              case  "ARRANGEMOBILECHECK3":
                        return {...state,arrangeMobbileCheck3:action.payload}
              case  "ARRANGEMOBILEMATCH":
                          return {...state,arrangeMobileMatch:action.payload}
              case  "ARRANGEMOBILEMATCH2":
                        return {...state,arrangeMobileMatch2:action.payload}
              case  "ARRANGEMOBILEMATCH3":
                          return {...state,arrangeMobileMatch3:action.payload}
              case  "ARRANGEMOBILEMATCH4":
                          return {...state,arrangeMobileMatch4:action.payload}
               case  "ARRANGEMOBILEMATCH5":
                            return {...state,arrangeMobileMatch5:action.payload}
               case  "CONFIGMOBILEMATCH":
                             return {...state,ConfigMobileMatch:action.payload}
               case  "CONFIGMOBILEMATCH1":
                      const tempMob=action.payload[1]
                      state.ConfigMobileMatch1[tempMob]=action.payload[0]
                              return {...state}
              case  "MATCHDROPEMPTY":
                    state.matchDrop=[]
                                return {...state}
              case  "MATCHDROP":
                     state.matchDrop.push(action.payload)
                          return {...state}
              case  "MATCHDROPFIT":
                     state.matchDropFit.push(action.payload)
                          return {...state}
               case  "MATCHDROPFIT2":
                     state.matchDropFit2.push(action.payload)
                          return {...state}
              case "ELEMENTDROPFITEMPTY":
                        state.matchDropFit=[]
                           return {...state}
              case  "ELEMENTDROPFIT":
                            state.elementDropFit.push(action.payload)
                                 return {...state}
              case  "ELEMENTDROPFIT2EMPTY":
                             state.blockDropFit=[]
                                return {...state}
               case  "ELEMENTDROPFIT2":
                            state.elementDropFit2.push(action.payload)
                                  return {...state}
               case  "BLOCKDROPFITEMPTY":
                                    state.blockDropFit=[]
                                         return {...state}
               case  "BLOCKDROPFIT":
                             state.blockDropFit.push(action.payload)
                                  return {...state}
              case  "MOBA20":
                           return {...state,mobA20:action.payload}
              case  "CLICKMOB":
                            return {...state,mobClick:action.payload}
              case  "MOBA40":
                          return {...state,mobA40:action.payload}
              case  "MOBAFULL":
                          return {...state,mobAFull:action.payload}
              case  "MOBEN":
                          return {...state,moben:action.payload}
              case  "SPDF20F":
                            return {...state,spdf20f:action.payload}
    default:
      return state;
  }
}

const AppContext = createContext();
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};
export function AppWrapper({ children }) {
  let sharedState = {
    spdf20f:false,
    moben:"Twenty",
    mobClick:false,
    blockDropFit:[],
    elementDropFit:[],
    elementDropFit2:[],
    mobA20:"Twenty",
    mobA40:'Twenty',
    mobA2Full:'',
    matchDrop:[],
    matchDropFit:[],
    matchDropFit2:[],
    arrangeMobbileCheck:false,
    arrangeMobbileCheck3:false,
    arrangeMobileMatch:"",
    arrangeMobileMatch2:"",
    arrangeMobileMatch3:"",
    arrangeMobileMatch4:"",
    arrangeMobileMatch5:"",
    ConfigMobileMatch:"",
    ConfigMobileMatch1:[],
    trendDrop:[],
    EnergyLevel:[],
    dataList:{},
    Properties:{},
    Temp:0,
    data:{},
    status:false,
    PropElement:"",
    slide:false,
    temp:0,
    margin:false,
    switch:true,
    elemrntProp:"",
    sign:false,
    drop:[],
    dropS:[],
    dropT:[],
    flip:false,
    PeriodFlip:"Full",
    modal:false,
    drag:"Full",
    spdf:[],
    drop2:[],
    config:"Full",
    double:[],
    spdfConfig:"",
    spdfBox:[],
    onoff:"",
    fitELement:"full",
    check:false,
    drop3:[],
    drop4:[],
    timer:[false,false,false,false,false,false,false],
    dragDrop:"Full",
    fig:[],
    counter:0,
    spdfListBox1:[],
    trend:[true,true,true,true],
    timeUpdate:0,
    spdfUpdate:'',
    spdfListBox:[
      [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
      [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
      [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
      [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
      [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],
      [],[],[],[],[],[],[],[],[],[],[],[],[],
      
      ]
  }

  const [state, dispatch] = useReducer(combineReducers(user), sharedState); // pass more reducers combineReducers(user, blogs, products)
  const value = { state, dispatch };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}