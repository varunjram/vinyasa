import React, {useContext} from "react";
import {BsBookmarkHeart, BsEggFried, BsFilePerson, BsSearch} from "react-icons/bs";
import {FaOpencart} from "react-icons/fa";

import {Link, useNavigate} from "react-router-dom";
import {UserContext} from "../context/UserContext";
import {Button} from "primereact/button";
import {Logout} from "../reducers/userReducer";

export default function Navigation() {
  const Navigate = useNavigate();
  const {
    userState: {isLoggedIn},
    userDispatch,
  } = useContext(UserContext);
  return (
    <div className="nav-container z-5 bg-white">
      <div className="nav-left">
        <Link className="text-3xl" to="/">
          Vinyasa
        </Link>
      </div>
      <div className="nav-center">
        <BsSearch className="inline" />
        <input className="input" type="search" name="" id="search" placeholder="Search" />
      </div>
      <nav className="nav-right">
        <Link to="/wishlist">
          <BsBookmarkHeart />
        </Link>
        <Link to="/cart">
          <FaOpencart />
        </Link>
        <Link to="/wishlist">
          <BsFilePerson />
        </Link>
        <Link to="/mock-api">
          <BsEggFried />
        </Link>
        <Link to="/login"></Link>

        <Button
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
    </div>
  );
}
