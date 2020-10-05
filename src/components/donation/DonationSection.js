import React, {useState } from "react";
import SearchForm from './DonationSearchForm'


export default function Donation() {
  const [items, setItems] = useState({
    donateitem: "",
    donatequantity: "",
    donatepurpose: "",
  })

const handleChange = event => {
const { name, value } = event.target;

setItems((prevValue) => {
  return {
    ...prevValue,
    [name]:value
  }
})
}

const onSubmit = (e) => {

  fetch('https://sua-charity-api.herokuapp.com/api/v1.0.0', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(items),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  e.preventDefault()
}
  return (
    <div className="section-donation">
      <div className="u-center-text">
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
                    <input className="donation__form__input" onChange={handleChange} type="text" name="donateitem"
                      value={items.donateitem}
                     placeholder="donate item" required />
                    <input className="donation__form__input" onChange={handleChange} type="number" name="donatequantity"
                      value={items.donatequantity}
                     placeholder="quantity" min="1" required />
                    <input className="donation__form__input" onChange={handleChange} type="text" name="donatepurpose"
                      value={items.donatepurpose}
                     placeholder="purpose" required />
                    <div>
                      <a href="/contact_us" type="submit" onClick={onSubmit} className="btn btn-white btn__animated">DONATE</a>
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
