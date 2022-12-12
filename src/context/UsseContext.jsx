import { useReducer } from "react";
import { useContext , useEffect } from "react";
import { createContext } from "react";
import reducer from '../context/Reducer'

let Api = "http://hn.algolia.com/api/v1/search?"

const mydata = {
    hits:[],
    query:"css",
    page:0,
    nbPages:0,
    isloading:true,
    
}
const api = createContext();

const Apiprovider = ({children}) =>{

    const [state, dispatch]= useReducer(reducer,mydata)


    
    
    const myapi = async(url)=>{

        dispatch({type:"set_loading"})

      try {

        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        dispatch({
            type:"get_data",
            payload:{
                hits: data.hits,
                nbPages: data.nbPages
            }
        })
        
      } catch (error) {
        console.log(error);
      }

    }


    const removePost = (id)=>{
        dispatch({type:"remove" , payload: id })
    }

    const searchPost = ( searchpost)=>{
        dispatch({type:"search" , payload: searchpost,})

    }

    //pagination

    const PrevPage =()=>{
      dispatch({type:"Perv_Page"})
    }

    const NextPage =()=>{
      dispatch({type:"Next_Page"})
    }



    useEffect(()=>{

      myapi(`${Api}query=${state.query}&page=${state.page}`)

    },[state.query, state.page])

     return(
        <api.Provider value={{...state , removePost , searchPost, PrevPage, NextPage}}>{children}</api.Provider>
    )

}

const useGlobal =()=>{
   return useContext(api)
}
export { Apiprovider ,useGlobal}