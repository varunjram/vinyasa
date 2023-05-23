import React, {useRef} from "react";
import {BsHeartFill, BsHeart} from "react-icons/bs";
import {Tooltip} from "primereact/tooltip";
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";
import {Button} from "primereact/button";
import {Toast} from "primereact/toast";
import {addProductsToCart, addProductsToWishlist} from "../utils/apiCalls";

function ProductCard({product}) {
  const Navigate = useNavigate();
  const toast = useRef(null);

  const {_id, name, brand, description, price, categoryName, image_url, rating, strikePrice, off} =
    product || {};

  return (
    <>
      <article className="product-card" onClick={() => Navigate(`/product/${_id}`)}>
        <Toast ref={toast} />
        <div className="product-card__img-container">
          <img src={image_url} alt="" srcset="" />
          <p className="rating">{rating} 🌟</p>
          <Button
            className="wish-list-btn text-xl	"
            icon={false ? "bi bi-heart" : "bi bi-heart-fill"}
            severity="danger"
            rounded
            text
            raised
            aria-label="Favorite"
            onClick={(e) => {
              e.stopPropagation();
              addProductsToWishlist(product, toast);
            }}
          />
          {/* <button className="wish-list-btn">{false ? <BsHeart /> : <BsHeartFill />}</button> */}
        </div>

        <div className="product-card__data">
          <div className="product-card__data__top">
            <Tooltip target=".custom-target-icon" />
            <h3 data-pr-tooltip="No notifications" className=".custom-target-icon">
              {name}
            </h3>
          </div>
          <div className="product-card__data__middle">
            <div className="price-details">
              <span className="price">
                <strong> &#8377;{price}</strong>
              </span>
              <span className="strike-price">&#8377;{Math.floor(strikePrice)}</span>
            </div>
            <p className="off">{off}% off</p>
          </div>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addProductsToCart(product, toast);
            }}
            className="mt-2 block">
            Add to Cart
          </Button>
        </div>
      </article>
    </>
  );
}

export default ProductCard;
