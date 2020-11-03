import React, {useState} from "react";
// import { useHistory } from "react-router-dom";
import DonorFormRow from './FormRowDonor'
import PickupForm from './PickupForm'

export default function PopUp(needitems) {
  const {needs, ngoName} = needitems;
  const [{ name, quantity, supply,unit }] = needs;
  console.log(name);


    // let history = useHistory();
  // const [donorForm, setDonorForm] = useState({
  //   items: [],
  //   email: "",
  //   phone: "",
  //   dateTime: "",
  //   pickup: ""
  // })

  const [pickup, setPickup] = useState({
    country: "",
    state: "",
    city: "",
    street: "",
    landmark: "",
    address: ""
  })

  // const [donorCont, setDonorCont] = useState([
  //   { name: "",
  //    quantity: "",
  //    desc: "", 
  //    purpose:
  //    ""
  //   },
  // ])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPickup((prevValue) => {
      return {
        ...prevValue,
        [name]:value
      }
    })
}
console.log(pickup);




  const onSubmit = () => {
  console.log(pickup);
      // history.push('/donation_process')
  }

  return (
    <div className="popup" id="popup">
      <div className="popup-div">
        {/* {itemsneed.map()} */}
        <div className="popup__content u-heading-padding">
          <div className=" u-center-text">
            <a href="#close" className="popup__close">
              &times;
            </a>
            <h3 className="heading-secondary-2 popup-heading">{ngoName}</h3>
          </div>
          <div className="organisation-items-table u-center-text ">
            <h4 className="u-heading-padding">Table of Items Needed</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Supply</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-column="Total">{name}</td>
                  <td data-column="remaining">{quantity}</td>
                  <td data-column="Given to">{supply}</td>
                  <td data-column="Given to">{unit}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="logistic">
            <h3 className="heading-secondary-2 logistic-heading">Logostic</h3>
            <div className="logistic-form">
              <div className="logistic-form__group">
                <form>
                  <DonorFormRow
                    state={pickup.state}
                    city={pickup.city}
                    country={pickup.country}
                    street={pickup.street}
                    landmark={pickup.landmark}
                    address={pickup.address}
                    handleInputChange={handleInputChange}
                  />
                </form>
                {/* <DonorFormRow
                  handleInputChange={handleInputChange}
                  state={pickup.state}
                  city={pickup.city}
                  country={pickup.country}
                  street={pickup.street}
                  landmark={pickup.landmark}
                  address={pickup.address}
                  onSubmit={onSubmit}
                /> */}
                <form action="#">
                  <select id="handle-by">
                    <option>Handle by Organisation</option>
                    <option>Hnadle by you</option>
                  </select>
                  <input
                    type="email"
                    name="customerEmail"
                    required=""
                    placeholder="email"
                  />
                  <input
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    type="tel"
                    placeholder="phone-no"
                  />
                  <input
                    type="text"
                    name="dateTime"
                    required=""
                    placeholder="dateTime E.g one Month Ahead"
                  />
                  <PickupForm />
                  <button onClick={onSubmit} className="btn btn-white">
                    submit
                  </button>
                </form>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
