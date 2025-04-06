import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { FaBars, FaTimes } from "react-icons/fa";

function HamburgerButton() {
  const [open, setOpen] = useState(false);

  function clickHandler() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <>
      <div className="hamburgerButton z-20" onClick={clickHandler}>
        {open ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default HamburgerButton;
