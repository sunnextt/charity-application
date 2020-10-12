import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function AdminPage() {
  const [adminReg, setAdminReg ] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  });

  function handleChange(event) {

    const { name, value } = event.target;

    setAdminReg((prevValue) => {
      return {
        ...prevValue,
        [name]:value
      }
    })
}

function handleClick(event) {
    event.preventDefault();
    console.log(adminReg);
    fetch('https://sua-charity-api.herokuapp.com/api/v1.0.0/admin', {
      method: 'POST', // or 'PUT'
      headers: {
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoSWQiOiI1ZjdhMjNhNzBhMzc0MDQ4NmM4YTZiNzQiLCJlbWFpbCI6InN1bm5leHQyMDEwQGdtYWlsLmNvbSIsImlhdCI6MTYwMjQyMDE5MiwiZXhwIjoxNjAyNDIwNzkyLCJhdWQiOiJhZG1pbiIsImlzcyI6IkdpdmVUb0NoYXJpdHkifQ.m60eSGiC7SVJT4sG4aCWPrp6bGMSaYW3wcb5QgUERC4',
    'Content-Type': 'application/json'
    },
      body: JSON.stringify(adminReg),
      redirect: 'follow',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
  });
}

  return (
      <div className="admin-page">
      <div className="admin-page-form">
        <div className="login-header">
          <h2 className="login-header-text heading-secondary-2">Admin Portal</h2>
        </div>
          <div className="login-box">
            <h2>Form</h2>
            <form >
              <div className="user-box">
            <input onChange={handleChange} type="text" value={adminReg.firstName} name="firstName" placeholder="First name"  required/>
            <label>firstName</label>
              </div>
              <div className="user-box">
            <input onChange={handleChange} type="text"  value={adminReg.lastName} name="lastName" placeholder="Lastname"  required/>
            <label>lastName</label>
              </div>
              <div className="user-box">
                <input onChange={handleChange} type="email" value={adminReg.email}  name="email" placeholder="email"  required/>
                <label>email</label>
                <div className="user-box">
                  <input onChange={handleChange} type="tel"  value={adminReg.phone} name="phone" placeholder="Phone"  required/>
                  <label>Phone</label>
                </div>
              </div>
              <div className="user-box">
                <input onChange={handleChange} type="Password"  value={adminReg.password} name="password" placeholder="Password" required/>
                <label>Password</label>
              </div>
              <div className="user-box">
                <input onChange={handleChange} type="Password"  value={adminReg.confirmPassword} name="confirmPassword" placeholder="Confirm Password" required/>
                <label>Confirm Password</label>
              </div>
                <Link  href="#" onClick={handleClick} type="submit">Register</Link>
            </form>
          </div>
      </div>
    </div>
  )
}
