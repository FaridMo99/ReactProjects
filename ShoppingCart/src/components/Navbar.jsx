import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaReact } from "react-icons/fa";

function Navbar({children}) {
  return (
    <header className="w-full h-[15vh] bgPrimary fontSecondary">
      <nav className="w-full h-full flex justify-between pl-[1vw] pr-[1vw] items-center">
        <FaReact size="10vh" color="#61DAFB" />
        <div className="flex justify-evenly w-[30%]">
        <NavLink to="/Cart" className={({isActive})=>{ return isActive ? "active font-bold link" : " link font-bold"}}>{FaShoppingCart}</NavLink>
        <NavLink to="/" className={({isActive})=>{ return isActive ? "active font-bold link " : " link font-bold"}}>Home</NavLink>
        {children}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
