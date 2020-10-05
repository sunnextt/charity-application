import React from "react";
import {Link} from 'react-router-dom'
// import Styled from "styled-components"

export default function LoginForm() {
  return (
    <div className="login-body">
      <div className="login-header">
        <h3 className="login-header-text heading-secondary-2">NGO Login Form</h3>
      </div>
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="name" required/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required/>
            <label>Password</label>
          </div>
          <Link href="#">Submit</Link>
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
