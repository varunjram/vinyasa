import {createContext, useEffect, useReducer, } from "react";
import userReducer, {Add_user} from "../reducers/userReducer";

export const UserContext = createContext();
const initialUserState = {
  user: {  },
  isLoggedIn:false,
  cart:[],
  wishlist:[],
};
const UserContextProvider = ({children}) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);
  const context = {
    userState,
    userDispatch,
  };

  useEffect(() => {
    const _user = localStorage.getItem("foundUser");
    console.log(" _user: ", JSON.parse(_user));
    userDispatch({type: Add_user, payload: {user: JSON.parse(_user)}});
  },[]);

  return (
    <>
      <UserContext.Provider value={context}>{children}</UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
