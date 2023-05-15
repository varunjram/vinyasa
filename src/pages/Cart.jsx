import React, {useContext} from "react";
import {StoreContext} from "../context/StoreContext";
import {Update_Test} from "../reducers/storeReducer";

export default function Cart() {
  const {
    state: {test},
    dispatch,
  } = useContext(StoreContext);
  return (
    <div>
      Cart Page
      <h2>test : - {test}</h2>
      <button onClick={() => dispatch({type: Update_Test})}>TEST</button>
    </div>
  );
}
