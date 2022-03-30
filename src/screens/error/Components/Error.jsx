import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
         <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                404
              </li>
            </ol>
          </div>
          {/* End .container */}
        </nav>
        {/* End .breadcrumb-nav */}
        <div
          className="error-content text-center"
          style={{
            backgroundImage: "url(assets/images/backgrounds/error-bg.jpg)",
          }}
        >
          <div className="container">
            <h1 className="error-title">Error 404</h1>
            {/* End .error-title */}
            <p>We are sorry, the page you've requested is not available.</p>
           <Link to="/"
              className="btn btn-outline-primary-2 btn-minwidth-lg"
            >
              <span>BACK TO HOMEPAGE</span>
              <i className="icon-long-arrow-right" />
            </Link>
          </div>
          {/* End .container */}
        </div>
        {/* End .error-content text-center */}
      </main>
      {/* End .main */}
    </div>
  )
}

export default Error