import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartIconAmount from "./CartIconAmount";

function Links() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "active font-bold" : "font-bold";
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Cart"
        className={({ isActive }) => {
          return isActive ? "active font-bold relative" : "font-bold relative";
        }}
      >
        <FaShoppingCart />
        <CartIconAmount />
      </NavLink>
    </>
  );
}

export default Links;
