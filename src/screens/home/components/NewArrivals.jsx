import React from 'react'
import { useSelector } from 'react-redux'

function NewArrivals() {
  const AllProducts = useSelector(state => state.product.data)
  // console.log(AllProducts)

  const currentProducts = AllProducts.slice(0,4)
  // console.log(currentProducts)
  return (
    <div>
           <div className="container new-arrivals">
        <div className="heading heading-flex mb-3">
          <div className="heading-left">
            <h2 className="title">New Arrivals</h2>{/* End .title */}
          </div>{/* End .heading-left */}
         
        </div>{/* End .heading */}

        <div className="tab-content tab-content-carousel just-action-icons-sm">
          <div className="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
           <div className='row'>
             {currentProducts.map(product => (
               <>
               <div className='col-md-3' key={product.id}>
             <div className="product product-2">
                <figure className="product-media">
  

                    <img style={{height: '200px'}} src={product.image} alt="Product image" className="product-image" />
              
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                  </div>{/* End .product-action */}

                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">{product.category}</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">{product.title}</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    ${product.price}
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: `${product.rating.rate * 20}%`}} />{/* End .ratings-val */}
                      {product.rating.rate}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( {product.rating.count} Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
             </div>
              
               </>
              
             ))}
             
            </div>
            
          </div>{/* .End .tab-pane */}
         
        </div>{/* End .tab-content */}
      </div>{/* End .container */}

    </div>
  )
}

export default NewArrivals

