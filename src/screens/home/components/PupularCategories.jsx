import React from 'react'

function PupularCategories() {
  return (

  <div className="container">
    <h2 className="title text-center mb-4">Explore Popular Categories</h2>{/* End .title text-center */}
    <div className="cat-blocks-container">
      <div className="row">
        <div className="col-6 mx-auto col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img src="assets/images/demos/demo-4/cats/1.png" alt="Category image" />
              </span>
            </figure>
            <h3 className="cat-block-title">All</h3>{/* End .cat-block-title */}
          </a>
        </div>{/* End .mx-auto col-lg-2 */}
        <div className="col-6 mx-auto col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img src="assets/images/demos/demo-4/cats/2.png" alt="Category image" />
              </span>
            </figure>
            <h3 className="cat-block-title">man</h3>{/* End .cat-block-title */}
          </a>
        </div>{/* End .mx-auto col-lg-2 */}
        <div className="col-6 mx-auto col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img src="assets/images/demos/demo-4/cats/3.png" alt="Category image" />
              </span>
            </figure>
            <h3 className="cat-block-title">women</h3>{/* End .cat-block-title */}
          </a>
        </div>{/* End .mx-auto col-lg-2 */}
        <div className="col-6 mx-auto col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img src="assets/images/demos/demo-4/cats/4.png" alt="Category image" />
              </span>
            </figure>
            <h3 className="cat-block-title">Jewellery</h3>{/* End .cat-block-title */}
          </a>
        </div>{/* End .mx-auto col-lg-2 */}
        <div className="col-6 mx-auto col-lg-2">
          <a href="category.html" className="cat-block">
            <figure>
              <span>
                <img src="assets/images/demos/demo-4/cats/5.png" alt="Category image" />
              </span>
            </figure>
            <h3 className="cat-block-title">Electronics</h3>{/* End .cat-block-title */}
          </a>
        </div>{/* End .mx-auto col-lg-2 */}
      
      </div>{/* End .row */}
    </div>{/* End .cat-blocks-container */}
  </div> 
  )
}

export default PupularCategories
