import React from "react";
import { Link } from "react-router-dom";

const List = ({ data }) => {
  const { id, title, category, image, rating, description, price } = data;
  return (
    <div>
      <div className="product product-list">
        <div className="row">
          <div className="col-6 col-lg-3">
            <figure className="product-media">
              <Link to={`/product/${id}`}>
                <img
                  src={image}
                  alt="Product image"
                  className="product-image"
                />
              </Link>
            </figure>
            {/* End .product-media */}
          </div>
          {/* End .col-sm-6 col-lg-3 */}
          <div className="col-6 col-lg-3 order-lg-last">
            <div className="product-list-action">
              <div className="product-price">
                <span className="out-price">${price}</span>
              </div>
              {/* End .product-price */}
              <div className="ratings-container">
                <div className="ratings">
                  
                  <div className="ratings-val" style={{ width: `${rating.rate * 20}%` }} />
                  {rating.rate}
                  {/* End .ratings-val */}
                </div>
                {/* End .ratings */}
                <span className="ratings-text">( {rating.count} Reviews )</span>
                  {/* <div
                    className="ratings-val"
                    style={{ width: `${rating.rate * 20}%` }}
                  /> */}
                  {/* End .ratings-val */}
                </div>
                {/* End .ratings */}
                <span className="ratings-text">( {rating.rate} rating )</span>
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
                <a href="#">{category}</a>
              </div>
              {/* End .product-cat */}
              <h3 className="product-title">
                <a href="product.html">{title}</a>
              </h3>
              {/* End .product-title */}
              <div className="product-content">
                <p>{description}</p>
              </div>
              {/* End .product-content */}
            </div>
            {/* End .product-body */}
          </div>
          {/* End .col-lg-6 */}
        </div>
        {/* End .row */}
      </div>
    
  );
};

export default List;
