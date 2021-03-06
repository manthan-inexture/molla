import App from "./App";

import store from "../src/Admin/Component/redux/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Router } from "react-router-dom";

import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
