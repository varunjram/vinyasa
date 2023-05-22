import React, {useContext, useEffect, useState} from "react";
import {StoreContext} from "../context/StoreContext";
import {Update_Test} from "../reducers/storeReducer";
import axios from "axios";

export default function Cart() {
  const {state, dispatch} = useContext(StoreContext);
  const [cart, setCard] = useState();

  const token = localStorage.getItem("userToken");

  const fetchCart = async () => {
    console.log("token: ", token);

    try {
      const response = await axios("/api/user/cart", {
        headers: {
          // "content-type": "application/json",
          authorization: token,
        },
      });

      setCard(response);
    } catch (error) {
      setCard(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      Cart Page
      <h2>test : - {"test"}</h2>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
      <button onClick={() => dispatch({type: "Update_Test"})}>TEST</button>
    </div>
  );
}
