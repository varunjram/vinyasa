import React from "react";
import {BsHeartFill, BsHeart} from "react-icons/bs";

function ProductCard({product}) {
  const {name, brand, description, price, categoryName, image_url, rating, strikePrice, off} =
    product || {};

  return (
    <article className="product-card">
      <div className="product-card__img-container">
        <img src={image_url} alt="" srcset="" />
        <p className="rating">{rating} 🌟</p>
        <button className="wish-list-btn">{false ? <BsHeart /> : <BsHeartFill />}</button>
      </div>

      <div className="product-card__data">
        <div className="product-card__data__top">
          <h3>{name}</h3>
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
        <div className="product-card__data__bottom"></div>
        <button aria-label="Add to Cart" class="p-button p-component">
          <span class="p-button-label p-c">Add to Cart</span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
