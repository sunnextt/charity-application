import React, {useState} from "react";
import {Link} from 'react-router-dom'
// import Styled from "styled-components"

export default function LoginForm() {

  const [ngoLogin, setNgoLogin ] = useState({
    email: "",
    password: ""
  });

  function onChange(event) {

    const { name, value } = event.target;

    setNgoLogin((prevValue) => {
      return {
        ...prevValue,
        [name]:value
      }
    })
}

function onSubmit(event) {
    event.preventDefault();
    console.log(ngoLogin);
    fetch('https://sua-charity-api.herokuapp.com/api/v1.0.0/admin', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ngoLogin),
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
    <div className="login-body">
      <div className="login-header">
        <h3 className="login-header-text heading-secondary-2">NGO Login Form</h3>
      </div>
      <div class="login-box">
        <h2>Login</h2>
        <form onClick={onSubmit} >
          <div className="user-box">
            <input type="text" onChange={onChange}  value={ngoLogin.email} name="name" required/>
            <label>email</label>
          </div>
          <div className="user-box">
            <input type="password" onChange={onChange} value={ngoLogin.password} name="password" required/>
            <label>Password</label>
          </div>
          <Link href="#" type="submit">Submit</Link>
        </form>
      </div>
      <div className="">
        <div>
          <span>Forgot your email or password?</span><span><a href="/resetpassword">Reset</a></span>
        </div>
        <div>
          <span>Don't have an account?</span><span><a href="signup" >Sign Up Now</a></span>
        </div>
      </div>
    </div>
  );
}
