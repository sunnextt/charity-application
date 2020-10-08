import React, { useState, Fragment } from "react";
// import validate from './FormValidate'
// console.log(validate);

const FormDonate = () => {
  const { state, setstate } = useState({
    error: ""
  })
  const [inputFields, setInputFields] = useState([
    { name: "", quantity: "", desc: "", purpose: "" }
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ name: "", quantity: "", desc: "", purpose: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...inputFields];
    values[index] = { ...values[index], [name]: value };
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
    e.preventDefault();
    console.log(JSON.stringify(inputFields));
    fetch('https://sua-charity-api.herokuapp.com/api/v1.0.0/donation_items', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputFields),
      redirect: 'follow',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
     console.log(error);
  });

  };


  return (
    <div className="donation-form">
      <form className="donation-form-group" onSubmit={handleSubmit}>
        <div className="donation-form-row">
          {inputFields.map((inputField, index) => (
            <div className="donation-form-items" key={`${inputField}~${index}`}>
                <input
                  type="text"
                  className="donation-form-input"
                  name="name"
                  value={inputField.name}
                  onChange={(event) => handleInputChange(index, event)}
                  placeholder="Donate item" required
                />
                <input
                  type="number"
                  className="donation-form-quantity"
                  name="quantity"
                  value={inputField.quantity}
                  onChange={(event) => handleInputChange(index, event)}
                  placeholder="Qty"
                />
                <input
                  type="text"
                  className="donation-form-input"
                  name="desc"
                  value={inputField.description}
                  onChange={(event) => handleInputChange(index, event)}
                  placeholder="Description"
                />
                <input
                  type="text"
                  className="donation-form-input"
                  name="purpose"
                  value={inputField.purpose}
                  onChange={(event) => handleInputChange(index, event)}
                  placeholder="Purpose"
                />
              <div className="decrease-button">
                <button
                  className="btn-icon"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                <ion-icon className="ion__icon" name="close-circle-outline"></ion-icon>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* {error && <span>{error}</span>} */}
        <div className="increase-button">
          <button
            className="btn-icon"
            type="button"
            onClick={() => handleAddFields()}
          >
          {/* <ion-icon  name="add-circle-outline"></ion-icon> */}
          <ion-icon  name="add-circle"></ion-icon>
          </button>
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary"
            type="submit"
          >
            Donate
          </button>
        </div>
        {/* <br /> */}
        {/* <pre>{JSON.stringify(inputFields, null, 2)}</pre> */}
      </form>
    </div>
  );
};

export default FormDonate;
