import React from 'react';

const BrowseCategory = (props) => {
    return (
        <div>
            <div className="dropdown category-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
                title="Browse Categories"
              >
                Browse Categories <i className="icon-angle-down" />
              </a>
              <div className="dropdown-menu">
                <nav className="side-nav">
                  <ul
                    className="menu-vertical sf-arrows sf-js-enabled"
                    style={{ touchAction: "pan-y" }}
                  >
                    <li>
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">man</a>
                    </li>
                    <li>
                      <a href="#">women</a>
                    </li>
                    <li>
                      <a href="#">Jewellery</a>
                    </li>
                    <li>
                      <a href="#">Electronics</a>
                    </li>
                  </ul>
                  {/* End .menu-vertical */}
                </nav>
                {/* End .side-nav */}
              </div>
              {/* End .dropdown-menu */}
            </div>
        </div>
    );
}

export default BrowseCategory;