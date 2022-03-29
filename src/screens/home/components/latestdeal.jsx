import React from 'react'

function latestdeal() {
  return (
    <div>
          <div className="cta bg-image bg-dark pt-4 pb-5 mb-0" style={{backgroundImage: 'url(assets/images/demos/demo-4/bg-5.jpg)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-6">
                <div className="cta-heading text-center">
                  <h3 className="cta-title text-white">Get The Latest Deals</h3>{/* End .cta-title */}
                  <p className="cta-desc text-white">and receive <span className="font-weight-normal">$20 coupon</span> for first shopping</p>{/* End .cta-desc */}
                </div>{/* End .text-center */}
                <form action="#">
                  <div className="input-group input-group-round">
                    <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right" /></button>
                    </div>{/* .End .input-group-append */}
                  </div>{/* .End .input-group */}
                </form>
              </div>{/* End .col-sm-10 col-md-8 col-lg-6 */}
            </div>{/* End .row */}
          </div>{/* End .container */}
        </div>{/* End .cta */}
    </div>
  )
}

export default latestdeal