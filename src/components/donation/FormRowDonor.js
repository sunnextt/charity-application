import React from 'react'

export default function DonorFormRow() {
    return (
      <div>
        <form>
          <fieldset>
          <legend>items Details</legend>
          <input type="text" name="name" placeholder="item name" />
          <input type="number" name="quantity" placeholder="Qty" />
          <input type="text" name="desc" placeholder="description" />
          <input type="text" name="unit" placeholder="unit" />
          </fieldset>
        </form>
      </div>
    )
}
