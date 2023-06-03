import React, { useContext, useRef } from "react";
import { UserContext } from "../context/UserContext";
import AddressCard from "../components/AddressCard";
import { Toast } from "primereact/toast";
import calculateOrderValue from "../utils/orderValueFunction";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { ADD_ORDER_SUMMARY, Update_cart } from "../reducers/userReducer";
import { removeCartProduct } from "../utils/apiCalls";
import moment from "moment";

const DELIVERY_CHARGES = 499;

export default function CheckOutPage() {
  const toast = useRef(null);
  const {
    userState: { addressBook, cart },
    userDispatch,
  } = useContext(UserContext);
  const Navigate = useNavigate();

  const { name, lastName, fullAddress, city, state, country, phone, email } = addressBook.find(
    (_add) => _add.isDefault
  );

  const orderValue = calculateOrderValue(cart);

  const paymentAccepted = () => {
    const updateCart = (payload) => userDispatch({ type: Update_cart, payload });
    const emptyCart = cart?.map?.(({ _id }) => removeCartProduct(_id, null, updateCart));
    userDispatch({
      type: ADD_ORDER_SUMMARY,
      payload: {
        orderValue,
        cart,
        shippingDate: moment().add(3, "days").format("MMMM Do YYYY, h:mm:ss a"),
        orderNumber: Math.floor(Math.random() * 100000000),
      },
    });
    userDispatch({ type: Update_cart, payload: [] });
    Navigate("/order-summary");
  };
  const paymentRejected = () => {
    toast.current.show({
      severity: "warn",
      summary: "Information",
      detail: "Please try again after some time",
      life: 3000,
    });
  };

  const paymentSuccessful = () => {
    confirmDialog({
      message: "is Payment SuccessFull",
      // acceptClassName: "p-button-danger",
      accept: paymentAccepted,
      reject: paymentRejected,
    });
  };
  return (
    <>
      <Toast
        ref={toast}
        position="bottom-right"
      />
      <ConfirmDialog header="Payment" />
      <h2 className="text-center">Check Out</h2>
      <main className="grid">
        <section className="address-section col-6">
          {addressBook?.map((address) => (
            <AddressCard
              address={address}
              toast={toast}
              col={12}
            />
          ))}
        </section>
        <section className="order-summary col-6">
          <div className="cart__value">
            <section className="price-details">
              <h3 className="heading">Order Summary</h3>
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
              <div>
                <h3>Deliver To : </h3>
                <p>
                  <strong>To : </strong>
                  {`${name}, ${lastName}, ${fullAddress} , ${city} , ${state} , ${country}, `}
                </p>
                <p>
                  <strong>Ph:</strong>
                  {phone}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <hr />
              </div>
              <Button
                className="block w-full border-noround"
                onClick={paymentSuccessful}>
                Check-Out
              </Button>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
