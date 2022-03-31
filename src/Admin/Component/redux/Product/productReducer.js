import { ADD_DATA, DELETE_DATA, GET_DATA, UPDATE_DATA } from "./productType";

const initialState = {
  data: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_DATA:
      return {
        ...state,
      };
    case ADD_DATA:
      return {
        ...state,
      };
    case UPDATE_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default productReducer;
