import axios from "axios";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Update_cart, Update_wishlist } from "../reducers/userReducer";
import { addProductsToCart, addProductsToWishlist, removeProductsFromWishlist } from "../utils/apiCalls";

export default function Product() {
  const toast = useRef(null);
  const {id} = useParams();
  const [product, setProduct] = useState();
  const {userState:{wishlist},userDispatch} = useContext(UserContext)
  
  const {_id, name, brand, description, price, categoryName, image_url, rating, strikePrice, off} =
    product || {};

    const isWishlistProduct = (id) => wishlist.some(product => product?._id === id )
    
    const updateCart = (payload) =>   userDispatch({type:Update_cart,payload})
    const UpdateWishlist = (payload) =>   userDispatch({type:Update_wishlist,payload})
  const fetchProduct = async () => {
    try {
      const response = await axios(`/api/products/${id}`);
      if (response.status === 200) {
        setProduct(response.data.product);
      }
    } catch (error) {
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
          <p className="rating">{rating}<i className="pl-2 bi-star-fill text-yellow-400"></i></p>
          <Button
            className="wish-list-btn text-xl	"
            icon={isWishlistProduct(_id) ?  "bi bi-heart-fill":"bi bi-heart" }
            severity="danger"
            rounded
            text
            raised
            aria-label="Favorite"
            onClick={(e) => {
              e.stopPropagation();
              if(isWishlistProduct){
                removeProductsFromWishlist(_id,toast,UpdateWishlist)
              }else{
              addProductsToWishlist(product, toast,UpdateWishlist);
              }
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
                : "Lorem ipsum dolor sit amen consectetur advising elite. Impeding, ex."}
            </p>
            <p>
              <strong>Delivery :</strong> in 5 days
            </p>
          </div>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addProductsToCart(product, toast,updateCart);
            }}
            className="mt-2 block">
            Add to Cart
          </Button>
        </div>
      </main>
    </>
  );
}
