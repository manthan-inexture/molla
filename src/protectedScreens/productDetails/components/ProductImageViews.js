import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../../Admin/Component/redux/Product/productAction";

const ProductImageViews = () => {
  const { productId } = useParams();
  const data = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  console.log("datas", data);
  return (
    <>
      {data.map((product, i) =>
        product.id == productId ? (
          <div className="col-md-6" key={i}>
            <div className="product-gallery product-gallery-vertical">
              <div className="row">
                <figure className="product-main-image">
                  <img src={product.image} alt="product image" />
                </figure>
                <div className="product-image-gallery">
                  <a className="product-gallery-item " href="#">
                    <img src={product.image} alt="product side" />
                  </a>
                  <a className="product-gallery-item" href="#">
                    <img src={product.image} alt="product cross" />
                  </a>

                  <a className="product-gallery-item" href="#">
                    <img src={product.image} alt="product with model" />
                  </a>

                  <a className="product-gallery-item" href="#">
                    <img src={product.image} alt="product back" />
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

export default ProductImageViews;
