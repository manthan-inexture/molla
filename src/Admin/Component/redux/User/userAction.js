import { GET_USER_DATA, DELETE_USER_DATA, ADD_USER_DATA } from "./userType";
import axios from "axios";

export const getuserData = () => async (dispatch, getState) => {
  let res = await axios.get(`http://localhost:3005/users`);
  // console.log(res.data.articles);

  const users = res.data;
  dispatch({
    type: GET_USER_DATA,
    payload: users,
  });
};

export const deleteuserData = (id) => async (dispatch, getState) => {
  let res = await axios.delete(`http://localhost:3005/users/${id}`);
  console.log(res);
  dispatch({
    type: DELETE_USER_DATA,
  });
  dispatch(getuserData());
};

export const addData = () => {};
