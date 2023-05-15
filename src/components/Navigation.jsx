import React from "react";
import {BsBookmarkHeart, BsFilePerson, BsSearch} from "react-icons/bs";
import {FaOpencart} from "react-icons/fa";

export default function Navigation() {
  return (
    <div className="nav-container z-5 bg-white">
      <div className="nav-left">
        <a href="/">
          <h2 className="text-3xl">Vinyasa</h2>
        </a>
      </div>
      <div className="nav-center">
        <BsSearch className="inline" />
        <input className="input" type="search" name="" id="search" placeholder="Search" />
      </div>
      <div className="nav-right">
        <a href="/wishlist">
          <BsBookmarkHeart />
        </a>
        <a href="/cart">
          <FaOpencart />
        </a>
        <a href="/wishlist">
          <BsFilePerson />
        </a>
        <button className="login-btn btn">Login</button>
      </div>
    </div>
  );
}
