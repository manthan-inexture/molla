import React from "react";
import { NavLink, useLocation} from "react-router-dom";
import BrowseCategory from "./BrowseCategory";
function HeaderCenter() {
  const location =useLocation()
  return (
    <div className="sticky-wrapper" style={{}}>
      <div
        className="header-bottom sticky-header"
        style={{ paddingRight: "0px" }}
      >
        <div className="container">
          <div className="header-left">
          {location.pathname == '/shop' && <BrowseCategory />}
            {/* End .category-dropdown */}
          </div>
          {/* End .header-left */}
          <div className="header-center">
            <nav className="main-nav">
              <ul className="menu " style={{ touchAction: "pan-y" }}>
                {/*home-nav-bar-btn */}
                
                <li className="megamenu-container">
                  <NavLink to="/" >Home</NavLink>
                </li>

                {/*shop-nav-bar-btn */}
                 <li className="megamenu-container">
                  <NavLink to="/shop" >Shop</NavLink>
                </li>
               <li className="megamenu-container">
                  <NavLink to="/product" >Product</NavLink>
                </li>

                  <li className="megamenu-container">
                  <NavLink to="/about" >About-us</NavLink>
                </li>

               <li className="megamenu-container">
                  <NavLink to="/contact" >Contact-us</NavLink>
                </li>
    
              </ul>
              {/* End .menu */}
            </nav>
            {/* End .main-nav */}
          </div>
          {/* End .header-center */}
          <div className="header-right">
            <i className="la la-lightbulb-o" />
            <p>
              Clearance<span className="highlight">&nbsp;Up to 30% Off</span>
            </p>
          </div>
        </div>
        {/* End .container */}
      </div>
    </div>
  );
}

export default HeaderCenter;
