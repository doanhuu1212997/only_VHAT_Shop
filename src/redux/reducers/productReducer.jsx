
import productApi from "api/productApi"
import createSlice from "../../core/createSlice"

const initalState = {
  products :[],
  paginate:null
  
}
export function getProduct(page){
    return(dispatch)=>{
        productApi.catalog(page)
        .then(res => {
            dispatch({type: TYPE.catalog,payload:res})
        })
    }
}

let {action,reducer,TYPE} = createSlice({
    name: 'product',
    initalState,
    reducers: {
        catalog:function(state,action){
            return{
                ...state,
                products:action.payload.data,
                paginate :action.payload.paginate
            }
        }


    }
})



export default reducer