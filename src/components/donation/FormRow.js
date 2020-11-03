import React, { useState, useContext, useEffect} from "react";
import CharityContext from "../../context/context/charityContext";
import { useHistory } from "react-router-dom";

const FormDonate = () => {
  const history = useHistory();
  const charityContext = useContext(CharityContext);
  const { loading} = charityContext;

  const [isloading, setIsloading] = useState(true)


  const [inputFields, setInputFields] = useState([
    { name: "", quantity: "", desc: "", purpose: "" },
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


  const onSubmit = (e) => {
      setIsloading(loading)
    e.preventDefault(inputFields);
    charityContext.donateItems(inputFields);
  };

  useEffect(() => {
    setIsloading(loading);
    if (isloading === false) {
      history.push("/donation_process");
    }
  }, [isloading, loading, history]);

  useEffect(() => {
    setIsloading(true)
  },[])

  return (
    <div className="donation-form">
      <form className="donation-form-group">
        <div className="donation-form-row">
          {inputFields.map((inputField, index) => (
            <div className="donation-form-items" key={`${inputField}~${index}`}>
              <input
                type="text"
                className="donation-form-input"
                name="name"
                value={inputField.name}
                onChange={(event) => handleInputChange(index, event)}
                placeholder="Donate item"
                required
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
                  <ion-icon
                    className="ion__icon"
                    name="close-circle-outline"
                  ></ion-icon>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="increase-button">
          <button
            className="btn-icon"
            type="button"
            onClick={() => handleAddFields()}
          >
            <ion-icon name="add-circle"></ion-icon>
          </button>
        </div>
        <div className="submit-button">
          <a
            href="/donation_process"
            onClick={onSubmit}
            className="btn btn-blue"
            type="submit"
          >
            Donate
          </a>
        </div>
      </form>
    </div>
  );
};

export default FormDonate;
