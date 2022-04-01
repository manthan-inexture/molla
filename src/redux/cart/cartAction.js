import { ADD_TO_CART, REMOVE_TO_CART, ADJUST_QTY, GET_PRODUCT_DATA, FORM_DATA } from "./cartTypes";

export const getProductData = (data) => {
    return{
        type: GET_PRODUCT_DATA,
        data
    }
}

export const addToCart = (dataID) => {
    console.log(dataID,"data");
    return{
        type: ADD_TO_CART,
        dataID
    }
}

export const removeToCart = (dataID) => {
    return{
        type: REMOVE_TO_CART,
        dataID
    }
}

export const adjustQty = (itemID,value) => {
    return{
        type:ADJUST_QTY,
        payload:{
            id:itemID,
            qty:value,
        }
    }
}

export const getFormData = (data) => {
    return{
        type: FORM_DATA,
        data
    }
}
