import { GET_DATA, ADD_DATA, UPDATE_DATA, DELETE_DATA } from "./productType";
import axios from "axios";

export const getData = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_DATA,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const deleteData = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3001/products/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: DELETE_DATA,
        });
        dispatch(getData());
      })
      .catch((error) => console.log(error));
  };
};

export const updateData = (upadteddata, id) => {
  console.log(upadteddata, id);
  var updatenew = {
    id: id,
    title: upadteddata.title,
    price: upadteddata.price,
    description: upadteddata.description,
    category: upadteddata.category,
    image: upadteddata.image,
    rating: {
      rate: upadteddata.rate,
      count: upadteddata.count,
    },
  };
  return function (dispatch) {
    axios
      .put(`http://localhost:3001/products/${id}`, updatenew)
      .then((response) => {
        console.log(response);
        dispatch({
          type: UPDATE_DATA,
        });
        dispatch(getData());
      })
      .catch((error) => console.log(error));
  };
};

export const addData = (product, id) => {
  id++;
  var newdata = {
    id: id,
    title: product.title,
    price: parseFloat(product.price),
    description: product.description,
    category: product.category,
    image: product.image,
    rating: {
      rate: parseFloat(product.rate),
      count: parseInt(product.count),
    },
  };
  console.log(newdata);
  return function (dispatch) {
    axios
      .post(`http://localhost:3001/products/`, newdata)
      .then((response) => {
        console.log(response);
        dispatch({
          type: ADD_DATA,
        });
        dispatch(getData());
      })
      .catch((error) => console.log(error));
  };
};
