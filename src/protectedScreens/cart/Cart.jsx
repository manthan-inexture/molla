import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { adjustQty, removeToCart } from "../../redux/cart/cartAction";

const Cart = () => {
  const { cart } = useSelector((state) => state.cardItems);
  console.log(cart);
  const dispatch = useDispatch();

  const qtyAdjust = (id, val) => {
    console.log(val);
    console.log(id);
    dispatch(adjustQty(id, val))
  }

  const removeItem = (id) => {
    console.log(id);
    dispatch(removeToCart(id));
  }

  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log(cart);
    let price = 0;
    cart.map((e) => {
      price += e.qty * e.price;
    })
    setPrice(price)
  }, [cart])
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
                    {
                      cart.map((data) => {
                        return (
                          <>
                            <tbody>
                              <tr>
                                <td className="product-col">
                                  <div className="product" style={{ height: "100px" }}>
                                    <figure className="product-media">
                                      <a href="#">
                                        <img
                                          src={data.image}
                                          alt="Product image"
                                        />
                                      </a>
                                    </figure>
                                    <h3 className="product-title">
                                      <a href="#" style={{ textDecoration: "none" }}>
                                        {data.title}
                                      </a>
                                    </h3>
                                    {/* End .product-title */}
                                  </div>
                                  {/* End .product */}
                                </td>
                                <td className="price-col">${data.price}</td>
                                <td className="quantity-col">
                                  <div className="cart-product-quantity">
                                    <input
                                      type="number"
                                      className="form-control"
                                      defaultValue={1}
                                      min={1}
                                      max={10}
                                      step={1}
                                      value={data.qty}
                                      data-decimals={0}
                                      onKeyDown={(e) => e.preventDefault()}
                                      required
                                      onChange={(e) => qtyAdjust(data.id, e.target.value)}
                                    />
                                  </div>
                                  {/* End .cart-product-quantity */}
                                </td>
                                <td className="total-col">${(data.price * data.qty).toFixed(2)}</td>
                                <td className="remove-col">
                                  <button className="btn-remove">
                                    <i onClick={() => removeItem(data.id)} className="icon-close" />
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </>
                        )
                      })
                    }
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
                          <td>${price}</td>
                        </tr>
                        {/* End .summary-subtotal */}

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
                          <td>${(price + totalPrice).toFixed(2)}</td>
                        </tr>
                        {/* End .summary-total */}
                      </tbody>
                    </table>
                    {/* End .table table-summary */}
                    <NavLink
                      to="/checkout"
                      className="btn btn-outline-primary-2 btn-order btn-block shadow-none"
                      style={{ border: "1px solid #c96", fontSize: "1.4rem" }}
                    >
                      PROCEED TO CHECKOUT
                    </NavLink>
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
