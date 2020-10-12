import React, {useState} from 'react';
import { Link } from "react-router-dom";

export default function RegCompletion() {
  const [formFields, setFormFields ] = useState({
    goal: "",
    mission: "",
    vision: "",
    cacNumber: "",
    website: "",
    country: "",
    noOfmembers: "",
    firstname: "",
    lastname: "",
    email: "",
    sdgs: "",
    phone: "",
    needs: ""
  });

  function onChange(event) {

    const { name, value } = event.target;

    setFormFields((prevValue) => {
      return {
        ...prevValue,
        [name]:value
      }
    })
}

function onSubmit(event) {
    event.preventDefault();
    console.log(formFields);
    fetch('https://sua-charity-api.herokuapp.com/api/v1.0.0/ngo', {
      method: 'POST', // or 'PUT'
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOiI1ZjdhMjNhNzBhMzc0MDQ4NmM4YTZiNzQiLCJlbWFpbCI6InN1bm5leHQyMDEwQGdtYWlsLmNvbSIsImlhdCI6MTYwMjQzMTM3MywiZXhwIjoxNjAyNDMxOTczLCJhdWQiOiJhZG1pbiIsImlzcyI6IkdpdmVUb0NoYXJpdHkifQ.iIWMI4NxfinCO3EIt6JsEcQyNEu4ecAKt_YhW9TQbfc',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formFields),
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
        <div className="registration-form--details" id="regitsrationcomplete">
            <div className="registration-data  u-center-text">
              <h3 className="heading-secondary-2 u-margin-top-big u-margin-bottom-medium">Registration Form</h3>
            </div>
            <form className="reg-corporate-form" onSubmit={onSubmit}>
            <div className="reg-form">
              <div className="row">
                <div className="col-1-of-2">
                  <div className="form-completion-header">
                    <h4 className="reg-form-contact">
                      Corperate Infomation
                    </h4>
                  </div>
                  <div className="form-completion-field">
                          <input type="text"  onChange={onChange}
                            value={formFields}name="cacNumber" className="globa-input" placeholder="CAC number" required/>
                          <fieldset className="corperate-fieldset">
                          <label  className="corporate-label" htmlfor="goal">Goal</label>
                          <textarea  onChange={onChange}
                            value={formFields}name="field5" className="corporate-textarea" placeholder="Your goal"></textarea>
                         </fieldset>
                          <fieldset  onChange={onChange}
                            value={formFields}className="corperate-fieldset">
                         <label  className="corporate-label" for="mission">Mission</label>
                          <textarea  onChange={onChange}
                            value={formFields}name="field5" className="corporate-textarea" placeholder="your mission"></textarea>
                        </fieldset>
                          <fieldset  onChange={onChange}
                            value={formFields}className="corperate-fieldset">
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
                              <input type="number" nam="noOfmembers" className="form-completion-number" placeholder="No of board members" required/>
                            </li>
                          </div>
                          <li>
                            <div className="row">
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="firstname">Firstname</label>
                                <input  onChange={onChange}
                                  value={formFields}className="form-completion-input" type="text" name="field1"  placeholder="Firstname" />
                              </div>
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="lastname">Lastname</label>
                                <input  onChange={onChange}
                                  value={formFields}className="form-completion-input" type="text" name="field2" placeholder="Lastnmane" />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Phone</label>
                                <input  onChange={onChange}
                                  value={formFields}className="form-completion-input" type="text" name="field3"  placeholder="Phone" />
                              </div>
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Email</label>
                                <input  onChange={onChange}
                                  value={formFields}className="form-completion-input" type="email" name="field2" placeholder="Email" />
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
                                <input onChange={onChange}
                                  value={formFields} className="form-completion-input" type="text" name="field2" placeholder="Lastnmane" />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row">
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Phone</label>
                                <input onChange={onChange}
                                  value={formFields} className="form-completion-input" type="text" name="field3"  placeholder="Phone" />
                              </div>
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Email</label>
                                <input onChange={onChange}
                                  value={formFields} className="form-completion-input" type="email" name="field2" placeholder="Email" />
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
                                <input onChange={onChange}
                                  value={formFields} className="form-completion-input" type="text" name="field1"  placeholder="Firstname" />
                              </div>
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="lastname">Lastname</label>
                                <input onChange={onChange}
                                  value={formFields} className="form-completion-input" type="text" name="field2" placeholder="Lastnmane" />
                              </div>
                            </div>
                          </li>
                          <li >
                            <div className="row">
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Phone</label>
                                <input onChange={onChange}
                                  value={formFields} className="form-completion-input" type="text" name="field3"  placeholder="Phone" />
                              </div>
                              <div className="col-1-of-2">
                                <label className="corporate-label" for="zipcode">Email</label>
                                <input onChange={onChange}
                                  value={formFields} className="form-completion-input" type="email" name="field2" placeholder="Email" />
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
