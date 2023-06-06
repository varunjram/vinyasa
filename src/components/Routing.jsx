import React from "react";

import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import CheckOutPage from "../pages/CheckOutPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MockAPI from "../pages/MockApi";
import NotFound from "../pages/NotFound";
import OrderSummary from "../pages/OrderSummary";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import WishList from "../pages/WishList";
import AuthWrapper from "./AuthWrapper";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/cart"
          element={<AuthWrapper children={<Cart />} />}
        />
        <Route
          path="/wishlist"
          element={<AuthWrapper children={<WishList />} />}
        />
        <Route
          path="/profile"
          element={<AuthWrapper children={<Profile />} />}
        />
        <Route
          path="/products"
          element={<Products />}
        />
        <Route
          path="/product/:id"
          element={<Product />}
        />
        <Route
          path="/mock-api"
          element={<MockAPI />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/checkout"
          element={<CheckOutPage />}
        />
        <Route
          path="/order-summary"
          element={<OrderSummary />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}
