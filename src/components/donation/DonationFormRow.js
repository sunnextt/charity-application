import React, {useState, useEffect} from "react";
import { Link, Redirect } from 'react-router-dom';
import SearchForm from './DonationSearchForm';
import { Form } from 'react-bootstrap'

export default function DonationFormRow({ getItems, items, submitState, keyValue }) {
  const [nameState, setNameState] = useState("");
  const [quantityState, setQuantityState] = useState(1);
  const [descState, setItemState] = useState("");
  const [purposeState, setPurposeState] = useState("");
  // const [keyState, setKeyState] = useState(0)

  console.log(keyValue);
  useEffect(() => {
      console.log(submitState);
      const donationItems = {
        name: nameState,
        quantity: quantityState,
        desc: descState,
        purpose: purposeState,
      };
      if (!purposeState) delete donationItems.purpose;
      getItems(donationItems, keyValue);
  }, [submitState, nameState, quantityState, descState, purposeState])

  const handleChange = (setState) => e => {
    if (e.target.name === "quantity") {
      e.target.value = parseInt(e.target.value, 10);
    }
    setState(e.target.value);
  }

  return (
    <Form.Row className="donation__form__row">
        <input className="donation__form__input" onChange={handleChange(setNameState)} type="text" name="name"
          value={nameState}
         placeholder="donate item" required />
        <input className="donation__form__input" onChange={handleChange(setQuantityState)} type="number" name="quantity"
          value={quantityState}
         placeholder="quantity" min="1" required />
        <input className="donation__form__input" onChange={handleChange(setItemState)} type="text" name="desc"
          value={descState}
         placeholder="description" />
        <input className="donation__form__input" onChange={handleChange(setPurposeState)} type="text" name="purpose"
          value={purposeState}
         placeholder="purpose" />
    </Form.Row>
  );
}
