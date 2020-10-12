import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Registration() {
  const [ngoRegForm, setNgoRegForm ] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    name: "",
    mission: "",
    vision: "",
    cacNumber: "",
    website: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zipCode: "",
    sdgs: "",
    socialMedia: "",
    needs: ""
  });

  function onChange(event) {

    const { name, value } = event.target;

    setNgoRegForm((prevValue) => {
      return {
        ...prevValue,
        [name]:value
      }
    })
}

function onSubmit(event) {
    event.preventDefault();
    console.log(ngoRegForm);

}


    return (
        <div className="registration-form--details" id="reg-details">
          <div className="registration-data  u-center-text">
            <h3 className="heading-secondary-2 u-margin-top-down ">Registration Form</h3>
          </div>
          <div className="reg-form">
            <form onClick={onSubmit}>
            <div className="row">
              <div className="col-1-of-3">
                <h4 className="reg-form-contact">Contact Info</h4>
                <div className="reg-contact-form">
                     <label htmlFor="firstname">First Name</label>
                      <input onChange={onChange} value={ngoRegForm.name} type="text"  name="firstname" placeholder="Your name" required/>
                      <label htmlFor="lastname">Last Name</label>
                      <input onChange={onChange} value={ngoRegForm.lastname} type="text"  name="lastname" placeholder="Your last name" required/>
                      <label htmlFor="tel">Phone</label>
                      <input onChange={onChange} value={ngoRegForm.phone} type="tel"  name="tel" placeholder="Phone" required/>
                      <label htmlFor="email">Last email</label>
                      <input onChange={onChange} value={ngoRegForm.email} type="email"  name="email" placeholder="Your email" required/>
                      <label htmlFor="website">website</label>
                      <input onChange={onChange} value={ngoRegForm.website} type="text"  name="website" placeholder="Your website" required/>
                    </div>
              </div>
              <div className="col-1-of-3">
                <h4 className="reg-form-contact">Socai Media</h4>
                <div className="reg-contact-form">
                  <label htmlFor="facebook">Facebook</label>
                      <input onChange={onChange} value={ngoRegForm.facebook} type="text" name="facebook" placeholder="Your facebook" required/>
                      <label htmlFor="twitter">Twitter</label>
                      <input onChange={onChange} value={ngoRegForm.twitter} type="text" name="twitter" placeholder="Your twitter" required/>
                      <label htmlFor="tel">Instagram</label>
                      <input onChange={onChange} value={ngoRegForm.instagram} type="tel" name="instagram" placeholder="instagram" required/>
                      <label htmlFor="tel">Instagram</label>
                      <input onChange={onChange} value={ngoRegForm.twitter} type="tel" name="Youtube" placeholder="Youtube" required/>
                      <label htmlFor="email">Linkedin</label>
                      <input onChange={onChange} value={ngoRegForm.linkedin} type="linkedin" name="linkedin" placeholder="linkedin" required/>
                    </div>
              </div>
              <div className="col-1-of-3">
                <h4 className="reg-form-contact">Address Info</h4>
                <div className="reg-address-form">
                  <fieldset className="contact-fieldset">
                    <label className="contact-label" htmlFor="Address">Address:</label>
                    <textarea onChange={onChange} value={ngoRegForm.address} className="contact-textarea" name="Address"></textarea>
                  </fieldset>
                  <div className="row">
                    <div className="col-1-of-2">
                      <label className="contact-label" htmlFor="city">city</label>
                       <select onChange={onChange} value={ngoRegForm.city} className="contact-select" name="city"  >
                        <option  defaultValue="selected">Select</option>
                        <option value="Lagos">United States</option>
                        <option value="Ibadan">Canada</option>
                       </select>

                       <label className="contact-label" htmlFor="zipcode">zip-code</label>
                       <input type="text" onChange={onChange} value={ngoRegForm.zipCode} name="zipcode" placeholder="zip-code"/>
                    </div>
                    <div className="col-1-of-2">
                      <label className="contact-label" htmlFor="state">state</label>
                      <select onChange={onChange} value={ngoRegForm.state} className="contact-select" name="state" >
                       <option  defaultValue="selected">Select</option>
                       <option value="Lagos">United States</option>
                       <option value="Oyo">Canada</option>
                      </select>

                      <label className="contact-label" htmlFor="country">Country</label>
                      <select onChange={onChange} value={ngoRegForm.country} className="contact-select" name="country"  >
                       <option  defaultValue="selected">Select</option>
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
