import { FETCH, SUCCESS, FAILURE } from './fetchTypes';

const initialState = {
    data: [],
    error: ''
}

const fetchReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH:
            return {
                ...state,
            }
        break;
        
        case SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: ''
            }
        break;

        case FAILURE:
            return {
                ...state,
                data: [],
                error: action.payload
            }
        break;

        default:
            return state;
    }

    }
 export default fetchReducer;