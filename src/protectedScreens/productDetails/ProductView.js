import React from "react";
import ProductDescription from "./components/ProductDescription";
import ProductDetail from "./components/ProductDetail";
import ProductImageViews from "./components/ProductImageViews";
import SimilarProduct from "./components/SimilarProduct";
import StickyBar from "./components/StickyBar";

const ProductView = () => {
  return (
    <div>
      <div className="page-wrapper">
        <main className="main">
          <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
            <div className="container d-flex align-items-center">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html" style={{ textDecoration: "none" }}>
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#" style={{ textDecoration: "none" }}>
                    Products
                  </a>
                </li>
              </ol>
            </div>
          </nav>
          <div className="page-content">
            <div className="container">
              {/*  ProductDetails component start*/}
              <div className="product-details-top">
                <div className="row">
                  <ProductImageViews />

                  <ProductDetail />
                </div>
              </div>
              {/* ProductDetails component end */}

              {/* product descripction start */}
              <ProductDescription />
              {/* product descripction end */}

              {/* similar product start */}
              <h2 className="title text-center mb-4">You May Also Like</h2>
              <SimilarProduct />
              {/* similar product end */}
            </div>
          </div>
        </main>
      </div>
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
      <StickyBar />
    </div>
  );
};

export default ProductView;
