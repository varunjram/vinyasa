import React, {useContext, useEffect, useState} from "react";
import {StoreContext} from "../context/StoreContext";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import {UserContext} from "../context/UserContext";

export default function WishList() {
  const {state, dispatch} = useContext(StoreContext);
  const {userState} = useContext(UserContext);
  console.log("userState: ", userState);

  const [wishlist, setWishlist] = useState();

  const token = localStorage.getItem("userToken");

  const fetchCart = async () => {
    console.log("token: ", token);

    try {
      const response = await axios("/api/user/wishlist", {
        headers: {
          authorization: token,
        },
      });

      setWishlist(response?.data?.wishlist);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <h1 className="text-center"> My Wishlist </h1>
      <pre>{JSON.stringify(userState, null, 2)}</pre>
      <div className="flex gap-5">
        {wishlist?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
