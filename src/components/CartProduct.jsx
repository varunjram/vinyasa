import axios from "axios";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import React, { useContext, useRef } from "react";
import { UserContext } from "../context/UserContext";
import { Update_cart, Update_wishlist } from "../reducers/userReducer";
import { addProductsToWishlist } from "../utils/apiCalls";
import { Toast } from "primereact/toast";

function CartProduct({ product }) {
  const { userDispatch } = useContext(UserContext);
  const { _id, name, price, image_url, strikePrice, off, qty } = product || {};
  const toast = useRef();

  const updateCart = (payload) => userDispatch({ type: Update_cart, payload });
  const UpdateWishlist = (payload) => userDispatch({ type: Update_wishlist, payload });

  const updateProductQuantity = async (type) => {
    const token = localStorage.getItem("userToken");
    try {
      const response = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: {
            type,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        updateCart(response?.data?.cart);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const removeCartProduct = async () => {
    const token = localStorage.getItem("userToken");
    console.log("token: ", token);
    try {
      const response = await axios.delete(`/api/user/cart/${_id}`, {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        updateCart(response?.data?.cart);
      }
    } catch (error) {
      console.log("error delete: ", error);
    }
  };

  return (
    <>
      <Toast ref={toast} />
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
                  updateProductQuantity("decrement");
                } else {
                  removeCartProduct();
                }
              }}
            />
            <input
              type="text"
              className="inline-block ml-2 mr-2 w-2rem"
              value={qty}
            />
            <Button
              icon="bi bi-plus"
              rounded
              outlined
              className="w-2rem h-2rem"
              onClick={() => {
                updateProductQuantity("increment");
              }}
            />
          </div>
          <Button
            className="block w-full mb-3 border-noround"
            onClick={() => {
              removeCartProduct();
            }}>
            Remove from Cart
          </Button>
          <Button
            className="block w-full border-noround"
            onClick={() => {
              addProductsToWishlist(product, toast, UpdateWishlist);
              removeCartProduct();
            }}>
            Move to wishList
          </Button>
        </div>
      </article>
    </>
  );
}

export default CartProduct;
