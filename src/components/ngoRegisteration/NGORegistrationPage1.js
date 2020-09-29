import React from 'react'
import { Link } from "react-router-dom";

export default function Registration() {
    return (
        <div className="registration-form--details" id="reg-details">
          <div className="registration-data  u-center-text">
            <h3 className="heading-secondary-2 u-margin-top-big">Registration Form</h3>
          </div>
          <div className="reg-form">
            <div className="row">
              <div className="col-1-of-3">
                <h4 className="reg-form-contact">Contact Info</h4>
                <div>
                  <form className="reg-contact-form">
                     <label for="firstname">First Name</label>
                      <input type="text" id="firstname" name="firstname" placeholder="Your name.."/>
                      <label for="lastname">Last Name</label>
                      <input type="text" id="lastname" name="lastname" placeholder="Your last name.."/>
                      <label for="tel">Phone</label>
                      <input type="tel" id="tel" name="tel" placeholder="Phone"/>
                      <label for="email">Last email</label>
                      <input type="email" id="email" name="email" placeholder="Your email.."/>
                      <label for="website">website</label>
                      <input type="text" id="website" name="website" placeholder="Your website.."/>
                  </form>
                </div>
              </div>
              <div className="col-1-of-3">
                <h4 className="reg-form-contact">Socai Media</h4>
                <div>
                  <form className="reg-contact-form">
                     <label for="facebook">Facebook</label>
                      <input type="text" id="facebook" name="facebook" placeholder="Your facebook.."/>
                      <label for="twitter">Twitter</label>
                      <input type="text" id="twitter" name="twitter" placeholder="Your twitter.."/>
                      <label for="tel">Instagram</label>
                      <input type="tel" id="instagram" name="instagram" placeholder="instagram"/>
                      <label for="email">Linkedin</label>
                      <input type="linkedin" id="linkedin" name="linkedin" placeholder="linkedin.."/>
                  </form>
                </div>
              </div>
              <div className="col-1-of-3">
                <h4 className="reg-form-contact">Address Info</h4>
                <div>
                  <form className="reg-contact-form">
                    <label for="Address">Subject</label>
                     <textarea id="Address" name="Address" placeholder="contact address" ></textarea>
                     <label for="country">Country</label>

                      <select name="city" id="country" >
                       <option disabled selected="selected">Select</option>
                       <option value="Lagos">United States</option>
                       <option value="Ibadan">Canada</option>
                      </select>

                      <label for="zipcode">zip-code</label>
                      <input type="text" id="zipcode" name="zipcode" placeholder="zip-code"/>

                      <select name="state" id="country" >
                       <option disabled selected="selected">Select</option>
                       <option value="Lagos">United States</option>
                       <option value="Oyo">Canada</option>
                      </select>

                      <select name="country" id="country" >
                       <option disabled selected="selected">Select</option>
                       <option value="Nigeria">United States</option>
                       <option value="Ghana">Canada</option>
                      </select>
                  </form>
                </div>
              </div>
            </div>
              <div className="form-proceed">
                <Link to="/registration_complete" className="btn-text-dark form-proceed-button">Next &rarr;</Link>
              </div>
          </div>
        </div>
    )
}
