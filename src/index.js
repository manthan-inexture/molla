import App from "./App";

import store from "../src/Admin/Component/redux/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import Admin from "./Admin";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Admin /> */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
