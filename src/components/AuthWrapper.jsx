import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {Navigate, useLocation} from "react-router-dom";

const AuthWrapper = ({children}) => {
  const location = useLocation();
  const {
    userState: {isLoggedIn},
  } = useContext(UserContext);

  return isLoggedIn ? children : <Navigate to="/login" state={{from: location}} />;
};

export default AuthWrapper;
