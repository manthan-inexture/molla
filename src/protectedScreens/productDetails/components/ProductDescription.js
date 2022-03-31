import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../../Admin/Component/redux/Product/productAction";

const ProductDescription = () => {
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
          <div className="product-details-tab" key={i}>
            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="product-desc-link"
                  data-toggle="tab"
                  href="#product-desc-tab"
                  role="tab"
                  aria-controls="product-desc-tab"
                  aria-selected="true"
                  style={{ backgroundColor: "transparent" }}
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-shipping-link"
                  data-toggle="tab"
                  href="#product-shipping-tab"
                  role="tab"
                  aria-controls="product-shipping-tab"
                  aria-selected="false"
                  style={{ backgroundColor: "transparent" }}
                >
                  Shipping & Returns
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-review-link"
                  data-toggle="tab"
                  href="#product-review-tab"
                  role="tab"
                  aria-controls="product-review-tab"
                  aria-selected="false"
                  style={{ backgroundColor: "transparent" }}
                >
                  Reviews (2)
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="product-desc-tab"
                role="tabpanel"
                aria-labelledby="product-desc-link"
              >
                <div className="product-desc-content">
                  <h3>Product Information</h3>
                  <p>{product.description}</p>
                  <ul>
                    <li>
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit.
                    </li>
                    <li>Vivamus finibus vel mauris ut vehicula.</li>
                    <li>
                      Nullam a magna porttitor, dictum risus nec, faucibus
                      sapien.
                    </li>
                  </ul>
                  <p>{product.description}</p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="product-shipping-tab"
                role="tabpanel"
                aria-labelledby="product-shipping-link"
              >
                <div className="product-desc-content">
                  <h3>Delivery &amp; returns</h3>
                  <p>
                    We deliver to over 100 countries around the world. For full
                    details of the delivery options we offer, please view our{" "}
                    <a href="#" style={{ textDecoration: "none" }}>
                      Delivery information
                    </a>
                    We hope you’ll love every purchase, but if you ever need to
                    return an item you can do so within a month of receipt. For
                    full details of how to make a return, please view our{" "}
                    <a href="#" style={{ textDecoration: "none" }}>
                      Returns information
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="product-review-tab"
                role="tabpanel"
                aria-labelledby="product-review-link"
              >
                <div className="reviews">
                  <h3>Reviews (2)</h3>
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4>
                          <a href="#">Samanta J.</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                        <span className="review-date">6 days ago</span>
                      </div>
                      <div className="col">
                        <h4>Good, perfect size</h4>
                        <div className="review-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus cum dolores assuma asperiores facilis
                            porro repreherit animi culpa atque blanditiis
                            commodi perspiciatis doloremque, possimus,
                            explicabo, autem fugit beatae quae voluptas!
                          </p>
                        </div>
                        <div className="review-action">
                          <a href="#" style={{ textDecoration: "none" }}>
                            <i className="icon-thumbs-up" />
                            Helpful (8)
                          </a>
                          <a href="#" style={{ textDecoration: "none" }}>
                            <i className="icon-thumbs-down" />
                            Unhelpful (1)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4>
                          <a href="#">John Doe</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <span className="review-date">5 days ago</span>
                      </div>
                      <div className="col">
                        <h4>Very good</h4>
                        <div className="review-content">
                          <p>
                            Sed, molestias, tempore? Ex dolor esse iure hic
                            veniam laborum blanditiis laudantium iste amet. Cum
                            non voluptate eos enim, ab cumque nam, modi, quas
                            iure illum repellus, blanditiis perspiciatis beatae!
                          </p>
                        </div>
                        <div className="review-action">
                          <a href="#" style={{ textDecoration: "none" }}>
                            <i className="icon-thumbs-up" />
                            Helpful (0)
                          </a>
                          <a href="#" style={{ textDecoration: "none" }}>
                            <i className="icon-thumbs-down" />
                            Unhelpful (0)
                          </a>
                        </div>
                      </div>
                    </div>
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

export default ProductDescription;
