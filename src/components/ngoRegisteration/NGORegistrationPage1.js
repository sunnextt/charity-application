import React from 'react'
import { Link } from "react-router-dom";

export default function Registration() {
    return (
        <div className="registration-form--details" id="reg-details">
          <div className="registration-data  u-center-text">
            <h3 className="heading-secondary-2 u-margin-top-down ">Registration Form</h3>
          </div>
          <div className="reg-form">
            <form>
            <div className="row">
              <div className="col-1-of-3">
                <h4 className="reg-form-contact">Contact Info</h4>
                <div className="reg-contact-form">
                     <label for="firstname">First Name</label>
                      <input type="text"  name="firstname" placeholder="Your name" required/>
                      <label for="lastname">Last Name</label>
                      <input type="text"  name="lastname" placeholder="Your last name" required/>
                      <label for="tel">Phone</label>
                      <input type="tel"  name="tel" placeholder="Phone" required/>
                      <label for="email">Last email</label>
                      <input type="email"  name="email" placeholder="Your email" required/>
                      <label for="website">website</label>
                      <input type="text"  name="website" placeholder="Your website" required/>                </div>
              </div>
              <div className="col-1-of-3">
                <h4 className="reg-form-contact">Socai Media</h4>
                <div className="reg-contact-form">                     <label for="facebook">Facebook</label>
                      <input type="text" name="facebook" placeholder="Your facebook" required/>
                      <label for="twitter">Twitter</label>
                      <input type="text" name="twitter" placeholder="Your twitter" required/>
                      <label for="tel">Instagram</label>
                      <input type="tel" name="instagram" placeholder="instagram" required/>
                      <label for="tel">Instagram</label>
                      <input type="tel" name="Youtube" placeholder="Youtube" required/>
                      <label for="email">Linkedin</label>
                      <input type="linkedin" name="linkedin" placeholder="linkedin" required/>
                    </div>
              </div>
              <div className="col-1-of-3">
                <h4 className="reg-form-contact">Address Info</h4>
                <div className="reg-address-form">
                  <fieldset className="contact-fieldset">
                    <label className="contact-label" for="Address">Address:</label>
                    <textarea className="contact-textarea" name="Address"></textarea>
                  </fieldset>
                  <div className="row">
                    <div className="col-1-of-2">
                      <label className="contact-label" for="city">city</label>
                       <select className="contact-select" name="city"  >
                        <option  selected="selected">Select</option>
                        <option value="Lagos">United States</option>
                        <option value="Ibadan">Canada</option>
                       </select>

                       <label className="contact-label" for="zipcode">zip-code</label>
                       <input type="text"  name="zipcode" placeholder="zip-code"/>
                    </div>
                    <div className="col-1-of-2">
                      <label className="contact-label" for="city">state</label>
                      <select className="contact-select" name="state" i >
                       <option  selected="selected">Select</option>
                       <option value="Lagos">United States</option>
                       <option value="Oyo">Canada</option>
                      </select>

                      <label className="contact-label" for="city">Country</label>
                      <select className="contact-select" name="country"  >
                       <option  selected="selected">Select</option>
                       <option value="Nigeria">United States</option>
                       <option value="Ghana">Canada</option>
                      </select>
                  </div>
                 </div>
               </div>
              </div>
            </div>
              <div className="form-proceed">
                <Link to="/registration_complete" type="submit" className="btn-text-dark form-proceed-button">Next &rarr;</Link>
              </div>
              </form>
          </div>
        </div>
    )
}
