import React from 'react'
import { NavLink } from 'react-router-dom'
export default function () {
  return (
    <div>  <div className="dropdown category-dropdown">
    <a
      to="shop"
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
            <NavLink to="shop/all" >All</NavLink>
          </li>
          <li>
            <NavLink to="shop/men's clothing">man</NavLink>
          </li>
          <li>
            <NavLink to="shop/women's clothing">women</NavLink>
          </li>
          <li>
            <NavLink to="shop/jewelery">Jewellery</NavLink>
          </li>
          <li>
            <NavLink to="shop/electronics">Electronics</NavLink>
          </li>
        </ul>
        {/* End .menu-vertical */}
      </nav>
      {/* End .side-nav */}
    </div>
    {/* End .dropdown-menu */}
  </div></div>
  )
}
