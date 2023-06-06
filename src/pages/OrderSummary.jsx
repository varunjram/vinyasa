import React from "react";
import { useLocation } from "react-router-dom";
import SummaryProductCard from "../components/SummaryProductCard";
import { useUser } from "../context/UserContext";

const DELIVERY_CHARGES = 499;

export default function OrderSummary() {
  const {
    userState: {
      orderSummary: { orderValue, cart, shippingDate, orderNumber },
    },
  } = useUser();

  const { pathname } = useLocation();
  window.scrollTo(0, 0);
  return (
    <>
      {orderNumber ? (
        <main
          className={`order-summary card mt-5 m-auto border-round-xl surface-50 p-3 
      ${pathname === "/order-summary" ? "w-4" : null} `}>
          <h2 className="text-center m-0">Order Summary</h2>
          <h3 className="m-0">Order: {orderNumber}</h3>
          <p className="text-cyan-600 font-medium  m-0 ">Delivered by {shippingDate}</p>
          <h5 className="m-0 mt-2">Ordered Items {`(${orderValue?.quantity})`}</h5>
          <div className="os-product-cards-container">
            {cart?.map((item) => (
              <SummaryProductCard
                product={item}
                key={`${item._id}-summaryCard`}
              />
            ))}
          </div>
          <div className="flex  justify-content-between">
            <p>Subtotal</p>
            <p>&#8377;{orderValue?.price}</p>
          </div>
          <div className="flex  justify-content-between">
            <p>Shipping</p>
            <p>&#8377;{DELIVERY_CHARGES}</p>
          </div>
          <div className="flex  justify-content-between os-total text-cyan-600 ">
            <p>Total</p>
            <p>&#8377;{orderValue?.price + DELIVERY_CHARGES}</p>
          </div>
        </main>
      ) : (
        <h2
          className="text-center
        ">
          No Orders
        </h2>
      )}
    </>
  );
}
