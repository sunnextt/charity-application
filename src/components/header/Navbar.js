import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-div">
      <nav className="navbar navbar-expand-lg  navbar-dark navigation">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navigation-menu">
            <li className="navigation-menu-list">
              <Link className="navigation-menu-list-link" to="/">
                Home
              </Link>
            </li>
            <li className="navigation-menu-list">
              <Link className="navigation-menu-list-link" to="/about_us">
                About Us
              </Link>
            </li>
            <li className="navigation-menu-list">
              <Link className="navigation-menu-list-link" to="/contact_us">
                Contact Us
              </Link>
            </li>
            <li className="navigation-menu-list">
              <Link className="navigation-menu-list-link" to="/blogs">
                News/Blogs
              </Link>
            </li>
            <li className="navigation-submenu">
              Register&nbsp;
              <ion-icon
                className="icon-brand"
                name="chevron-down-outline"
              ></ion-icon>
              <ul className="navigation-submenu-item">
                <li className="navigation-submenu-list">
                  <Link to="/registration_policy">Register</Link>
                </li>
                <li className="navigation-submenu-list">
                  <Link to="/login_form">Login</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="donation">
          <a className="donation-btn" href="www.domain.com/donation">
            DONATION
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
