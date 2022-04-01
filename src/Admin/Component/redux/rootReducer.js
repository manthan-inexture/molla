import { combineReducers } from "redux";
import productReducer from "./Product/productReducer";
import userReducer from "./User/userReducer";
import { getuserdata } from "../../../redux/users/reducers/getuserinfo";
import { spinner } from "../../../redux/users/reducers/spinner";
// import fetchReducer from "../../../redux/fetchReducer";
import { cardItems } from "../../../redux/cart/cartReducer";
const rootReducer = combineReducers({
  product: productReducer,
  Users: userReducer,
  getuserdata,
  cardItems,
  spinner
});

export default rootReducer;
