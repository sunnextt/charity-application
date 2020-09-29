import React from "react";

function MiniHeader() {
  return (
    <div className="page-link">
      <div className="main-page-logo">
        <a href="/#">Donation</a>
      </div>
      <div className="social-contact">
        <div className="social-link">
          <ul>
            <li>
              <p>share+</p>
            </li>
            <li>
              <a href="www.facebook.com">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="www.twitter.com">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="https//www.charityapp.com">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="www.website.com">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="subscribe-form">
        <form action="" className="signUpForm" method="post">
          <input
            type="email"
            name="email"
            className="formStyle"
            placeholder="Email (required)"
            required
          />
          <a href="/#" className="formButton">
            Subscribe
          </a>
        </form>
      </div>
    </div>
  );
}

export default MiniHeader;
