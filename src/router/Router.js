import {
    Routes, Route, Link, useNavigate, Navigate,
    useLocation
} from "react-router-dom";
// public
import Home from '../screens/home/home'
import CategoryList from '../screens/category-list/CategoryList'
import RegisterAndsignin from '../screens/signin-signup/RegisterAndsignin'
import About from "../screens/about/About"

//private
import Contact from "../protectedScreens/contact/Contact"
import ProductView from '../protectedScreens/productDetails/ProductView'

const Router = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<CategoryList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<RegisterAndsignin />} />
          <Route path="product" element={<ProductView />} />
          <Route path="about" element={<About />} />
      </Routes>
  )
}

export default Router