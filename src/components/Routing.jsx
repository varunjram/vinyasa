import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import WishList from "../pages/WishList";
import Products from "../pages/Products";
import MockAPI from "../pages/MockApi";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthWrapper from "./AuthWrapper";
import Profile from "../pages/Profile";
import Product from "../pages/Product";
import CheckOutPage from "../pages/CheckOutPage";
import Test from "../pages/Test";
import OrderSummary from "../pages/OrderSummary";

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
          path="/test"
          element={<Test />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}
