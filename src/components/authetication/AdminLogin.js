import React, {useState} from "react";

export default function LoginForm() {
  const [adminLogin, setAdminLogin ] = useState({
    email: "",
    password: ""
  });

  function onChange(event) {

    const { name, value } = event.target;

    setAdminLogin((prevValue) => {
      return {
        ...prevValue,
        [name]:value
      }
    })
}

function onSubmit(event) {
    event.preventDefault();
    console.log(adminLogin);
    // login(adminLogin);

}

  return (
    <div className="login-body">
      <div className="login-header">
        <h3 className="login-header-text heading-secondary-2">NGO Login Form</h3>
      </div>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={onSubmit} >
          <div className="user-box">
            <input type="text" onChange={onChange} value={adminLogin.email} name="email" required/>
            <label>email</label>
          </div>
          <div className="user-box">
            <input type="password" onChange={onChange} value={adminLogin.password} name="password" required/>
            <label>Password</label>
          </div>
            <input type="submit" value="login" />
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
