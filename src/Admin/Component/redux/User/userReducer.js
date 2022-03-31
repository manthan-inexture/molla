import { GET_USER_DATA, DELETE_USER_DATA } from "./userType";
// import info from "../../../../../src/fakestoreapi.json";
const initialState = {
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER_DATA:
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
