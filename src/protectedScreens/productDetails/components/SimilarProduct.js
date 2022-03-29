import React from "react";

const SimilarProduct = () => {
  return (
    <>
      <div
        className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
        data-toggle="owl"
        data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                },
                                "1200": {
                                    "items":4,
                                    "nav": true,
                                    "dots": false
                                }
                            }
                        }'
      >
        <div className="product product-7 text-center">
          <figure className="product-media">
            <a href="product.html">
              <img
                src="assets/images/products/product-4.jpg"
                alt="Product image"
                className="product-image"
              />
            </a>

            <div className="product-action">
              <a
                href="#"
                className="btn-product btn-cart"
                style={{ textDecoration: "none" }}
              >
                <span>add to cart</span>
              </a>
            </div>
          </figure>
          <div className="product-body">
            <div className="product-cat">
              <a href="#" style={{ textDecoration: "none" }}>
                Women
              </a>
            </div>
            <h3 className="product-title">
              <a href="product.html" style={{ textDecoration: "none" }}>
                Brown paperbag waist pencil skirt
              </a>
            </h3>
            <div className="product-price">$60.00</div>
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "20%" }} />
              </div>
              <span className="ratings-text">( 2 Reviews )</span>
            </div>
          </div>
        </div>
        <div className="product product-7 text-center">
          <figure className="product-media">
            <a href="product.html">
              <img
                src="assets/images/products/product-6.jpg"
                alt="Product image"
                className="product-image"
              />
            </a>

            <div className="product-action">
              <a
                href="#"
                className="btn-product btn-cart"
                style={{ textDecoration: "none" }}
              >
                <span>add to cart</span>
              </a>
            </div>
          </figure>
          <div className="product-body">
            <div className="product-cat">
              <a href="#" style={{ textDecoration: "none" }}>
                Jackets
              </a>
            </div>
            <h3 className="product-title">
              <a href="product.html" style={{ textDecoration: "none" }}>
                Khaki utility boiler jumpsuit
              </a>
            </h3>
            <div className="product-price">$120.00</div>
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "80%" }} />
              </div>
              <span className="ratings-text">( 6 Reviews )</span>
            </div>
          </div>
        </div>
        <div className="product product-7 text-center">
          <figure className="product-media">
            <a href="product.html">
              <img
                src="assets/images/products/product-11.jpg"
                alt="Product image"
                className="product-image"
              />
            </a>

            <div className="product-action">
              <a
                href="#"
                className="btn-product btn-cart"
                style={{ textDecoration: "none" }}
              >
                <span>add to cart</span>
              </a>
            </div>
          </figure>
          <div className="product-body">
            <div className="product-cat">
              <a href="#" style={{ textDecoration: "none" }}>
                Shoes
              </a>
            </div>
            <h3 className="product-title">
              <a href="product.html" style={{ textDecoration: "none" }}>
                Light brown studded Wide fit wedges
              </a>
            </h3>
            <div className="product-price">$110.00</div>
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "80%" }} />
              </div>
              <span className="ratings-text">( 1 Reviews )</span>
            </div>
          </div>
        </div>
        <div className="product product-7 text-center">
          <figure className="product-media">
            <a href="product.html">
              <img
                src="assets/images/products/product-10.jpg"
                alt="Product image"
                className="product-image"
              />
            </a>

            <div className="product-action">
              <a
                href="#"
                className="btn-product btn-cart"
                style={{ textDecoration: "none" }}
              >
                <span>add to cart</span>
              </a>
            </div>
          </figure>
          <div className="product-body">
            <div className="product-cat">
              <a href="#" style={{ textDecoration: "none" }}>
                Jumpers
              </a>
            </div>
            <h3 className="product-title">
              <a href="product.html" style={{ textDecoration: "none" }}>
                Yellow button front tea top
              </a>
            </h3>
            <div className="product-price">$56.00</div>
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "0%" }} />
              </div>
              <span className="ratings-text">( 0 Reviews )</span>
            </div>
          </div>
        </div>
        <div className="product product-7 text-center">
          <figure className="product-media">
            <a href="product.html">
              <img
                src="assets/images/products/product-7.jpg"
                alt="Product image"
                className="product-image"
              />
            </a>

            <div className="product-action">
              <a
                href="#"
                className="btn-product btn-cart"
                style={{ textDecoration: "none" }}
              >
                <span>add to cart</span>
              </a>
            </div>
          </figure>
          <div className="product-body">
            <div className="product-cat">
              <a href="#" style={{ textDecoration: "none" }}>
                Jeans
              </a>
            </div>
            <h3 className="product-title">
              <a href="product.html" style={{ textDecoration: "none" }}>
                Blue utility pinafore denim dress
              </a>
            </h3>
            <div className="product-price">$76.00</div>
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "20%" }} />
              </div>
              <span className="ratings-text">( 2 Reviews )</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilarProduct;
