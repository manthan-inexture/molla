import React from 'react'

function NewArrivals() {

  return (
    <div>
       <div className="container new-arrivals">
        <div className="heading heading-flex mb-3">
          <div className="heading-left">
            <h2 className="title">New Arrivals</h2>{/* End .title */}
          </div>{/* End .heading-left */}
          <div className="heading-right">
            <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab" role="tab" aria-controls="new-all-tab" aria-selected="true">All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="new-tv-link" data-toggle="tab" href="#new-tv-tab" role="tab" aria-controls="new-tv-tab" aria-selected="false">MAN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="new-computers-link" data-toggle="tab" href="#new-computers-tab" role="tab" aria-controls="new-computers-tab" aria-selected="false">WOMEN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="new-phones-link" data-toggle="tab" href="#new-phones-tab" role="tab" aria-controls="new-phones-tab" aria-selected="false">JEWELLERY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="new-watches-link" data-toggle="tab" href="#new-watches-tab" role="tab" aria-controls="new-watches-tab" aria-selected="false">ELECTRONICS</a>
              </li>
            </ul>
          </div>{/* End .heading-right */}
        </div>{/* End .heading */}

        <div className="tab-content tab-content-carousel just-action-icons-sm">
          <div className="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
            <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                    &quot;nav&quot;: true, 
                                    &quot;dots&quot;: true,
                                    &quot;margin&quot;: 20,
                                    &quot;loop&quot;: false,
                                    &quot;responsive&quot;: {
                                        &quot;0&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;480&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;768&quot;: {
                                            &quot;items&quot;:3
                                        },
                                        &quot;992&quot;: {
                                            &quot;items&quot;:4
                                        },
                                        &quot;1200&quot;: {
                                            &quot;items&quot;:5
                                        }
                                    }
                                }">


              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}

                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $1,199.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}
                  
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $79.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $899.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                 
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                 
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cell Phone</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>{/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                  </div>{/* End .product-nav */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">TV &amp; Home Theater</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Samsung - 55" Class  LED 2160p Smart</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $899.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $1,199.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .owl-carousel */}
          </div>{/* .End .tab-pane */}
          <div className="tab-pane p-0 fade" id="new-tv-tab" role="tabpanel" aria-labelledby="new-tv-link">
            <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                    &quot;nav&quot;: true, 
                                    &quot;dots&quot;: true,
                                    &quot;margin&quot;: 20,
                                    &quot;loop&quot;: false,
                                    &quot;responsive&quot;: {
                                        &quot;0&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;480&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;768&quot;: {
                                            &quot;items&quot;:3
                                        },
                                        &quot;992&quot;: {
                                            &quot;items&quot;:4
                                        },
                                        &quot;1200&quot;: {
                                            &quot;items&quot;:5
                                        }
                                    }
                                }">
              <div className="product product-2">
                <figure className="product-media">
                
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $899.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                 
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $79.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                 
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cell Phone</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>{/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                  </div>{/* End .product-nav */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">TV &amp; Home Theater</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Samsung - 55" Class  LED 2160p Smart</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $899.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $1,199.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .owl-carousel */}
          </div>{/* .End .tab-pane */}
          <div className="tab-pane p-0 fade" id="new-computers-tab" role="tabpanel" aria-labelledby="new-computers-link">
            <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                    &quot;nav&quot;: true, 
                                    &quot;dots&quot;: true,
                                    &quot;margin&quot;: 20,
                                    &quot;loop&quot;: false,
                                    &quot;responsive&quot;: {
                                        &quot;0&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;480&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;768&quot;: {
                                            &quot;items&quot;:3
                                        },
                                        &quot;992&quot;: {
                                            &quot;items&quot;:4
                                        },
                                        &quot;1200&quot;: {
                                            &quot;items&quot;:5
                                        }
                                    }
                                }">
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">TV &amp; Home Theater</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Samsung - 55" Class  LED 2160p Smart</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $899.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $1,199.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $899.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                 
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $79.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                 
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cell Phone</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>{/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                  </div>{/* End .product-nav */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .owl-carousel */}
          </div>{/* .End .tab-pane */}
          <div className="tab-pane p-0 fade" id="new-phones-tab" role="tabpanel" aria-labelledby="new-phones-link">
            <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                    &quot;nav&quot;: true, 
                                    &quot;dots&quot;: true,
                                    &quot;margin&quot;: 20,
                                    &quot;loop&quot;: false,
                                    &quot;responsive&quot;: {
                                        &quot;0&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;480&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;768&quot;: {
                                            &quot;items&quot;:3
                                        },
                                        &quot;992&quot;: {
                                            &quot;items&quot;:4
                                        },
                                        &quot;1200&quot;: {
                                            &quot;items&quot;:5
                                        }
                                    }
                                }">
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $1,199.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $79.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $899.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                 
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">TV &amp; Home Theater</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Samsung - 55" Class  LED 2160p Smart</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $899.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $1,199.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                 
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cell Phone</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>{/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                  </div>{/* End .product-nav */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .owl-carousel */}
          </div>{/* .End .tab-pane */}
          <div className="tab-pane p-0 fade" id="new-watches-tab" role="tabpanel" aria-labelledby="new-watches-link">
            <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                    &quot;nav&quot;: true, 
                                    &quot;dots&quot;: true,
                                    &quot;margin&quot;: 20,
                                    &quot;loop&quot;: false,
                                    &quot;responsive&quot;: {
                                        &quot;0&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;480&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;768&quot;: {
                                            &quot;items&quot;:3
                                        },
                                        &quot;992&quot;: {
                                            &quot;items&quot;:4
                                        },
                                        &quot;1200&quot;: {
                                            &quot;items&quot;:5
                                        }
                                    }
                                }">
              <div className="product product-2">
                <figure className="product-media">
  
                 
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cell Phone</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$35.41</span>
                    <span className="old-price">Was $41.67</span>
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 10 Reviews )</span>
                  </div>{/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                    <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                  </div>{/* End .product-nav */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $1,199.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $79.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $899.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                 
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .owl-carousel */}
          </div>{/* .End .tab-pane */}
          <div className="tab-pane p-0 fade" id="new-acc-tab" role="tabpanel" aria-labelledby="new-acc-link">
            <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                    &quot;nav&quot;: true, 
                                    &quot;dots&quot;: true,
                                    &quot;margin&quot;: 20,
                                    &quot;loop&quot;: false,
                                    &quot;responsive&quot;: {
                                        &quot;0&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;480&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;768&quot;: {
                                            &quot;items&quot;:3
                                        },
                                        &quot;992&quot;: {
                                            &quot;items&quot;:4
                                        },
                                        &quot;1200&quot;: {
                                            &quot;items&quot;:5
                                        }
                                    }
                                }">
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $1,199.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">TV &amp; Home Theater</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Samsung - 55" Class  LED 2160p Smart</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $899.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 5 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $1,199.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $79.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                
                  <a href="product.html">
                    <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Tablets</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                  <div className="product-price">
                    $899.99
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>{/* End .rating-container */}
                 
                </div>{/* End .product-body */}
              </div>{/* End .product */}
            </div>{/* End .owl-carousel */}
          </div>{/* .End .tab-pane */}
        </div>{/* End .tab-content */}
      </div>{/* End .container */}

    </div>
  )
}

export default NewArrivals

