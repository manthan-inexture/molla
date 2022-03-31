import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../../Admin/Component/redux/Product/productAction";
import { Link } from "react-router-dom";

const SimilarProduct = () => {
  const { productId } = useParams();
  const data = useSelector((state) => state.product.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  // similar product functionality
  const productFilter = data?.filter((items, index) => items.id == productId);
  var product = data?.filter((value, index) => value.id == productId);
  console.log(product);

  var similarProduct = data?.filter((value, index) => {
    console.log(value.category);
    console.log("v id ", value.id);
    console.log(productId);
    return (
      value.category == productFilter[0]?.category && value.id != productId
    );
  });
  console.log(similarProduct);

  return (
    <>
      <div className="container">
        <div className="row gx-5">
          {similarProduct?.map((product, index) => (
            <div
              className="product col-lg-3 col-md-4  col-sm-6 mx-auto  mt-5 product-7 text-center"
              key={index}
            >
              <figure className="product-media">
                <img
                  alt="Product image"
                  src={product.image}
                  className="product-image "
                  style={{ height: "220px" }}
                />

                <div className="product-action">
                  <a
                    href="#"
                    className="btn-product btn-cart"
                    style={{ textDecoration: "none" }}
                  >
                    <span>ADD TO CART</span>
                  </a>
                </div>
              </figure>
              <div className="product-body">
                <div className="product-cat">
                  <a href="#" style={{ textDecoration: "none" }}>
                    {product.category}
                  </a>
                </div>
                <h3 className="product-title">
                  <Link
                    to={`/product/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {product.title.substring(0, 14)}...
                  </Link>
                </h3>
                <div className="product-price">${product.price}</div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div
                      className="ratings-val"
                      style={{ width: `${product.rating.rate * 20}%` }}
                    />
                  </div>
                  <span className="ratings-text">
                    ({product.rating.count} Reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SimilarProduct;
