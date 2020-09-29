import React from "react";
import SearchForm from './DonationSearchForm'

export default function Donation() {
  return (
    <div className="section-donation">
      <div className="u-center-text u-margin-bottom-small">
        <div className="row">
          <div className="col-1-of-3">
          <div className="section-donation__search">
            <SearchForm />
          </div>
          </div>
          <div className="col-2-of-3">
            <div className="donation-main">
              <div className="donation-header">
                <h2 className="heading-secondary">Make some donation and safe life</h2>
              </div>
                <div className="">
                  <form className="donation_form">
                    <input className="donation__form__input" type="text" name="donate-item" placeholder="donate item" required />
                    <input className="donation__form__input" type="number" name="donate-quantity" placeholder="quantity" min="1" required />
                    <input className="donation__form__input" type="text" name="donate-purpose" placeholder="purpose" required />
                    <div>
                      <a href="/contact us" className="btn btn-white btn__animated">DONATE</a>
                    </div>
                  </form>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
