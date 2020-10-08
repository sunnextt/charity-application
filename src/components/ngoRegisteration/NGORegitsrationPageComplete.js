import React from 'react';
import { Link } from "react-router-dom";

export default function RegCompletion() {
    return (
        <div className="registration-form--details" id="regitsrationcomplete">
            <div className="registration-data  u-center-text">
              <h3 className="heading-secondary-2 u-margin-top-big u-margin-bottom-medium">Registration Form</h3>
            </div>
            <form className="reg-corporate-form">
            <div className="reg-form">
              <div className="row">
                <div className="col-1-of-2">
                  <div className="form-completion-header">
                    <h4 className="reg-form-contact">
                      Corperate Infomation
                    </h4>
                  </div>
                  <div className="form-completion-field">
                          <input type="text" name="cac-number" className="globa-input" placeholder="CAC number" required/>
                          <fieldset className="corperate-fieldset">
                          <label  className="corporate-label" htmlfor="goal">Goal</label>
                          <textarea name="field5" className="corporate-textarea" placeholder="Your goal"></textarea>
                         </fieldset>
                          <fieldset className="corperate-fieldset">
                         <label  className="corporate-label" for="mission">Mission</label>
                          <textarea name="field5" className="corporate-textarea" placeholder="your mission"></textarea>
                        </fieldset>
                          <fieldset className="corperate-fieldset">
                        <label  className="corporate-label" for="vision">Vision</label>
                        <textarea name="field5" className="corporate-textarea" placeholder="your vision"></textarea>
                       </fieldset>
                  </div>
                </div>
                <div className="col-1-of-2">
                  <div className="form-completion-header">
                    <h4 className="reg-form-contact">
                      Board Members  Infomation
                    </h4>
                  </div>
                  <div className="form-completion-field">
                      <div className="corporate-order">
                        <ul  className="corporate-unorder">
                          <div>
                            <li>
                              <input type="number" nam="members" className="form-completion-number" placeholder="No of board members" required/>
                            </li>
                          </div>
                          <li>
                            <div className="row">
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="firstname">Firstname</label>
                                <input className="form-completion-input" type="text" name="field1"  placeholder="Firstname" />
                              </div>
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="lastname">Lastname</label>
                                <input className="form-completion-input" type="text" name="field2" placeholder="Lastnmane" />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Phone</label>
                                <input className="form-completion-input" type="text" name="field3"  placeholder="Phone" />
                              </div>
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Email</label>
                                <input className="form-completion-input" type="email" name="field2" placeholder="Email" />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="corporate-order">
                        <ul  className="corporate-unorder">
                          <li>
                            <div className="row">
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="firstname">Firstname</label>
                                <input className="form-completion-input" type="text" name="field1"  placeholder="Firstname" />
                              </div>
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="lastname">Lastname</label>
                                <input className="form-completion-input" type="text" name="field2" placeholder="Lastnmane" />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Phone</label>
                                <input className="form-completion-input" type="text" name="field3"  placeholder="Phone" />
                              </div>
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Email</label>
                                <input className="form-completion-input" type="email" name="field2" placeholder="Email" />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="corporate-order">
                        <ul  className="corporate-unorder">
                          <li>
                            <div className="row">
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="firstname">Firstname</label>
                                <input className="form-completion-input" type="text" name="field1"  placeholder="Firstname" />
                              </div>
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="lastname">Lastname</label>
                                <input className="form-completion-input" type="text" name="field2" placeholder="Lastnmane" />
                              </div>
                            </div>
                          </li>
                          <li >
                            <div className="row">
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Phone</label>
                                <input className="form-completion-input" type="text" name="field3"  placeholder="Phone" />
                              </div>
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Email</label>
                                <input className="form-completion-input" type="email" name="field2" placeholder="Email" />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>
              <div className="form-submition" >
                <Link to="#" className="form-submition-btn btn btn-text-dark">Submit</Link>
              </div>
            </div>
          </form>
        </div>
    )
}
