import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../../Admin/Component/redux/Product/productAction";

const StickyBar = () => {
  const { productId } = useParams();
  const data = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
      {data.map((product, i) =>
        product.id == productId ? (
          <div className="sticky-bar" key={i}>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <figure className="product-media">
                    <span href="product.html">
                      <img src={product.image} alt="Product image" />
                    </span>
                  </figure>
                  <h4 className="product-title">
                    <div className="product-price">{product.title}</div>
                  </h4>
                </div>
                <div className="col-6 justify-content-">
                  <div className="product-price">${product.price}</div>
                  <div className="product-details-quantity">
                    <input
                      type="number"
                      id="sticky-cart-qty"
                      className="form-control"
                      defaultValue={1}
                      min={1}
                      max={10}
                      step={1}
                      data-decimals={0}
                      required
                    />
                  </div>
                  <div className="product-details-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      style={{ textDecoration: "none" }}
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </>
  );
};

export default StickyBar;
