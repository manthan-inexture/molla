import React from "react";
import { Routes, Route } from "react-router-dom";

import Order from "./Admin/Component/Order";
import Product from "./Admin/Component/Product";
import Starter from "./Admin/Component/Starter";
import User from "./Admin/Component/User";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Starter />} />
        <Route path="/products" element={<Product />} />
        <Route path="/users" element={<User />} />
        <Route path="/orders" element={<Order />} />
        <Route path="*" element={<h1>404</h1>} />

      </Routes>
    </>
  );
};

export default Router;
