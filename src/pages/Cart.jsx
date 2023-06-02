import React, { useContext, useRef } from "react";
import CartProduct from "../components/CartProduct";
import { Button } from "primereact/button";
import { UserContext } from "../context/UserContext";
import { Toast } from "primereact/toast";
import calculateOrderValue from "../utils/orderValueFunction";

import { useNavigate } from "react-router-dom";

const DELIVERY_CHARGES = 499;
export default function Cart() {
  const {
    userState: { cart },
  } = useContext(UserContext);

  const toast = useRef();

  const Navigate = useNavigate();

  const orderValue = calculateOrderValue(cart);

  return (
    <>
      <Toast
        ref={toast}
        position="bottom-right"
      />
      {cart?.length > 0 ? (
        <main>
          <h1 className="text-center  "> My Cart 🛒</h1>
          <div className="cart__layout">
            <div className="cart__products">
              {cart?.map((product) => (
                <CartProduct
                  product={product}
                  key={product?._id}
                  toast={toast}
                />
              ))}
            </div>
            <div className="cart__value">
              <section className="price-details">
                <h3 className="heading">PRICE DETAILS</h3>
                <div className="price__details">
                  <p>Price({orderValue.quantity}-Item)</p>
                  <p>&#8377;{orderValue?.price}</p>
                  <p>Discount</p>
                  <p>-&#8377;{orderValue?.discount}</p>
                  <p>Delivery Charges</p>
                  <p>-&#8377;499</p>
                </div>
                <div className="total">
                  <p>
                    <strong>TOTAL AMOUNT :</strong>
                  </p>
                  <p>
                    <strong> &#8377;{orderValue?.price + DELIVERY_CHARGES}</strong>
                  </p>
                </div>
                <p>You will save ₹{orderValue?.discount} on this order</p>
                <Button
                  className="block w-full border-noround"
                  onClick={() => Navigate("/checkout")}>
                  Place Order
                </Button>
              </section>
            </div>
          </div>
        </main>
      ) : (
        <h1 className="text-center">Your 🛒 is empty</h1>
      )}
    </>
  );
}
