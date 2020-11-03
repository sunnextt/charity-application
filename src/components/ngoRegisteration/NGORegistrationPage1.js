import React, { useState, useContext } from 'react'
import { Link, useHistory } from "react-router-dom";
import CharityContext from '../../context/context/charityContext'
import sdgsItem from './Sdgs'



export default function Registration() {

  const charityContext = useContext(CharityContext);
  let history = useHistory();





  const [ngoRegForm, setNgoRegForm ] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    name: "",
    cacNumber: "",
    website: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zipCode: "",
    needs: "",
    mission: "",
    vision: "",
  });


      const [sdgs, setSdgs] = useState({
        sdgs: [],
      })

    const handleCheckbox = (event) => {

      let nCheckbox = sdgs.sdgs.slice(); // create a new copy of state value
      if (isValueExist(nCheckbox, event)) {
        // check if the same value is preexisted in the array
        const index = nCheckbox.indexOf(event.target.value);
        nCheckbox.splice(index, 1); // removing the preexciting value
      } else {
        nCheckbox.push(parseInt(event.target.value)); // inserting the value of checkbox in the array
      }
      setSdgs({
        sdgs: nCheckbox
      });
    }
    const isValueExist = (data, event) => {
      if (data.length === 0) {
        return false;
      }

      for (let i = 0; i <= data.length; i++) {
        if (event.target.value === data[i]) {
          return true;
        }
      }
      return false;
    }

  const onChange = (event) => {

      const { name, value, type } = event.target;

      setNgoRegForm((prevValue) => {
        return {
          ...prevValue,
          [name]: type === "number" ? parseInt(value, 10) : value
        }
      })
  }


console.log(ngoRegForm);




 let sdgsNo = sdgs.sdgs;

  const handleClick = (event) => {
    event.preventDefault();
    charityContext.NgoFormNeeds(ngoRegForm, sdgsNo)
    history.push('/registration_complete')
  };


  return (
      <div className="registration-form--details" id="reg-details">
        <div className="registration-data  u-center-text">
          <h3 className="heading-secondary-2 u-margin-top-down ">Registration Form</h3>
        </div>
        <div className="reg-form">
          <form>
          <div className="row">
            <div className="col-1-of-3">
              <div className="reg-contact-form">
                <legend>Conatct details</legend>
                    <label htmlFor="name">Name</label>
                    <input onChange={onChange} value={ngoRegForm.name} type="text"  name="name" placeholder="NGO Name" required/>
                    <label htmlFor="tel">Phone</label>
                    <input onChange={onChange} value={ngoRegForm.phone} type="tel"  name="phone" placeholder="Phone" required/>
                    <label htmlFor="email">email</label>
                    <input onChange={onChange} value={ngoRegForm.email} type="email"  name="email" placeholder="Your email" required/>
                    <label htmlFor="password">password</label>
                    <input onChange={onChange} value={ngoRegForm.password} type="password"  name="password" placeholder="confirmPassword" required/>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={onChange} value={ngoRegForm.confirmPassword} type="password"  name="confirmPassword" placeholder="Confirm
                      Password" required/>
                    <label htmlFor="website">website</label>
                    <input onChange={onChange} value={ngoRegForm.website} type="text"  name="website" placeholder="Your website" required/>
                  </div>
            </div>
            <div className="col-1-of-3">
                    <div className="form-completion-field">
                    <label   className="corporate-label" htmlFor="mission">Mission</label>
                    <textarea  onChange={onChange} value={ngoRegForm.mission} name="mission" className="corporate-textarea" placeholder="your mission"></textarea>
                    <label  className="corporate-label" htmlFor="vision">Vision</label>
                    <textarea onChange={onChange} value={ngoRegForm.vision}  name="vision" className="corporate-textarea"/>

                    <label htmlFor="cacNumber">CAC number</label>
                    <input onChange={onChange} value={ngoRegForm.cacNumber} type="text"  name="cacNumber" placeholder="Your CAC Number" required/>
                    {/* <Checkbox /> */}


                    <div>
                      {sdgsItem.map((el, i) => (
                          <div className="checkbox1" key={i}>
                            <label> {el.name }{el.id}</label>
                            <input
                              type="checkbox"
                              value={el.id}
                              onChange={handleCheckbox}
                              checked={sdgs[i]}
                            />
                          </div>
                        ))}
                    </div>



                </div>
            </div>
            <div className="col-1-of-3">
              <div className="reg-address-form">
                  <legend>Address Info</legend>
                <fieldset className="contact-fieldset">
                  <label className="contact-label" htmlFor="address">Address:</label>
                  <textarea onChange={onChange} value={ngoRegForm.address} className="contact-textarea" name="address"></textarea>
                </fieldset>
                <div className="row">
                  <div className="col-1-of-2">
                    <label className="contact-label" htmlFor="city">city</label>
                     <input onChange={onChange} value={ngoRegForm.city} className="contact-select" name="city" />
                     <label className="contact-label" htmlFor="zipCode">zip-code</label>
                     <input type="number" onChange={onChange} value={ngoRegForm.zipCode} name="zipCode" placeholder="zip-code"/>
                  </div>
                  <div className="col-1-of-2">
                    <label className="contact-label" htmlFor="state">state</label>
                    <select onChange={onChange} value={ngoRegForm.state} className="contact-select" name="state" >
                     <option  defaultValue="selected">Select</option>
                     <option value="Lagos">Lagos State</option>
                     <option value="Oyo">Oyo State</option>
                     <option value="Lagos">Lagos State</option>
                     <option value="Ogun">Ogun</option>
                    </select>
                    <label className="contact-label" htmlFor="country">Country</label>
                    <select onChange={onChange} value={ngoRegForm.country} className="contact-select" name="country"  >
                     <option  defaultValue="selected">Select</option>
                     <option value="Nigeria">Nigeria</option>
                     <option value="United-State">United States</option>
                     <option value="United-Kingdom">United Kingdom</option>
                     <option value="Japan">Japan</option>
                     <option value="Ghana">Ghana</option>
                    </select>
                </div>
               </div>
             </div>
            </div>
          </div>
            <div className="form-proceed">
              <Link to="/registration_complete" type="submit" className="btn-text-dark form-proceed-button"
              onClick={handleClick} >Next &rarr;</Link>
            </div>
            </form>
        </div>
      </div>
  )
}










  //
  //
  //
  // const charityContext = useContext(CharityContext);
  //
  // let history = useHistory();
  //
  //
  //
  // const [ngoRegForm, setNgoRegForm ] = useState({
  //   email: "",
  //   phone: "",
  //   password: "",
  //   confirmPassword: "",
  //   name: "",
  //   cacNumber: "",
  //   website: "",
  //   country: "",
  //   state: "",
  //   city: "",
  //   address: "",
  //   zipCode: "",
  //   needs: "",
  //   sdgs: [],
  //   mission: "",
  //   vision: "",
  // });
  //
  //
  //   const handleCheckbox = (event) => {
  //
  //     let nCheckbox = ngoRegForm.sdgs.slice(); // create a new copy of state value
  //     if (isValueExist(nCheckbox, event)) {
  //       // check if the same value is preexisted in the array
  //       const index = nCheckbox.indexOf(event.target.value);
  //       nCheckbox.splice(index, 1); // removing the preexciting value
  //     } else {
  //       nCheckbox.push(event.target.value); // inserting the value of checkbox in the array
  //     }
  //     setNgoRegForm({
  //       sdgs: nCheckbox
  //     });
  //   }
  //
  //   const isValueExist = (data, event) => {
  //     if (data.length === 0) {
  //       return false;
  //     }
  //
  //     for (let i = 0; i <= data.length; i++) {
  //       if (event.target.value === data[i]) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   }
  //
  //
  //
  // function onChange(event) {
  //
  //     const { name, value } = event.target;
  //
  //     setNgoRegForm((prevValue) => {
  //       return {
  //         ...prevValue,
  //         [name]:value
  //       }
  //     })
  // }
  //
  //
  //
  // const submit = (event) => {
  //   event.preventDefault();
  //   charityContext.NgoFormNeeds(ngoRegForm)
  //   // history.push('/registration_complete')
  // };
