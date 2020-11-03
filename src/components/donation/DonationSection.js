import React from "react";


import FormDonate from './FormRow'

export default function Donation() {

  return (
    <div className="section-donation">
      <div className="u-center-text">
            <div className="donation-main">
              <div className="donation-header">
                <h2 className="heading-secondary u-margin-top-small">
                  Make some donation and safe life
                </h2>
              </div>
              <div className="">
                <FormDonate />
              </div>
            </div>
      </div>
    </div>
  );
}
