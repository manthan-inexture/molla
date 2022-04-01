import React from 'react';

function Product({product}) {
    const {id, title, category, description, price, rating, image} = product;
    return (
        <div style={{width: '20%', float: 'left'}}>
            <div className="product product-2">
                <figure className="product-media">
  
                  <a href="product.html">
                    <img src={image} alt="Product image" className="product-image" />
                  </a>
                  
                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                 
                  </div>{/* End .product-action */}
                </figure>{/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">{category}</a>
                  </div>{/* End .product-cat */}
                  <h3 className="product-title"><a href="product.html">{title}</a></h3>{/* End .product-title */}
                  <div className="product-price">
                    ${price}
                  </div>{/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: `${rating.rate * 20}%`}} />{/* End .ratings-val */}
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( {rating.rate} Reviews )</span>
                  </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
              </div>{/* End .product */}
        </div>
    );
}

export default Product;