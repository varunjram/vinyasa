import React from "react";

import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import WishList from "../pages/WishList";
import Products from "../pages/Products";
import MockAPI from "../pages/MockApi";
import NotFound from "../pages/NotFound";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/mock-api" element={<MockAPI />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
