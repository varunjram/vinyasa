import React from "react";

import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import WishList from "../pages/WishList";
import Products from "../pages/Products";
import MockAPI from "../pages/MockApi";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthWrapper from "./AuthWrapper";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<AuthWrapper children={<Cart />} />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/mock-api" element={<MockAPI />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
