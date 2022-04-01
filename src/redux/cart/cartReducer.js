import { ADD_TO_CART, REMOVE_TO_CART, ADJUST_QTY, GET_PRODUCT_DATA } from "./cartTypes";

const initialState ={
    products: [],
    cart: []
}

export const cardItems = (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCT_DATA:
            return{
                ...state,
                products: action.data
            }

        case ADD_TO_CART:
            console.log(action.dataID);
            const item = state.products.find((prod) => prod.id === action.dataID );
            console.log(item)
            const exist =  state.cart.find((item) => item.id === action.dataID ? true : false )
                return{
                    ...state,
                    cart: exist 
                            ? state.cart.map((item) => item.id === action.dataID ?{ ...item, qty: item.qty + 1 } : item)
                            : [...state.cart, { ...item, qty: 1 }],
                }
            
            break;

        case REMOVE_TO_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.dataID ) 
            }
            break; 
            
        case ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item )
            }      
        
        default:
            return state
            break;
    }
}