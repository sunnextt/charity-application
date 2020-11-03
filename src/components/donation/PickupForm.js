import React from 'react'

const PickupForm = props => {
    return (
      <div>
          <fieldset>
          <legend>Pick-up Details</legend>
          <input type="text" onChange={props.handleInputChange} value={props.country} name="country" placeholder="country" />
          <input type="text" onChange={props.handleInputChange} value={props.state} name="state" placeholder="state" />
          <input type="text" onChange={props.handleInputChange} value={props.city} name="city" placeholder="city" />
          <input type="text" onChange={props.handleInputChange} value={props.street} name="street" placeholder="street" />
          <input type="text" onChange={props.handleInputChange} value={props.landmark} name="landmark" placeholder="landmark" />
          <input type="text" onChange={props.handleInputChange} value={props.address} name="address" placeholder="address" />
          </fieldset>
      </div>
    )
}

export default PickupForm;
