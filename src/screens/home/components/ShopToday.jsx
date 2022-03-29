import React from 'react'

function ShopToday() {
  return (
    <div>
 <div className="container">
        <div className="cta cta-border mb-5" style={{backgroundImage: 'url(assets/images/demos/demo-4/bg-1.jpg)'}}>
          <img src="assets/images/demos/demo-4/camera.png" alt="camera" className="cta-img" />
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="cta-content">
                <div className="cta-text text-right text-white">
                  <p>Shop Today’s Deals <br /><strong>Awesome Made Easy. HERO7 Black</strong></p>
                </div>{/* End .cta-text */}
                <a href="#" className="btn btn-primary btn-round"><span>Shop Now - $429.99</span><i className="icon-long-arrow-right" /></a>
              </div>{/* End .cta-content */}
            </div>{/* End .col-md-12 */}
          </div>{/* End .row */}
        </div>{/* End .cta */}
      </div>{/* End .container */}

    </div>
  )
}

export default ShopToday