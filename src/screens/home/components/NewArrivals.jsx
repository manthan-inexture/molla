import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../../redux/cart/cartAction";

function NewArrivals() {
  const dispatch = useDispatch();
  const AllProducts = useSelector((state) => state.product.data);
  // console.log(AllProducts)

  const currentProducts = AllProducts.slice(0, 8);
  // console.log(currentProducts)

  const handleClick = (id, title) => {
    console.log(id, title);
    alert(`${title} added to cart`);
    dispatch(addToCart(id));
  };

  return (
    <div>
      <div className="container new-arrivals">
        <h2 className="title text-center mt-2 mb-3">New Arrivals</h2>
        <div className="row">
          <div className="tab-content tab-content-carousel just-action-icons-sm">
            <div
              className="tab-pane p-0 fade show active"
              id="new-all-tab"
              role="tabpanel"
              aria-labelledby="new-all-link"
            >
              <div className="row">
                {currentProducts.map((product, index) => (
                  <Fragment key={index}>
                    <div
                      className="col-md-4 col-sm-6  col-lg-3 mx-auto"
                      key={product.id}
                    >
                      <div className="product product-2">
                        <figure className="product-media">
                          <img
                            style={{ height: "200px" }}
                            src={product.image}
                            alt="Product image"
                            className="product-image"
                          />

                          <div className="product-action">
                            <span
                              onClick={() =>
                                handleClick(product.id, product.title)
                              }
                              className="btn-product btn-cart"
                              title="Add to cart"
                              style={{ cursor: "pointer" }}
                            >
                              <span>add to cart</span>
                            </span>
                          </div>
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">{product.category}</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <NavLink to={`/product/${product.id}`}>
                              {product.title}
                            </NavLink>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">${product.price}</div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{
                                  width: `${product.rating.rate * 20}%`,
                                }}
                              />
                              {/* End .ratings-val */}
                              {product.rating.rate}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text">
                              ( {product.rating.count} Reviews )
                            </span>
                          </div>
                          {/* End .rating-container */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            {/* .End .tab-pane */}
          </div>
        </div>
        {/* End .tab-content */}
      </div>
      {/* End .container */}
    </div>
  );
}

export default NewArrivals;
