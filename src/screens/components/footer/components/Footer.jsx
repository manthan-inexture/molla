import React from "react";

function Footer() {
  return (
   <div>
      <footer className="footer">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="widget widget-about">
                  <img
                    src="assets/images/demos/demo-4/logo-footer.png"
                    className="footer-logo"
                    alt="Footer Logo"
                    width={105}
                    height={25}
                  />
                  <p>
                    Praesent dapibus, neque id cursus ucibus, tortor neque
                    egestas augue, eu vulputate magna eros eu erat.{" "}
                  </p>
                
                </div>
                {/* End .widget about-widget */}
              </div>
              {/* End .col-sm-6 col-lg-3 */}
              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title">Useful Links</h4>
                  {/* End .widget-title */}
                  <ul className="widget-list">
                    <li>
                      <a href="about.html">About Molla</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                  </ul>
                  {/* End .widget-list */}
                </div>
                {/* End .widget */}
              </div>
              {/* End .col-sm-6 col-lg-3 */}
              
              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>
                  {/* End .widget-title */}
                  <ul className="widget-list">
                    <li>
                      <a href="#">Sign In</a>
                    </li>
                    <li>
                      <a href="cart.html">View Cart</a>
                    </li>
                   
                  </ul>
                  {/* End .widget-list */}
                </div>
                {/* End .widget */}
                </div>
                <div className="col-sm-6 col-lg-3">
                <div className="widget-call">
                    <i className="icon-phone" />
                    Got Question? Call us 24/7
                    <a href="tel:#">+0123 456 789</a>
                  </div>
                  {/* End .widget-call */}
               
                </div>

              {/* End .col-sm-6 col-lg-3 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .footer-middle */}
        <div className="footer-bottom">
          <div className="container">
            <p className="footer-copyright">
              Copyright © 2019 Molla Store. All Rights Reserved.
            </p>
            {/* End .footer-copyright */}
            <figure className="footer-payments">
              <img
                src="assets/images/payments.png"
                alt="Payment methods"
                width={272}
                height={20}
              />
            </figure>
            {/* End .footer-payments */}
          </div>
          {/* End .container */}
        </div>
        {/* End .footer-bottom */}
      </footer>
      {/* End .footer */}
    </div>
  );
}

export default Footer;
