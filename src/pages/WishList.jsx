import React, { useContext, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { UserContext } from "../context/UserContext";
import { Toast } from "primereact/toast";

export default function WishList() {
  const {
    userState: { wishlist },
  } = useContext(UserContext);
  const toast = useRef(null);
  console.log("toast: ", toast.current);

  return (
    <div>
      <Toast
        ref={toast}
        position="bottom-right"
      />
      <h1 className="text-center"> My Wishlist ({wishlist?.length}) </h1>
      <div className="flex flex-wrap gap-5 m-5">
        {wishlist?.map((product) => (
          <ProductCard
            product={product}
            key={`${product?._id}-${product?.name}`}
            toast={toast}
          />
        ))}
      </div>
    </div>
  );
}
