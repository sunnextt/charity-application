import React from "react";
import { Link } from "react-router-dom";

export default function PopUp() {
  return (
    <div className="popup" id="popup">
      <div className="popup-div">
        <div className="popup__content u-heading-padding">
          <div className=" u-center-text">
            <Link to="#home" className="popup__close">&times;</Link>
            <h3 className="heading-secondary-2 popup-heading">
              Organisation Name
            </h3>
          </div>
          <div className="organisation-items-table u-center-text ">
            <h4 className="u-heading-padding">Table of Items Needed</h4>
            <table>
              <thead>
                <tr>
                  <th>Total</th>
                  <th>Remaining</th>
                  <th>Given to</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-column="Total">0</td>
                  <td data-column="remaining">0</td>
                  <td data-column="Given to">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="logistic">
            <h3 className="heading-secondary-2 logistic-heading">Logostic</h3>
            <div className="logistic-form">
              <div class="logistic-form__group">
                <form action="#">
                  <select id="handle-by">
                    <option>Handle by Organisation</option>
                    <option>Hnadle by you</option>
                  </select>
                  <input
                    type="text"
                    name="customerName"
                    required=""
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="customerEmail"
                    required=""
                    placeholder="email"
                  />
                  <input
                    name="customerPhone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    type="tel"
                    placeholder="phone-no"
                  />
                  <textarea
                    id="customerNote"
                    name="customerNote"
                    required=""
                    rows="4"
                    placeholder="contact-address"
                  />
                  <Link to="#" className="btn btn-white">submit</Link>
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
