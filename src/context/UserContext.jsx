import {createContext, useReducer, useState} from "react";
import userReducer from "../reducers/userReducer";

export const UserContext = createContext();
const initialUserState = {
  user: {
    test: "",
    isLoggedIn: false,
  },
};
const UserContextProvider = ({children}) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  console.log("userState: ", userState);
  const context = {
    userState,
    userDispatch,
  };

  return (
    <>
      <UserContext.Provider value={context}>{children}</UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
