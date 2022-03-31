import { combineReducers } from "redux";
import productReducer from "./Product/productReducer";
import userReducer from "./User/userReducer";
import { getuserdata } from "../../../redux/users/reducers/getuserinfo";
import { usersignin } from "../../../redux/users/reducers/usersignin";
// import fetchReducer from "../../../redux/fetchReducer";

const rootReducer = combineReducers({
  product: productReducer,
  Users: userReducer,
  getuserdata,
  usersignin
});

export default rootReducer;
