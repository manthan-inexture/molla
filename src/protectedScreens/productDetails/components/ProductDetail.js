import React from "react";

const ProductDetail = () => {
  return (
    <>
      <div className="col-md-6">
        <div className="product-details">
          <h1 className="product-title">
            Dark yellow lace cut out swing dress
          </h1>
          <div className="ratings-container">
            <div className="ratings">
              <div className="ratings-val" style={{ width: "80%" }} />
            </div>
            <a
              className="ratings-text"
              href="#product-review-link"
              id="review-link"
              style={{ textDecoration: "none" }}
            >
              ( 2 Reviews )
            </a>
          </div>
          <div className="product-price">$84.00</div>
          <div className="product-content">
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing. Sed lectus.
            </p>
          </div>
          <div className="details-filter-row details-row-size">
            <label htmlFor="qty">Qty:</label>
            <div className="product-details-quantity">
              <input
                type="number"
                id="qty"
                className="form-control"
                defaultValue={1}
                min={1}
                max={10}
                step={1}
                data-decimals={0}
                required
              />
            </div>
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
          <div className="product-details-footer">
            <div className="product-cat">
              <span>Category:</span>
              <a href="#" style={{ textDecoration: "none" }}>
                Women
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
    </>
  );
};

export default ProductDetail;
