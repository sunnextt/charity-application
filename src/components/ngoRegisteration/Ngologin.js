import React, {useState, useContext, useEffect} from "react";
import Alerts from '../../components/page/Alert';
import {Link} from 'react-router-dom'
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext"
import { useHistory } from "react-router-dom";




const LoginForm = props => {
  console.log(props);
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const history = useHistory();


    const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;


  useEffect(() => {
    if (isAuthenticated) {
    history.push('/dashboard');
    }
    if (!isAuthenticated) {
      setAlert(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);



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

const {email, password} = ngoLogin;

function onSubmit(e) {
  e.preventDefault();
  if (email === '' || password === '') {
    setAlert('Please fill in all fields', 'danger');
  } else {
  login(ngoLogin);
  }
}

  return (
    <div className="login-body">
      <div className="login-header">
        <h3 className="login-header-text heading-secondary-2">NGO Login Form</h3>
      </div>
      <div>
        <Alerts />
      </div>
      <div className="login-box">
        <h2>Login</h2>
        <form  >
          <div className="user-box">
            <input type="text" onChange={onChange}  value={ngoLogin.email} name="email" required/>
            <label>email</label>
          </div>
          <div className="user-box">
            <input type="password" onChange={onChange} value={ngoLogin.password} name="password" required/>
            <label>Password</label>
          </div>
          <Link href="#" type="submit" onClick={onSubmit}>Submit</Link>
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

export default LoginForm;
