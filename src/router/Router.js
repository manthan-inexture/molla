import {
    Routes, Route, Link, useNavigate, Navigate,
    useLocation
} from "react-router-dom";
// public
import { useState } from "react";
import Home from '../screens/home/home'
import CategoryList from '../screens/category-list/CategoryList'
import RegisterAndsignin from '../screens/signin-signup/RegisterAndsignin'
import About from "../screens/about/About"
import Errors from "../screens/error/Errors"

//private
import Contact from "../protectedScreens/contact/Contact"
import ProductView from '../protectedScreens/productDetails/ProductView'
import Checkout from '../protectedScreens/checkout/Checkout'
import PrivateRoute from "./PrivateRoute";
import Cart from "../protectedScreens/cart/Cart"

const Router = () => {

    const [islogin, setIslogin] = useState(true)
    return (
        <Routes>
            {/* public */}
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<CategoryList />} />
            <Route path="signin" element={<RegisterAndsignin />} />
            <Route path="about" element={<About />} />

            {/* private */}
            <Route path='/' element={<PrivateRoute islogin={islogin} />} >
                <Route path="contact" element={<Contact />} />
                <Route path="product" element={<ProductView />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="viewcart" element={<Cart />} />
            </Route >
            <Route path='*' element={<Errors />} />
        </Routes>
    )
}

export default Router