import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    var element = document.createElement("link");
    element.type = "text/css";
    element.rel = "stylesheet";
    element.id = "adminCSS";
    element.href = "/dist/css/adminlte.min.css";
    console.log("asdas", element);

    document.getElementsByTagName("head")[0].appendChild(element);

    // return () => document.getElementById("adminCSS")?.remove();
  }, []);
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          <button type="button" className="btn btn-outline-primary mr-2 mt-1 mb-1">
            Log Out
          </button>
        </ul>
      </nav>
      {/* /.navbar */}
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: "0.8" }}
          />
          <span className="brand-text font-weight-light">Inexture Admin</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          {/* SidebarSearch Form */}
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="/admin/users" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Users</p>
                </Link>
                {/* <a href="user.html" className="nav-link"> */}
                {/* </a> */}
              </li>
              <li className="nav-item">
                <Link to="/admin/products" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Products</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/orders" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Orders</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Header;
