import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
const [subscribeFields, setSubscribeFields] = useState({
  fullname: "",
  email: "",
  sdg: ""
});

  const onChange = (event) => {

    const { name, value } = event.target;

    setSubscribeFields((prevValue) => {
      return {
        ...prevValue,
        [name]:value
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(subscribeFields);
    fetch('https://sua-charity-api.herokuapp.com/api/v1.0.0/subscriber', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscribeFields),
      redirect: 'follow',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
  });

  }
  return (
    <div className="footer">
      <div className="">
        <div className="row">
          <div className="col-1-of-4">
            <div className="footer-links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about_us">About us</Link>
                </li>
                <li>
                  <Link to="/contact_us">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="footer-links">
              <ul className="footer-search">
                <li>
                  <Link to="/blogs">Latest news</Link>
                </li>
                <li>
                  <Link to="/#donate">Donate</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="form">
              <div className="u-margin-bottom-smal">
                <h6 className="form__text u-margin-bottom-smal">
                  Sign up for our newsletter to stay updated on our work.
                </h6>
              </div>
              <form onSubmit={onSubmit} >
                <div className="form__group">
                  <label htmlFor="fullname" className="form__label">
                    FUll-Name
                  </label>
                  <input
                    type="text"
                    className="form__input"
                    name="fullname"
                    value={subscribeFields.fullname}
                    onChange={onChange}
                    placeholder="Full Name"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Your email
                  </label>
                  <input
                    type="email"
                    className="form__input"
                    name="email"
                    value={subscribeFields.email}
                    onChange={onChange}
                    placeholder="Your email"
                    required
                  />
                  <label htmlFor="sdg" className="form__label">
                    SDGs Number
                  </label>
                  <input
                    type="text"
                    className="form__input"
                    name="sdg"
                    value={subscribeFields.sdg}
                    onChange={onChange}
                    placeholder="e.g 1,2"
                    required
                  />
                </div>
                <div className="subscribe-submit">
                  <button type="submit" className="btn-sub">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="footer-icons">
              <h4>Follow us:</h4>
              <a href="youtube.com">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
              <a href="facebook.com">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="twitter.com">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="instagram.com">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="iinkedin.com">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_navigation">
        <ul className="footer_list">
          <li className="footer_item">
            <a className="footer__link" href="/about-us/terms-and-conditions/" >
              Terms and Conditions
            </a>
          </li>
          <li className="footer_item">
            <a className="footer__link" href="/about-us/privacy-statement/" >
              Privacy Statement
            </a>
          </li>
          <li className="footer_item">
            <a className="footer__link" href="/about-us/cookie-policy/" >
              Cookie policy
            </a>
          </li>
          <li className="footer_item">
            <a className="footer__link" href="/about-us/accessibility/">
              Accessibility
            </a>
          </li>
          <li className="footer_item">
            <a className="footer__link" href="/admin_reg" >
              Admin
            </a>
          </li>
          <li className="footer_item">
            <a className="footer__link" href="/dashboard" >
              dashboard
            </a>
          </li>
        </ul>
      </div>
      <div className="u-center-text">
        <div className="footer-Copyright">
          <span>© Copyright 2020 Company Name. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
