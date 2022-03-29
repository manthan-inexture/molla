import React from 'react'

function PupularDeales() {
  return (
    <div>
<div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img src="assets/images/demos/demo-4/banners/banner-1.png" alt="Banner" />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle"><a href="#">Smart Offer</a></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><a href="#">Save $150 <strong>on Samsung <br />Galaxy Note9</strong></a></h3>{/* End .banner-title */}
                <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></a>
              </div>{/* End .banner-content */}
            </div>{/* End .banner */}
          </div>{/* End .col-md-4 */}
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img src="assets/images/demos/demo-4/banners/banner-2.jpg" alt="Banner" />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle"><a href="#">Time Deals</a></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><a href="#"><strong>Bose SoundSport</strong> <br />Time Deal -30%</a></h3>{/* End .banner-title */}
                <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></a>
              </div>{/* End .banner-content */}
            </div>{/* End .banner */}
          </div>{/* End .col-md-4 */}
          <div className="col-md-6 col-lg-4">
            <div className="banner banner-overlay banner-overlay-light">
              <a href="#">
                <img src="assets/images/demos/demo-4/banners/banner-3.png" alt="Banner" />
              </a>
              <div className="banner-content">
                <h4 className="banner-subtitle"><a href="#">Clearance</a></h4>{/* End .banner-subtitle */}
                <h3 className="banner-title"><a href="#"><strong>GoPro - Fusion 360</strong> <br />Save $70</a></h3>{/* End .banner-title */}
                <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right" /></a>
              </div>{/* End .banner-content */}
            </div>{/* End .banner */}
          </div>{/* End .col-lg-4 */}
        </div>{/* End .row */}
      </div>{/* End .container */}

    </div>
  )
}

export default PupularDeales