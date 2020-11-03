import React, { useState, useContext } from "react";
import AuthContext from "../../context/auth/authContext";


export default function AdminPage() {

    const authContext = useContext(AuthContext);
    // const { register } = authContext;


  const [adminReg, setAdminReg ] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  });

  function onChange(event) {

    const { name, value } = event.target;

    setAdminReg((prevValue) => {
      return {
        ...prevValue,
        [name]:value
      }
    })
}

function onSubmit(event) {
  event.preventDefault();
  console.log(adminReg);

  authContext.register({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

}

  return (
    <div className="admin-page">
      <div className="admin-page-form">
        <div className="login-header">
          <h2 className="login-header-text heading-secondary-2">
            Admin Portal
          </h2>
        </div>
        <div className="login-box">
          <h2>Form</h2>
          <form onSubmit={onSubmit}>
            <div className="user-box">
              <input
                onChange={onChange}
                type="text"
                value={adminReg.firstName}
                name="firstName"
                placeholder="First name"
                required
              />
              <label>firstName</label>
            </div>
            <div className="user-box">
              <input
                onChange={onChange}
                type="text"
                value={adminReg.lastName}
                name="lastName"
                placeholder="Lastname"
                required
              />
              <label>lastName</label>
            </div>
            <div className="user-box">
              <input
                onChange={onChange}
                type="email"
                value={adminReg.email}
                name="email"
                placeholder="email"
                required
              />
              <label>email</label>
              <div className="user-box">
                <input
                  onChange={onChange}
                  type="tel"
                  value={adminReg.phone}
                  name="phone"
                  placeholder="Phone"
                  required
                />
                <label>Phone</label>
              </div>
            </div>
            <div className="user-box">
              <input
                onChange={onChange}
                type="Password"
                value={adminReg.password}
                name="password"
                placeholder="Password"
                required
              />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input
                onChange={onChange}
                type="Password"
                value={adminReg.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
              <label>Confirm Password</label>
            </div>
            <input
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
