import React from "react";
import { NavLink } from "react-router-dom";

const CategoryListNav = (props) => {
  return (
    <>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink  className="breadcrumb-item" to="/">Home</NavLink>
            </li>
            <li className="breadcrumb-item">
            <NavLink  className="breadcrumb-item" to="/shop">shop</NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              List
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
    </>
  );
};

export default CategoryListNav;
