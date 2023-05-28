import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { UserContext } from "../context/UserContext";

export default function WishList() {
  const {userState:{wishlist}} = useContext(UserContext);

  return (
    <div>
      <h1 className="text-center"> My Wishlist ({wishlist?.length}) </h1>
      <div className="flex gap-5 m-5">
        {wishlist?.map((product) => (
          <ProductCard product={product} key={`${product?._id}-${product?.name}`} />
        ))}
      </div>
    </div>
  );
}
