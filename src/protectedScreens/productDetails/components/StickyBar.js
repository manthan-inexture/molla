import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../../Admin/Component/redux/Product/productAction";
import { addToCart } from "../../../redux/cart/cartAction";

const StickyBar = () => {
  const { productId } = useParams();
  const data = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const handleClick = (id, title) => {
    alert(`${title} added to cart`);
    dispatch(addToCart(id));
  };
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

                  <div className="product-details-action ml-5">
                    <a
                      onClick={() => handleClick(product.id, product.title)}
                      className="btn-product btn-cart"
                      style={{ textDecoration: "none", cursor: "pointer" }}
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
