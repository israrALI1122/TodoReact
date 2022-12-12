const Reducer = (state , action )=>{
    switch(action.type){
        case"get_data":
        return{
            ...state,
            isloading:false,
            hits: action.payload.hits,
            nbPages: action.payload.nbPages,
        }
        case"set_loading":
        return{
            ...state,
            isloading:true
        }
        case"remove":
        return{
            ...state,
            hits: state.hits.filter((cur)=>{
                return cur.objectID !== action.payload;
            })
        }
        case"search":
        return{
            ...state,
            query: action.payload
        }
        case"Perv_Page":
        let pageNumDec = state.page - 1
        if(pageNumDec < 0){
            pageNumDec = 0
        }
        return{
            ...state,
            page: pageNumDec
        }
        case"Next_Page":
        let pagenumic = state.page + 1
        if(pagenumic >= state.nbPages){
            pagenumic = 0
        }
        return{
            ...state,
            page: pagenumic
        }
    }



    return state
}
export default Reducer