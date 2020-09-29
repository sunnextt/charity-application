import React from 'react';
import { Link } from "react-router-dom";

export default function RegCompletion() {
    return (
        <div className="registration-completion" id="regitsrationcomplete">
          <div className="">
            <div className="registration-data  u-center-text">
              <h3 className="heading-secondary-2 u-margin-top-big u-margin-bottom-medium">Registration Form</h3>
            </div>
            <div className="form-completion">
              <div className="row">
                <div className="col-1-of-2">
                  <div className="form-completion-header">
                    <h4 className="">
                      Corperate Infomation
                    </h4>
                  </div>
                  <div className="form-completion-field">
                    <form>
                      <ul>
                      </ul>
                      <ul>
                        <li>
                          <label for="cac-number">CAC Number</label>
                          <input type="text" name="cac-number" className="cac-number" placeholder="CAC number" />
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <label for="goal">Goal</label>
                          <textarea name="field5" className="goal" placeholder="Your goal"></textarea>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <label for="mission">Mission</label>
                          <textarea name="field5" className="mission" placeholder="your mission"></textarea>
                        </li>
                      </ul>
                      <li>
                        <label for="vision">Vision</label>
                        <textarea name="field5" className="vision" placeholder="your vision"></textarea>
                      </li>
                    </form>
                  </div>
                </div>
                <div className="col-1-of-2">
                  <div className="form-completion-header">
                    <h4 className="">
                      Board Members  Infomation
                    </h4>
                  </div>
                  <div className="form-completion-field">
                    <form>
                      <input type="number" nam="members" placeholder="No of board members" />
                      <div>
                        <ul>
                          <li>
                            <input type="text" name="field1"  placeholder="Firstname" />
                            <input type="text" name="field2" placeholder="Lastnmae" />
                          </li>
                          <li>
                            <input type="text" name="field3"  placeholder="Phone" />
                            <input type="email" name="field2" placeholder="Email" />
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <input type="text" name="field1"  placeholder="Firstname" />
                            <input type="text" name="field2" placeholder="Lastnmae" />
                          </li>
                          <li>
                            <input type="text" name="field3"  placeholder="Phone" />
                            <input type="email" name="field2" placeholder="Email" />
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                        <li>
                          <input type="text" name="field1"  placeholder="Firstname" />
                          <input type="text" name="field2" placeholder="Lastnmae" />
                        </li>
                        <li>
                          <input type="text" name="field3"  placeholder="Phone" />
                          <input type="email" name="field2" placeholder="Email" />
                        </li>
                        </ul>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
              <div className="form-submition" >
                <Link to="#" className="form-submition-btn btn btn-text-dark">Submit</Link>
              </div>
            </div>

          </div>
        </div>
    )
}
