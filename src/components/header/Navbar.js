import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar-div">
        <nav className="navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
          <label htmlFor="navi-toggle" className="navigation__button"><span><ion-icon name="menu-outline"></ion-icon></span></label>
          <div className="navigation__background">&nbsp;</div>
          <ul className="navigation-menu">
            <li className="navigation-menu-list">
              <Link className="navigation-menu-list-link" to="/">Home</Link>
            </li>
            <li className="navigation-menu-list">
              <Link className="navigation-menu-list-link" to="/about_us">About Us</Link>
            </li>
            <li className="navigation-menu-list">
              <Link  className="navigation-menu-list-link"to="/contact_us">Contact Us</Link>
            </li>
            <li className="navigation-menu-list">
              <Link  className="navigation-menu-list-link"to="/blogs">News/Blogs</Link>
            </li>
            <li className="navigation-submenu">
              Register&nbsp;
              <ion-icon className="icon-brand" name="chevron-down-outline"></ion-icon>
              <ul className="navigation-submenu-item">
                <li className="navigation-submenu-list"><Link to="/registration_policy">Register</Link></li>
                <li className="navigation-submenu-list"><Link to="/login_form">Login</Link></li>
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
