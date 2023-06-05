import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Update_cart, Update_wishlist } from "../reducers/userReducer";
import { addProductsToWishlist, removeCartProduct, updateProductQuantity } from "../utils/apiCalls";

function CartProduct({ product, toast }) {
  const {
    userDispatch,
    userState: { wishlist },
  } = useContext(UserContext);
  const { _id, name, price, image_url, strikePrice, off, qty } = product || {};
  const updateCart = (payload) => userDispatch({ type: Update_cart, payload });
  const UpdateWishlist = (payload) => userDispatch({ type: Update_wishlist, payload });

  return (
    <>
      <article className="cart-product">
        <div className="cart-product--image-box">
          <img
            className=""
            src={image_url}
            alt={name}
          />
        </div>
        <div className="cart-product--content-box">
          <Tooltip target=".heading-text" />
          <h2
            className="heading-text"
            data-pr-tooltip={name}
            data-pr-position="top">
            {name}
          </h2>
          <div className="cart-product--content-box--price-details">
            <span className="price">&#8377;{Math.floor(price)}</span>
            <span className="strikePrice"> &#8377;{strikePrice}</span>
            <p>{off}% OFF</p>
          </div>
          <div className="quantity">
            <p>Quantity: </p>
            <Button
              icon="bi bi-dash"
              rounded
              outlined
              className="w-2rem h-2rem"
              onClick={() => {
                if (qty > 1) {
                  updateProductQuantity(_id, "decrement", toast, updateCart);
                } else {
                  removeCartProduct(_id, toast, updateCart);
                }
              }}
            />
            <input
              type="text"
              className="inline-block ml-2 mr-2 w-2rem text-center"
              value={qty}
            />
            <Button
              icon="bi bi-plus"
              rounded
              outlined
              className="w-2rem h-2rem"
              onClick={() => {
                updateProductQuantity(_id, "increment", null, updateCart);
              }}
            />
          </div>
          <Button
            className="block w-full mb-3 border-noround"
            onClick={() => {
              removeCartProduct(_id, toast, updateCart);
            }}>
            Remove from Cart
          </Button>
          <Button
            className="block w-full border-noround"
            onClick={() => {
              if (!wishlist.some((item) => _id === item?._id)) {
                addProductsToWishlist(product, toast, UpdateWishlist);
              }
              removeCartProduct(_id, null, updateCart);
            }}>
            Move to wishList
          </Button>
        </div>
      </article>
    </>
  );
}

export default CartProduct;
