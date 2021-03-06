import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { isNotSignin } from "../../../../redux/users/actions"
function TopHeader() {
  const dispatch = useDispatch();
  const islog = localStorage.getItem("islogin");
  let navigate = useNavigate();
  const handlelogout = () => {
    // dispatch(isNotSignin());
    localStorage.setItem("islogin", false);
    navigate("/signin");
  };
  // const islogin = useSelector((state) => state.usersignin.isauth);
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <a href="tel:#">
              <i className="icon-phone" />
              Call: +0123 456 789
            </a>
          </div>

          <div className="header-right">
            <ul className="top-menu">
              <li>
                {/* <a href="#">Links</a> */}
                <ul>
                  <li>
                    {islog == "true" ? (
                      <button
                        className="pe-auto btn btn-light"
                        onClick={handlelogout}
                      >
                        Logout
                      </button>
                    ) : (
                      <Link to="/signin" data-toggle="modal">
                        Sign in / Sign up
                      </Link>
                    )}
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
