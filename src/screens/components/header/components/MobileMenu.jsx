import React from 'react'
import {NavLink} from "react-router-dom"
function MobileMenu() {
  return (
<div>  
      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close"><i className="icon-close" /></span>
          <form action="#" method="get" className="mobile-search">
            <label htmlFor="mobile-search" className="sr-only">Search</label>
            <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
            <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
          </form>
          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
            </li>
          
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <NavLink to="/" >Home</NavLink>
                  </li>
                  <li>
                  <NavLink to="/shop" >Shop</NavLink>
                  </li>
                  <li>
                 <NavLink to="/product" >Product</NavLink>            
                  </li>
                  <li>
                   <NavLink to="/about" >About-us</NavLink>          
                  </li>
                  <li>
                    <NavLink to="/contact" >Contact-us</NavLink>
                  </li>             
                </ul>
              </nav>{/* End .mobile-nav */}
            </div>{/* .End .tab-pane */}
            
          </div>{/* End .tab-content */}
          <div className="social-icons">
            <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
            <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
            <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
            <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
          </div>{/* End .social-icons */}
        </div>{/* End .mobile-menu-wrapper */}
      </div>{/* End .mobile-menu-container */}
    </div>
  )
}

export default MobileMenu