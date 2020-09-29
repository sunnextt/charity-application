import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <div className="navbar-div">
          <nav className="main">
            <ul className="main-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about_us">About Us</Link>
              </li>
              <li>
                <Link to="/contact_us">Contact Us</Link>
              </li>
              <li>
                <Link to="/blogs">News/Blogs</Link>
              </li>
              <li className="with-submenu">
                  Register&nbsp;
                  <ion-icon
                    className="icon-brand"
                    name="chevron-down-outline"
                  ></ion-icon>
                <ul className="submenu">
                  <li>
                    <Link to="/registration_policy">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="donation">
              <a className="donation-btn" href="www.domain.com/donation">
                DONATION
              </a>
            </div>
          </nav>


        </div>
    </div>
  );
}

export default Navbar;
