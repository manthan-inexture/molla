import React from "react";
import {Link} from "react-router-dom"
function TopHeader() {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <a href="tel:#">
              <i className="icon-phone"></i>Call: +0123 456 789
            </a>
          </div>

          <div className="header-right">
            <ul className="top-menu">
              <li>
                {/* <a href="#">Links</a> */}
                <ul>
                  <li>
                    <Link to="/signin" data-toggle="modal">
                      Sign in / Sign up
                      </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
