import { useReducer } from "react"
import { useEffect } from "react"
import axios from "axios";


const ACTIONS = {
    MAKE_REQUEST:"MAKE_REQUEST",
    GET_DATA:"GET_DATA",
    ERROR:"ERROR",
    UPDATE_HAS_NEXT_PAGE:"UPDATE_HAS_NEXT_PAGE"
}

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
function reducer(state,action){
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return {...state,loading:true,jobs:[]}
        case ACTIONS.GET_DATA:
            return {...state,loading:false,jobs:action.payload}
        case ACTIONS.ERROR:
            return{...state,loading:false,jobs:[],error:true}  
        case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return {...state,hasNextPage:action.payload}      
        default:
            return state;
    }
}
export default function useFetch(params,page){
    const [state,dispatch] = useReducer(reducer,{jobs:[],loading:true,error:false});
    useEffect(()=>{
        const cancelToken = axios.CancelToken.source();
        
        dispatch({type:ACTIONS.MAKE_REQUEST});
      axios.get(BASE_URL,{
          cancelToken:cancelToken.token,
          params:{page:page,...params}
      }).then(res=>{
          dispatch({type:ACTIONS.GET_DATA,payload:res.data})
      }).catch(e=>{
          if (axios.isCancel(e)) return;
          dispatch({type:ACTIONS.ERROR});
      })
      const cancelToken1 = axios.CancelToken.source();
      axios.get(BASE_URL,{
          cancelToken:cancelToken1.token,
        params:{page:page+1,...params}
    }).then(res=>{
        dispatch({type:ACTIONS.UPDATE_HAS_NEXT_PAGE,payload:res.data.length!==0})
    }).catch(e=>{
        if (axios.isCancel(e)) return;
        dispatch({type:ACTIONS.ERROR});
    })
      return () => {
          cancelToken.cancel()
          cancelToken1.cancel()
      }
    },[params,page])
    return state;
}