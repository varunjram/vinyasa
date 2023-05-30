import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Tooltip } from "primereact/tooltip";
import React, { useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Update_cart, Update_wishlist } from "../reducers/userReducer";
import {
  addProductsToCart,
  addProductsToWishlist,
  removeProductsFromWishlist,
} from "../utils/apiCalls";

function ProductCard({ product, toast }) {
  const Navigate = useNavigate();
  const Location = useLocation();
  const {
    userState: { cart, wishlist, isLoggedIn },
    userDispatch,
  } = useContext(UserContext);
  const isWishlistProduct = (id) => wishlist.some((product) => product?._id === id);
  const isCartProduct = (id) => cart.some((product) => product?._id === id);

  const { _id, name, price, image_url, rating, strikePrice, off } = product || {};
  console.log("cart: ", cart?.length);

  const updateCart = (payload) => userDispatch({ type: Update_cart, payload });
  const UpdateWishlist = (payload) => userDispatch({ type: Update_wishlist, payload });

  return (
    <>
      <Toast ref={toast} />
      <article
        className="product-card cursor-pointer"
        onClick={() => Navigate(`/product/${_id}`)}>
        <div className="product-card__img-container">
          <img
            src={image_url}
            alt=""
          />
          <p className="rating">
            {rating}
            <i className="pl-2 bi-star-fill text-yellow-400"></i>
          </p>
          <Button
            className="wish-list-btn text-xl	"
            icon={isWishlistProduct(_id) ? "bi bi-heart-fill" : "bi bi-heart"}
            severity="danger"
            rounded
            text
            raised
            aria-label="Favorite"
            onClick={(e) => {
              e.stopPropagation();
              if (isLoggedIn) {
                isWishlistProduct(_id)
                  ? removeProductsFromWishlist(_id, toast, UpdateWishlist)
                  : addProductsToWishlist(product, toast, UpdateWishlist);
              } else {
                Navigate("/login", { state: { from: Location } });
              }
            }}
          />
        </div>

        <div className="product-card__data">
          <div className="product-card__data__top">
            <Tooltip target=".custom-target-icon" />
            <h3
              data-pr-tooltip="No notifications"
              className=".custom-target-icon">
              {name}
            </h3>
          </div>
          <div className="product-card__data__middle">
            <div className="price-details">
              <span className="price">
                <strong> &#8377;{Math.floor(price)}</strong>
              </span>
              <span className="strike-price">&#8377;{Math.floor(strikePrice)}</span>
            </div>
            <p className="off">{off}% off</p>
          </div>
          <Button
            severity={isCartProduct(_id) ? "help" : null}
            onClick={(e) => {
              e.stopPropagation();
              if (!isCartProduct(_id)) {
                isLoggedIn
                  ? addProductsToCart(product, toast, updateCart)
                  : Navigate("/login", { state: { from: Location } });
              } else {
                Navigate("/cart", { state: { from: Location } });
              }
            }}
            className="mt-2 block">
            {isCartProduct(_id) ? "Go to Cart" : " Add to Cart"}
          </Button>
        </div>
      </article>
    </>
  );
}

export default ProductCard;
