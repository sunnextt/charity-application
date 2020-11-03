import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  // USER_LOADED,
  // AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../type";

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register User
  const register = formData => {
    fetch("/admin", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        dispatch({
        type: REGISTER_SUCCESS,
        payload: data
      });
     })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({
          type: REGISTER_FAIL,
          payload: error.msg,
        });
    });
  };

  // Login User
  const login = (ngoLogin) => {
      console.log(ngoLogin);
    fetch("/auth/access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ngoLogin),
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch({
          type: LOGIN_FAIL,
          payload: error,
        });
      });
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
