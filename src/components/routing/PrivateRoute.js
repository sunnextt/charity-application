import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component}) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return (
    <Route
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to='/login_form' />
        ) : (
          <Component />
        )
      }
    />
  );
};

export default PrivateRoute;
