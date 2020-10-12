import React from "react";
// import { Link} from 'react-router-dom';
import Search from './DonationSearchForm';

import FormDonate from './FormRow'

export default function Donation() {

  return (
    <div className="section-donation">
      <div className="u-center-text">
        <div className="row">
          <div className="col-1-of-3">
          <div className="section-donation__search">
            <Search />
          </div>
          </div>
          <div className="col-2-of-3">
            <div className="donation-main">
              <div className="donation-header">
                <h2 className="heading-secondary u-margin-top-small">Make some donation and safe life</h2>
              </div>
                <div className="">
                  <FormDonate />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}















// import { Form } from 'react-bootstrap'
// import DonationFormRow from './DonationFormRow'


//   const [items, setItems] = useState([]);
//   const [formNumber, setFormNumber] = useState(1);
//   const [formMakerState, setFormMakerState] = useState([]);
//   const [submitState, setSubmitState] = useState(false);
//
//   const newArr  = ['', ''];
//
//   const getItems = (item, key) => {
//     setItems((prevValue) => {
//       prevValue[key] = item;
//       return prevValue;
//     });
//   };
//
//   const onAddFormClick = () => {
//     setFormNumber((submitState + 1));
//     formMakerState.length = formNumber;
//   };
//
//   const onSubmit = (e) => {
//     e.preventDefault();
//     setSubmitState(true);
//     console.log(JSON.stringify(items));
//     fetch('https://sua-charity-api.herokuapp.com/api/v1.0.0/donation_items', {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(items),
//       redirect: 'follow',
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//   });
//
// }



/* <Form className="donation_form" onSubmit={onSubmit}>
  {newArr.map((e, i) => <DonationFormRow keyValue={i} getItems={getItems} submitState={submitState} setFormNumber={setFormNumber} />)}
  <div>
   <button type="button" className="btn btn-white btn__animated">+</button>
  </div>
  <div>
   <button type="submit" className="btn btn-white btn__animated">DONATE</button>
  </div>
</Form> */
