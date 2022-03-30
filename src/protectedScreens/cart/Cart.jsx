import React from "react";

const Cart = () => {
  return (
    <>
      <div className="page-content">
        <main className="main">
          <div
            className="page-header text-center"
            style={{
              backgroundImage: 'url("assets/images/page-header-bg.jpg")',
            }}
          >
            <div className="container">
              <h1 className="page-title">
                Checkout<span>Shops</span>
              </h1>
            </div>
            {/* End .container */}
          </div>
          {/* End .page-header */}

          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Shop</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Checkout
                </li>
              </ol>
            </div>
            {/* End .container */}
          </nav>
          {/* End .breadcrumb-nav */}

          <div className="cart">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <table className="table table-cart table-mobile">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-col">
                          <div className="product" style={{ height: "100px" }}>
                            <figure className="product-media">
                              <a href="#">
                                <img
                                  src="assets/images/products/table/product-1.jpg"
                                  alt="Product image"
                                />
                              </a>
                            </figure>
                            <h3 className="product-title">
                              <a href="#" style={{ textDecoration: "none" }}>
                                Beige knitted elastic runner shoes
                              </a>
                            </h3>
                            {/* End .product-title */}
                          </div>
                          {/* End .product */}
                        </td>
                        <td className="price-col">$84.00</td>
                        <td className="quantity-col">
                          <div className="cart-product-quantity">
                            <input
                              type="number"
                              className="form-control"
                              defaultValue={1}
                              min={1}
                              max={10}
                              step={1}
                              data-decimals={0}
                              required
                            />
                          </div>
                          {/* End .cart-product-quantity */}
                        </td>
                        <td className="total-col">$84.00</td>
                        <td className="remove-col">
                          <button className="btn-remove">
                            <i className="icon-close" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* End .table table-wishlist */}
                  <div className="cart-bottom">
                    <div className="cart-discount">
                      <form action="#">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control shadow-none"
                            required
                            placeholder="coupon code"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-primary-2"
                              style={{
                                border: "1px solid #c96",
                                fontSize: "1.4rem",
                              }}
                              type="submit"
                            >
                              <i className="icon-long-arrow-right" />
                            </button>
                          </div>
                          {/* .End .input-group-append */}
                        </div>
                        {/* End .input-group */}
                      </form>
                    </div>
                    {/* End .cart-discount */}
                    <a
                      href="#"
                      className="btn btn-outline-dark-2 shadow-none"
                      style={{ border: "1px solid #c96" }}
                    >
                      <span>UPDATE CART</span>
                      <i className="icon-refresh" />
                    </a>
                  </div>
                  {/* End .cart-bottom */}
                </div>
                {/* End .col-lg-9 */}
                <aside className="col-lg-3">
                  <div className="summary summary-cart">
                    <h3 className="summary-title">Cart Total</h3>
                    {/* End .summary-title */}
                    <table className="table table-summary">
                      <tbody>
                        <tr className="summary-subtotal">
                          <td>Subtotal:</td>
                          <td>$160.00</td>
                        </tr>
                        {/* End .summary-subtotal */}
                        <tr className="summary-shipping">
                          <td>Shipping:</td>
                          <td>&nbsp;</td>
                        </tr>
                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="free-shipping"
                                name="shipping"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="free-shipping"
                              >
                                Free Shipping
                              </label>
                            </div>
                            {/* End .custom-control */}
                          </td>
                          <td>$0.00</td>
                        </tr>
                        {/* End .summary-shipping-row */}
                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="standart-shipping"
                                name="shipping"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="standart-shipping"
                              >
                                Standart:
                              </label>
                            </div>
                            {/* End .custom-control */}
                          </td>
                          <td>$10.00</td>
                        </tr>
                        {/* End .summary-shipping-row */}
                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="express-shipping"
                                name="shipping"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="express-shipping"
                              >
                                Express:
                              </label>
                            </div>
                            {/* End .custom-control */}
                          </td>
                          <td>$20.00</td>
                        </tr>
                        {/* End .summary-shipping-row */}
                        <tr className="summary-shipping-estimate">
                          <td>
                            Estimate for Your Country
                            <br />{" "}
                            <a
                              href="dashboard.html"
                              style={{ textDecoration: "none" }}
                            >
                              Change address
                            </a>
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                        {/* End .summary-shipping-estimate */}
                        <tr className="summary-total">
                          <td>Total:</td>
                          <td>$160.00</td>
                        </tr>
                        {/* End .summary-total */}
                      </tbody>
                    </table>
                    {/* End .table table-summary */}
                    <a
                      href="checkout.html"
                      className="btn btn-outline-primary-2 btn-order btn-block shadow-none"
                      style={{ border: "1px solid #c96", fontSize: "1.4rem" }}
                    >
                      PROCEED TO CHECKOUT
                    </a>
                  </div>
                  {/* End .summary */}
                  <a
                    href="category.html"
                    className="btn btn-outline-dark-2 btn-block mb-3"
                  >
                    <span>CONTINUE SHOPPING</span>
                    <i className="icon-refresh" />
                  </a>
                </aside>
                {/* End .col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
          {/* End .cart */}
        </main>
      </div>
      {/* End .page-content */}
    </>
  );
};

export default Cart;
