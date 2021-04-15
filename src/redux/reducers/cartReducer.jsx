import createSlice from "../../core/createSlice"


const cart = JSON.parse(localStorage.getItem('cart'))
const initalState = {
    list: cart?.list || [],
    num: cart?.num || 0,
    amount: cart?.amount || 0,
    total:cart?.total || 0,
    shiping_opition:cart?.shiping_opition || 'free',
    shiping_price:cart?.shiping_price || 0,


    

}
function returnCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
    return cart
}
let { reducer, action, TYPE } = createSlice({
    name: 'cart',
    initalState,
    reducers: {
        addCart: function (state, action) {
            let { list ,amount,total} = state
            let f = list.findIndex(e => e._id === action.payload._id)
            if (f != -1) {
                list[f].cartNum++
                amount+=list[f].real_price
                total +=list[f].real_price
            }
            else {
                let item = JSON.parse(JSON.stringify(action.payload))
                item.cartNum = 1
                list.push(item)
                amount+=item.real_price
                total +=item.real_price
            }
            return returnCart({
                ...state,
                num: state.num + 1,
                list,
                amount,total
            })
        },
        removeCart: function (state, action) {
            let { list ,amount,num,total} = state
            let f = list.findIndex(e => e._id === action.payload)
           
            if (f != -1) {
                amount -=list[f].real_price * list[f].cartNum
                total -=list[f].real_price * list[f].cartNum
                num -=list[f].cartNum
                list.splice(f, 1)
               
            }
            
            return returnCart({
                ...state,
              num,
                list,amount,total
            })
        },
        increment: function (state, action) {
            let { list, amount,total} = state
            let f = list.findIndex(e => e._id === action.payload)
            if (f != -1) {
                list[f].cartNum++
                amount +=list[f].real_price
                total +=list[f].real_price

            }
            return returnCart({
                ...state,
                num: state.num + 1,
                list,amount,total
            })

        },
        decrement: function (state, action) {
            let { list ,amount,total} = state
            let f = list.findIndex(e => e._id === action.payload)
            amount -=list[f].real_price
            total -=list[f].real_price
            if (f != -1) {
                if (list[f].cartNum > 1) {
                    list[f].cartNum--
                }
                else {
                    list.splice(f, 1)
                  
                }
              
            }
          
            return returnCart({
                ...state,
                num: state.num - 1,
                list,amount,total
            })

        },
        shipingChange:function(state,action){
            let {shiping_opition ,shiping_price }=state
         
            return returnCart({
                ...state,
                shiping_opition,shiping_price
            
                
            })
        }
    }
})

export const addCart = action.addCart
export const removeCart = action.removeCart
export const incrementCart = action.increment
export const decrementCart = action.decrement
export const shipingChange = action.shipingChange
export default reducer