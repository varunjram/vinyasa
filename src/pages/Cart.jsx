import React, { useContext } from "react";
import CartProduct from "../components/CartProduct";
import { Button } from "primereact/button";
import { UserContext } from "../context/UserContext";


export default function Cart() {
  const {userState:{cart}} = useContext(UserContext);
  console.log('cart: ', cart);

  return (
    <>
{
  cart.length > 0 ?   
   <main>
     <h1 className="text-center"> My Cart 🛒</h1>
  <div  className="cart__layout">
  <div className="cart__products">{cart?.map(product => <CartProduct product={product} key={product?._id}/> )}</div>
  <div className="cart__value">
    <section className="cart-value">
      <h3 className="heading" >PRICE DETAILS</h3>
      <div className="price__details" >
      <p>Price(1-Item)</p>
      <p>&#8377;2000</p>
      <p>Discount</p>
      <p>-&#8377;1000</p>
      <p>Delivery Charges</p>
      <p>-&#8377;499</p>

       </div>
       <div className="total">
       <p> <strong>TOTAL AMOUNT :</strong> </p>
      <p> <strong>  &#8377;2499</strong> </p>
       </div>
       <p>You will save ₹1000 on this order</p>
       <Button className="block w-full border-noround">Place Order</Button>
    </section>
  </div>
  </div>

    </main>: <h1 className="text-center">Your 🛒 is empty</h1> 
}
    </>
  );
}
