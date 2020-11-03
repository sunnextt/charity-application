import React, {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import CharityContext from '../../context/context/charityContext'

export default function RegCompletion() {
  const charityContext = useContext(CharityContext);

  const {ngoNeeds, sdg}= charityContext;

  const {ngoRegForm} = ngoNeeds;
  const {sdgsNo} = sdg;

  const [ socialMedia, SetsocialMedia ] = useState([])

  const [needs, setNeeds ] = useState({});

  function handlesocial(event) {

    const { name, value } = event.target;

      SetsocialMedia((prevValue) => {
        const newNgoFormSubmit = [
          ...prevValue,
          {name, url: value}
        ];
         console.log(newNgoFormSubmit);
        return newNgoFormSubmit;
    });
  }


  function onChange(event) {

    const { name, value, type } = event.target;

    setNeeds((prevValue) => {
      const newNgoFormSubmit = {
        ...prevValue,
        [name]: type === "number" ? parseInt(value, 10) : value
      };
      console.log(newNgoFormSubmit);
      return newNgoFormSubmit;
    })

   }
   console.log(ngoRegForm);

    const ngoFormSubmit = {...ngoRegForm, sdgs: sdgsNo,socialMedia, needs: [needs]};
    // const ngoFormSubmit =  Object.assign({ngoRegForm, sdgs: sdgsNo,socialMedia, needs: [needs]});

    function onSubmit(event) {
       charityContext.Needs(ngoFormSubmit)
      event.preventDefault();
    }

    return (
        <div className="registration-form--details" id="regitsrationcomplete">
          <div className="registration-data  u-center-text">
            <h3 className="heading-secondary-2 u-margin-top-big u-margin-bottom-medium">Registration Form</h3>
          </div>
          <form className="reg-corporate-form" >
            <div className="reg-form">
              <div className="form-completion-header">
                <h4 className="reg-form-contact">
                  Corperate Infomation
                </h4>
              </div>
              <div className="reg-contact-form">
                <fieldset>
                  <legend>Social Media</legend>
                  <label htmlFor="Facebook">Facebook</label>
                   <input onChange={handlesocial} value={socialMedia.Facebook} type="text" name="Facebook" placeholder="Your Facebook" required/>
                   <label htmlFor="Twitter">Twitter</label>
                   <input onChange={handlesocial} value={socialMedia.Twitter} type="text" name="Twitter" placeholder="Your Twitter" required/>
                   <label htmlFor="Instagram">Instagram</label>
                   <input onChange={handlesocial} value={socialMedia.Instagram} type="text" name="Instagram" placeholder="Instagram" required/>
                   <label htmlFor="Linkedin">Linkedin</label>
                   <input onChange={handlesocial} value={socialMedia.Linkedin} type="text" name="Linkedin" placeholder="Linkedin" required/>
                </fieldset>
                   <div>
                     <h4 className="reg-form-contact">NGO Needs</h4>
                     <div className="reg-contact-form">
                       <fieldset>
                          <label htmlFor="Need">Name</label>
                           <input onChange={onChange} value={needs.name} type="text" name="name" placeholder="name" required/>
                           <label htmlFor="quantity">Quantity</label>
                           <input onChange={onChange} value={needs.quantity} type="number" name="quantity" placeholder="quantity" required/>
                           <label htmlFor="desc">Desc</label>
                           <input onChange={onChange} value={needs.desc} type="text" name="desc" placeholder="desc" required/>
                           <label htmlFor="unit">Unit</label>
                           <input onChange={onChange} value={needs.unit} type="text" name="unit" placeholder="unit" required/>
                         </fieldset>
                     </div>
                   </div>
                </div>

              <div className="form-submition" >
                <Link to="#" type="submit" onClick={onSubmit} onSubmit={onSubmit} className="form-submition-btn btn btn-text-dark">Submit</Link>
              </div>
            </div>
          </form>
        </div>
    )
}
