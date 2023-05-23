import React, {useState, useEffect, useContext, useRef} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../context/UserContext";
import {StoreContext} from "../context/StoreContext";
import {Tooltip} from "primereact/tooltip";
import {Button} from "primereact/button";
import {BsHeart, BsHeartFill} from "react-icons/bs";
import {addProductsToCart, addProductsToWishlist} from "../utils/apiCalls";
import {Toast} from "primereact/toast";

export default function Product() {
  const toast = useRef(null);
  const {id} = useParams();
  const {products} = useContext(StoreContext);
  const [product, setProduct] = useState();
  console.log("id: ", id);
  const {_id, name, brand, description, price, categoryName, image_url, rating, strikePrice, off} =
    product || {};

  const fetchProduct = async () => {
    try {
      const response = await axios(`/api/products/${id}`);
      if (response.status === 200) {
        setProduct(response.data.product);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Toast ref={toast} />
      <main className="single-product">
        <div className="single-product__img-container">
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
        </div>

        <div className="single-product__data">
          <div className="single-product__data__top">
            <h2 className="m-0">{name}</h2>
            <div className="flex justify-content-between mb-3">
              <h3 className="m-0">{brand}</h3>
              <p className="m-0">{categoryName}</p>
            </div>
            <div className="price-info">
              <div className="price-details">
                <span className="price">
                  <strong> &#8377;{price}</strong>
                </span>
                <span className="strike-price">&#8377;{Math.floor(strikePrice)}</span>
              </div>
              <p className="off">{off}% off</p>
            </div>
          </div>
          <hr />
          <div className="single-product__data__middle">
            <p>
              <strong>Availability :</strong>In Stock
            </p>
            <p>
              <strong>Description:</strong>
              {description
                ? description
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ex."}
            </p>
            <p>
              <strong>Delivery :</strong> in 5 days
            </p>
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
      </main>
    </>
  );
}
