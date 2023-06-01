import {createContext, useEffect, useReducer} from "react";
import userReducer, {LOGIN, initialUserState} from "../reducers/userReducer";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const context = {
    userState,
    userDispatch,
  };

  console.log("userState: ", userState);
  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("foundUser"));
    const token = localStorage.getItem("userToken");
    console.log("_user: ", _user);
    console.log("_user: ", Boolean(token));
    if (_user?._id && token) {
      userDispatch({
        type: LOGIN,
        payload: {user: _user, isLoggedIn: token ? true : false},
      });
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={context}>{children}</UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
