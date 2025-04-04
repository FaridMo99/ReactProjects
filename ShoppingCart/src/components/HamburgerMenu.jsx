import React from "react";

function HamburgerMenu({ open }) {
  if (open) {
    return (
        <div className="w-[100%] h-screen relative top-0 right-0 z-1 bg-red-300">
        <ul className="w-[60%] h-screen flex flex-col list absolute right-0 top-0 bg-blue-500 justify-evenly items-center">
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
    </ul>
    </div>
  )}
}

export default HamburgerMenu;
