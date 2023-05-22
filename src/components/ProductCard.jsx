import React from "react";
import {BsHeartFill, BsHeart} from "react-icons/bs";
import {Tooltip} from "primereact/tooltip";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Button} from "primereact/button";

function ProductCard({product}) {
  const Navigate = useNavigate();

  const {_id, name, brand, description, price, categoryName, image_url, rating, strikePrice, off} =
    product || {};

  const token = localStorage.getItem("userToken");
  console.log("token product: ", token);

  const addProductsToCart = async () => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        {product},
        {
          headers: {
            authorization: token,
          },
        }
      );
      alert(response.status);
    } catch (error) {
      console.log("error: ", error);
      alert(error);
    }
  };

  return (
    <article
      className="product-card"
      // onClick={() => Navigate(`/product/${_id}`)}
    >
      <div className="product-card__img-container">
        <img src={image_url} alt="" srcset="" />
        <p className="rating">{rating} 🌟</p>
        <button className="wish-list-btn">{false ? <BsHeart /> : <BsHeartFill />}</button>
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
            addProductsToCart();
          }}
          className="mt-2 block">
          Add to Cart
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
