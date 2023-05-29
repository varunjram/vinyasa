import React, { useContext } from "react";
import CartProduct from "../components/CartProduct";
import { Button } from "primereact/button";
import { UserContext } from "../context/UserContext";

const DELIVERY_CHARGES = 499;
export default function Cart() {
  const {
    userState: { cart },
  } = useContext(UserContext);
  console.log("cart: ", cart);

  console.log("cart: ", cart);
  const orderValue = cart.reduce(
    (acc, curr) => {
      // {
      //   "_id": "75ffe0bf-a612-4b79-977c-cf9d313406cf",
      //   "name": "Flannel pajama pant",
      //   "brand": "Puma",
      //   "price": 2927,
      //   "categoryName": "Men's Clothing",
      //   "image_url": "https://www.jcrew.com/s7-img-facade/AZ665_WX8063_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
      //   "rating": 3,
      //   "strikePrice": 4097.8,
      //   "off": 40,
      //   "id": "31",
      //   "createdAt": "2023-05-28T20:17:20+05:30",
      //   "updatedAt": "2023-05-28T20:17:20+05:30",
      //   "qty": 1
      // }

      console.log("curr: ", curr);
      // curr;
      return {
        price: acc.price + curr.price * curr.qty,
        discount: acc.discount + (curr.strikePrice - curr.price) * curr.qty,
        quantity: acc.quantity + curr.qty,
      };
    },
    {
      price: 0,
      discount: 0,
      quantity: 0,
    }
  );
  console.log("orderValue: ", orderValue);

  return (
    <>
      {cart?.length > 0 ? (
        <main>
          <h1 className="text-center"> My Cart 🛒</h1>
          <div className="cart__layout">
            <div className="cart__products">
              {cart?.map((product) => (
                <CartProduct
                  product={product}
                  key={product?._id}
                />
              ))}
            </div>
            <div className="cart__value">
              <section className="cart-value">
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
                <Button className="block w-full border-noround">Place Order</Button>
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
