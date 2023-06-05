import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Tooltip } from "primereact/tooltip";
import React, { useContext, useRef } from "react";
import { BsBookmarkHeart, BsFilePerson } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LOGOUT } from "../reducers/userReducer";
import NavSearchBar from "./NavSearchBar";

export default function Navigation() {
  const menu = useRef(null);

  const Navigate = useNavigate();
  const {
    userState: { isLoggedIn, cart, wishlist },
    userDispatch,
  } = useContext(UserContext);

  function handleUserLog(isLoggedIn, userDispatch, Navigate) {
    if (isLoggedIn) {
      userDispatch({ type: LOGOUT });
    } else {
      Navigate("/login");
    }
  }
  function LogINOutIcon(isLoggedIn) {
    return isLoggedIn ? "bi bi-door-open" : "bi bi-door-closed";
  }
  let mobileMenuItems = [
    {
      label: "Home",
      icon: "bi bi-house",
      command: () => {
        Navigate("/");
      },
    },
    {
      label: "Wishlist",
      icon: "bi bi-heart",
      command: () => {
        Navigate("/wishlist");
      },
    },
    {
      label: "Cart",
      icon: "bi bi-cart",
      command: () => {
        Navigate("/cart");
      },
    },
    {
      label: isLoggedIn ? "Logout" : "Login",
      icon: LogINOutIcon(isLoggedIn),
      command: () => {
        handleUserLog(isLoggedIn, userDispatch, Navigate);
      },
    },
    {
      label: "Sign up",
      icon: "bi bi-pencil-square",
      command: () => {
        Navigate("/signup");
      },
    },
  ];

  return (
    <div className="nav-container z-5 bg-black-alpha-90">
      <Tooltip target=".wishlist" />
      <Tooltip target=".cart" />
      <Tooltip target=".my-profile" />
      <div className="nav-left pl-5">
        <Link
          className="text-5xl brand cursor-pointer"
          to="/">
          Vinyasa
        </Link>
      </div>

      <NavSearchBar />
      <nav className="nav-right pr-5 hidden md:flex lg:flex">
        <Link
          to="/wishlist"
          className="p-overlay-badge wishlist cursor-pointer"
          data-pr-tooltip="Wishlist"
          data-pr-position="bottom">
          <BsBookmarkHeart />
          {wishlist?.length ? <Badge value={wishlist?.length}></Badge> : null}
        </Link>
        <Link
          to="/cart"
          className="p-overlay-badge cart  cursor-pointer"
          data-pr-tooltip="Cart"
          data-pr-position="bottom">
          <FaOpencart />
          {cart?.length ? <Badge value={cart?.length}></Badge> : null}
        </Link>
        {isLoggedIn && (
          <Link
            to="/profile"
            className="cart cursor-pointer"
            data-pr-tooltip="Profile"
            data-pr-position="bottom">
            <BsFilePerson />
          </Link>
        )}

        <Link to="/login"></Link>

        <Button
          className="border-noround pt-2"
          onClick={() => {
            handleUserLog(isLoggedIn, userDispatch, Navigate);
          }}>
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
      </nav>

      <nav className=" md:hidden lg:hidden ">
        <Menu
          model={mobileMenuItems}
          popup
          ref={menu}
        />
        <Button
          icon="bi bi-list"
          onClick={(e) => menu.current.toggle(e)}
          rounded
          text
          aria-label="Menu"
          className="text-5xl mr-1"
        />
      </nav>
    </div>
  );
}
