import React, { useContext, useRef } from "react";
import { BsBookmarkHeart, BsEggFried, BsFilePerson } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";

import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Tooltip } from "primereact/tooltip";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LOGOUT } from "../reducers/userReducer";
import NavSearchBar from "./NavSearchBar";

export default function Navigation() {
  let mobileMenueItems = [
    { label: "New", icon: "pi pi-fw pi-plus" },
    { label: "Delete", icon: "pi pi-fw pi-trash" },
  ];
  const menu = useRef(null);

  const Navigate = useNavigate();
  const {
    userState: { isLoggedIn, cart, wishlist },
    userDispatch,
  } = useContext(UserContext);

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
        {/* <Link to="/mock-api">
          <BsEggFried />
        </Link> */}

        <Link to="/login"></Link>

        <Button
          className="border-noround pt-2"
          onClick={() => {
            if (isLoggedIn) {
              userDispatch({ type: LOGOUT });
            } else {
              Navigate("/login");
            }
          }}>
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
      </nav>

      <nav className=" md:hidden lg:hidden">
        <Menu
          model={mobileMenueItems}
          popup
          ref={menu}
        />
        <Button
          icon="bi bi-list"
          onClick={(e) => menu.current.toggle(e)}
          rounded
          text
          aria-label="Menu"
        />
      </nav>
    </div>
  );
}
