import React from "react";

const List = (props) => {
  return (
    <div>
      <div className="product product-list">
        <div className="row">
          <div className="col-6 col-lg-3">
            <figure className="product-media">
              <a href="product.html">
                <img
                  src="assets/images/products/product-6.jpg"
                  alt="Product image"
                  className="product-image"
                />
              </a>
            </figure>
            {/* End .product-media */}
          </div>
          {/* End .col-sm-6 col-lg-3 */}
          <div className="col-6 col-lg-3 order-lg-last">
            <div className="product-list-action">
              <div className="product-price">
                <span className="out-price">$120.00</span>
              </div>
              {/* End .product-price */}
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{ width: "80%" }} />
                  {/* End .ratings-val */}
                </div>
                {/* End .ratings */}
                <span className="ratings-text">( 6 Reviews )</span>
              </div>
              {/* End .rating-container */}

              {/* End .product-action */}
              <a href="#" className="btn-product btn-cart">
                <span>add to cart</span>
              </a>
            </div>
            {/* End .product-list-action */}
          </div>
          {/* End .col-sm-6 col-lg-3 */}
          <div className="col-lg-6">
            <div className="product-body product-action-inner">
              <div className="product-cat">
                <a href="#">Jackets</a>
              </div>
              {/* End .product-cat */}
              <h3 className="product-title">
                <a href="product.html">Khaki utility boiler jumpsuit</a>
              </h3>
              {/* End .product-title */}
              <div className="product-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque{" "}
                </p>
              </div>
              {/* End .product-content */}
            </div>
            {/* End .product-body */}
          </div>
          {/* End .col-lg-6 */}
        </div>
        {/* End .row */}
      </div>
    </div>
  );
};

export default List;
