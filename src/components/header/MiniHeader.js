import React from "react";

function MiniHeader() {
  return (
    <div className="mini-header">
      <div className="row">
        <div className="col-1-of-2">
          <div className="mini-header-div">
            <div className="mini-header-logo">
              <a href="/#">Donation</a>
            </div>
            <div className="mini-header-social">
              <ul className="mini-header-items">
                <li className="mini-header-items-list">
                  <p>share+</p>
                </li>
                <li className="mini-header-items-list">
                  <a href="www.facebook.com">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li className="mini-header-items-list">
                  <a href="www.twitter.com">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li className="mini-header-items-list">
                  <a href="https//www.charityapp.com">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li className="mini-header-items-list">
                  <a href="www.website.com">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="mini-header-subscribe">
            <div className="subscribe-form">
               <form action="" className="signUpForm" method="post">
                 <input
                   type="email"
                   name="email"
                   className="formStyle"
                   placeholder="Email (required)"
                   required
                 />
                 <a href="/#" className="subscribe-btn">
                   Subscribe
                 </a>
               </form>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MiniHeader;
