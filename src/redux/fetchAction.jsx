import { FETCH, SUCCESS, FAILURE } from './fetchTypes';
import axios from 'axios';

export const fetchRequest = props => {
    return {type: FETCH}
};

export const fetchSuccess = data => {
    return {type: SUCCESS, payload: data}
};

export const fetchFailure = error => {
    return {type: FAILURE, payload: error}
};

export const fetchProducts = props => {
    return (dispatch) => {
        dispatch(fetchRequest)
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            // console.log(res)
            dispatch(fetchSuccess(res.data))
        })
        .catch(error => {
            const errormsg = error.msg;
            dispatch(fetchFailure(errormsg));
        })
            
    }
} 
