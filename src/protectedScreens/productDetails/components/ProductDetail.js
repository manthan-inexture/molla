import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, getProductData } from "../../../redux/cart/cartAction";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const data = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.data);
  const { products } = useSelector((state) => state.cardItems);

  // console.log("products", products);
  useEffect(() => {
    dispatch(getProductData(productData));
  }, []);

  const handleClick = (id, title) => {
    alert(`${title} added to cart`);
    dispatch(addToCart(id));
  };

  useEffect(() => {
    if (products.length < 1) {
      navigate("/shop");
    }
  });
  return (
    <>
      {products.map((product, i) =>
        product.id == productId ? (
          <div className="col-md-6" key={i}>
            <div className="product-details">
              <h1 className="product-title">{product.title}</h1>
              <div className="ratings-container">
                <div className="ratings">
                  <div
                    className="ratings-val"
                    style={{ width: `${product.rating.rate * 20}%` }}
                  >
                    {product.rating.rate}
                  </div>
                </div>
                <a
                  className="ratings-text"
                  href="#product-review-link"
                  id="review-link"
                  style={{ textDecoration: "none" }}
                >
                  ({product.rating.count} Reviews)
                </a>
              </div>
              <div className="product-price">${product.price}</div>
              <div className="product-content">
                <p>{product.description}</p>
              </div>

              <div className="product-details-action">
                <a
                  onClick={() => handleClick(product.id, product.title)}
                  className="btn-product btn-cart"
                  style={{ textDecoration: "none" }}
                >
                  <span>ADD TO CART</span>
                </a>
              </div>
              <div className="product-details-footer">
                <div className="product-cat">
                  <span>Category:</span>
                  <a href="#" style={{ textDecoration: "none" }}>
                    {product.category}
                  </a>
                </div>
                <div className="social-icons social-icons-sm">
                  <span className="social-label">Share:</span>
                  <a
                    href="https://www.facebook.com/"
                    className="social-icon"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="icon-facebook-f" />
                  </a>

                  <a
                    href="https://twitter.com/"
                    className="social-icon"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="icon-twitter" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="social-icon"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="icon-instagram" />
                  </a>
                  <a
                    href="https://in.pinterest.com/"
                    className="social-icon"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i className="icon-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </>
  );
};

export default ProductDetail;
