import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {Navigate, useLocation} from "react-router-dom";

const AuthWrapper = ({children}) => {
  const location = useLocation();
  console.log("locationfromauth: ", location);
  //   const Navigate = useNavigate();
  const {
    userState: {isLoggedIn},
  } = useContext(UserContext);
  console.log("isLoggedIn: ", Boolean(isLoggedIn));

  return isLoggedIn ? children : <Navigate to="/login" state={{from: location}} />;
};

export default AuthWrapper;
