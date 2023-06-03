import React from "react";
import { useUser } from "../context/UserContext";
import SummaryProductCard from "../components/SummaryProductCard";
import calculateOrderValue from "../utils/orderValueFunction";

const DELIVERY_CHARGES = 499;

export default function OrderSummary() {
  const {
    userState: {
      orderSummary: { orderValue, cart, shippingDate, orderNumber },
    },
  } = useUser();

  return (
    <>
      <main className="order-summary card w-4 mt-5 m-auto border-round-xl surface-50 p-3">
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
    </>
  );
}
