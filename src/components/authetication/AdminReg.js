import React, { useState } from 'react'

export default function AdminPage() {



  const [formContact, setFormContact ] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    username:"",
    password: "",
  });

  function handleChange(event) {

    const { name, value } = event.target;

    setFormContact((prevValue) => {
      return {
        ...prevValue,
        [name]:value
      }
    })
}

function handleClick(event) {
    event.preventDefault();
    console.log(formContact);

   //  fetch('https://your-node-server-here.com/api/endpoint', {
   //   method: 'POST',
   //   // We convert the React state to JSON and send it as the POST body
   //   body: JSON.stringify(this.state)
   // }).then(function(response) {
   //   console.log(response)
   //   return response.json();
   // });

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
            <input onChange={handleChange} type="text" value={formContact.firstname} name="firstname" placeholder="First name"  required/>
            <label>Firstname</label>
              </div>
              <div className="user-box">
            <input onChange={handleChange} type="text"  value={formContact.lastname} name="lastname" placeholder="Last name"  required/>
            <label>Lastname</label>
              </div>
              <div className="user-box">
                <input onChange={handleChange} type="email" value={formContact.email}  name="email" placeholder="email"  required/>
                <label>email</label>
                <div className="user-box">
                  <input onChange={handleChange} type="tel"  value={formContact.phone} name="phone" placeholder="Phone"  required/>
                  <label>Phone</label>
                </div>
              </div>
              <div className="user-box">
                <input onChange={handleChange} type="text"  value={formContact.username} name="username" placeholder="Username" required/>
                <label>Username</label>
              </div>
              <div className="user-box">
                <input onChange={handleChange} type="Password"  value={formContact.password} name="password" placeholder="Password" required/>
                <label>Password</label>
              </div>
                <link  href="#" onClick={handleClick} type="submit">Register</link>
            </form>
          </div>
      </div>
    </div>
  )
}
