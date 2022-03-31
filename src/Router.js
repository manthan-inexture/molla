import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./Admin/Component/Footer";
import Header from "./Admin/Component/Header";

import Order from "./Admin/Component/Order";
import Product from "./Admin/Component/Product";
import Starter from "./Admin/Component/Starter";
import User from "./Admin/Component/User";

// public
import Home from "../src/screens/home/home";
import CategoryList from "../src/screens/category-list/CategoryList";
import RegisterAndsignin from "../src/screens/signin-signup/RegisterAndsignin";
import About from "../src/screens/about/About";
import Errors from "../src/screens/error/Errors";

//private
import Contact from "../src/protectedScreens/contact/Contact";
import ProductView from "../src/protectedScreens/productDetails/ProductView";
import Checkout from "../src/protectedScreens/checkout/Checkout";
import PrivateRoute from "../src/PrivateRoute";
import Cart from "../src/protectedScreens/cart/Cart";

const Router = () => {
  const [islogin, setIslogin] = useState(true);

  return (
    <>
      <Routes>
        {/* public */}
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<CategoryList />} />
        <Route path="/shop/:category" element={<CategoryList />} />
        <Route path="signin" element={<RegisterAndsignin />} />
        <Route path="about" element={<About />} />

        {/* private */}
        <Route path="/" element={<PrivateRoute islogin={islogin} />}>
          <Route path="contact" element={<Contact />} />
          <Route path="product/:productId" element={<ProductView />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="viewcart" element={<Cart />} />
        </Route>

        <Route
          path="/admin"
          element={
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<Starter />} />
          <Route path="products" element={<Product />} />
          <Route path="users" element={<User />} />
          <Route path="orders" element={<Order />} />
        </Route>

        <Route path="*" element={<Errors />} />
      </Routes>
    </>
  );
};

export default Router;
