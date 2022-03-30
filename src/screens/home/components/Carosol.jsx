import React from "react";
import {
  Link
} from "react-router-dom";
export default function Carosol() {
  return (
    <main className="main">
      <div className="intro-slider-container mb-5">
        <div
          className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
          style={
            {
              display: "flex"
            }
          }
          data-toggle="owl"
          data-owl-options='{
                    "dots": true,
                    "nav": false, 
                    "responsive": {
                        "1200": {
                            "nav": true,
                            "dots": true
                        }
                    }
                }'
        >
          <div
            className="intro-slide"
            style={{
              backgroundImage:
                "url(assets/images/demos/demo-4/slider/slide-1.png)",
            }}
          >
            <div className="container intro-content">
              <div className="row justify-content-end">
                <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                  <h3 className="intro-subtitle text-third">
                    Deals and Promotions
                  </h3>
                  {/* End .h3 intro-subtitle */}
                  <h1 className="intro-title">Beats by</h1>
                  <h1 className="intro-title">Dre Studio 3</h1>
                  {/* End .intro-title */}
                  <div className="intro-price">
                    <sup className="intro-old-price">$349,95</sup>
                    <span className="text-third">
                      $279<sup>.99</sup>
                    </span>
                  </div>
                  {/* End .intro-price */}
                  <Link to="/shop" className="btn btn-primary btn-round">
                    <span>Shop More</span>
                    <i className="icon-long-arrow-right" />
                  </Link>
                </div>
                {/* End .col-lg-11 offset-lg-1 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .intro-content */}
          </div>
          {/* End .intro-slide */}
          <div
            className="intro-slide"
            style={{
              backgroundImage:
                "url(../assets/images/demos/demo-4/slider/slide-2.png)",
            }}
          >
            <div className="container intro-content">
              <div className="row justify-content-end">
                <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                  <h3 className="intro-subtitle text-primary">New Arrival</h3>
                  {/* End .h3 intro-subtitle */}
                  <h1 className="intro-title">
                    Apple iPad Pro <br />
                    12.9 Inch, 64GB{" "}
                  </h1>
                  {/* End .intro-title */}
                  <div className="intro-price">
                    <sup>Today:</sup>
                    <span className="text-primary">
                      $999<sup>.99</sup>
                    </span>
                  </div>
                  {/* End .intro-price */}
                  <Link to="/shop" className="btn btn-primary btn-round">
                    <span>Shop More</span>
                    <i className="icon-long-arrow-right" />
                  </Link>
                </div>
                {/* End .col-md-6 offset-md-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .intro-content */}
          </div>
          {/* End .intro-slide */}
        </div>
        {/* End .intro-slider owl-carousel owl-simple */}
     
      </div>
      {/* End .intro-slider-container */}
    </main>
  );
}
