import React from "react";
import { NavLink } from "react-router-dom";

function HeaderCenter() {
  return (
    <div className="sticky-wrapper" style={{}}>
      <div
        className="header-bottom sticky-header"
        style={{ paddingRight: "0px" }}
      >
        <div className="container">
          <div className="header-left">
            <div className="dropdown category-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
                title="Browse Categories"
              >
                Browse Categories <i className="icon-angle-down" />
              </a>
              <div className="dropdown-menu">
                <nav className="side-nav">
                  <ul
                    className="menu-vertical sf-arrows sf-js-enabled"
                    style={{ touchAction: "pan-y" }}
                  >
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">man</a>
                    </li>
                    <li>
                      <a href="#">women</a>
                    </li>
                    <li>
                      <a href="#">Jewellery</a>
                    </li>
                    <li>
                      <a href="#">Electronics</a>
                    </li>
                  </ul>
                  {/* End .menu-vertical */}
                </nav>
                {/* End .side-nav */}
              </div>
              {/* End .dropdown-menu */}
            </div>
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
