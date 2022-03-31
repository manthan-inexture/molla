import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function HeaderMiddle() {
  return (
    <div>
      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars" />
            </button>
            <Link to="/">
              <img
                src="assets/images/demos/demo-4/logo.png"
                alt="Molla Logo"
                width={105}
                height={25}
              />
            </Link>
          </div>
          {/* End .header-left */}
          <div className="header-center">
            <Search />
            {/* End .header-search */}
          </div>

          <div className="header-right">
            {/* remove compare and wishlistt */}
            <div className="dropdown cart-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <div className="icon">
                  <i className="icon-shopping-cart" />
                  <span className="cart-count">2</span>
                </div>
                <p>Cart</p>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product.html">
                          Beige knitted elastic runner shoes
                        </a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>x $84.00
                      </span>
                    </div>
                    {/* End .product-cart-details */}
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img
                          src="assets/images/products/cart/product-1.jpg"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close" />
                    </a>
                  </div>
                  {/* End .product */}
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <a href="product.html">
                          Blue utility pinafore denim dress
                        </a>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span>x $76.00
                      </span>
                    </div>
                    {/* End .product-cart-details */}
                    <figure className="product-image-container">
                      <a href="product.html" className="product-image">
                        <img
                          src="assets/images/products/cart/product-2.jpg"
                          alt="product"
                        />
                      </a>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close" />
                    </a>
                  </div>
                  {/* End .product */}
                </div>
                {/* End .cart-product */}
                <div className="dropdown-cart-total">
                  <span>Total</span>
                  <span className="cart-total-price">$160.00</span>
                </div>
                {/* End .dropdown-cart-total */}
                <div className="dropdown-cart-action">
                  <Link to="viewcart" className="btn btn-primary">
                    View Cart
                  </Link>
                  <Link to="checkout" className="btn btn-outline-primary-2">
                    <span>Checkout</span>
                    <i className="icon-long-arrow-right" />
                  </Link>
                </div>
                {/* End .dropdown-cart-total */}
              </div>  
              {/* End .dropdown-menu */}
            </div>
            {/* End .cart-dropdown */}
          </div>
          {/* End .header-right */}
        </div>
        {/* End .container */}
      </div>
      {/* End .header-middle */}
    </div>
  );
}

export default HeaderMiddle;
