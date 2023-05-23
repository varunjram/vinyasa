import React, {useContext, useRef} from "react";
import {BsBookmarkHeart, BsEggFried, BsFilePerson, BsSearch} from "react-icons/bs";
import {FaOpencart} from "react-icons/fa";

import {Link, useNavigate} from "react-router-dom";
import {UserContext} from "../context/UserContext";
import {Button} from "primereact/button";
import {Logout} from "../reducers/userReducer";
import {Tooltip} from "primereact/tooltip";
import {Menu} from "primereact/menu";

export default function Navigation() {
  let mobileMenueItems = [
    {label: "New", icon: "pi pi-fw pi-plus"},
    {label: "Delete", icon: "pi pi-fw pi-trash"},
  ];
  const menu = useRef(null);

  const Navigate = useNavigate();
  const {
    userState: {isLoggedIn},
    userDispatch,
  } = useContext(UserContext);
  return (
    <div className="nav-container z-5 bg-white">
      <Tooltip target=".wishlist" />
      <Tooltip target=".cart" />
      <Tooltip target=".profile" />
      <div className="nav-left pl-5">
        <Link className="text-5xl brand cursor-pointer" to="/">
          Vinyasa
        </Link>
      </div>
      <div className="nav-center">
        <BsSearch className="inline" />
        <input className="input" type="search" name="" id="search" placeholder="Search" />
      </div>
      <nav className="nav-right pr-5 hidden md:flex lg:flex">
        <Link
          to="/wishlist"
          className="wishlist"
          data-pr-tooltip="Wishlist"
          data-pr-position="bottom">
          <BsBookmarkHeart />
        </Link>
        <Link to="/cart" className="cart" data-pr-tooltip="Cart" data-pr-position="bottom">
          <FaOpencart />
        </Link>
        {isLoggedIn && (
          <Link
            to="/profile"
            className="profile"
            data-pr-tooltip="Profile"
            data-pr-position="bottom">
            <BsFilePerson />
          </Link>
        )}
        <Link to="/mock-api">
          <BsEggFried />
        </Link>
        <Link to="/login"></Link>

        <Button
          className="border-noround pt-2"
          onClick={() => {
            if (isLoggedIn) {
              userDispatch({type: Logout});
            } else {
              Navigate("/login");
            }
          }}>
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
      </nav>

      <nav className=" md:hidden lg:hidden">
        <Menu model={mobileMenueItems} popup ref={menu} />
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
