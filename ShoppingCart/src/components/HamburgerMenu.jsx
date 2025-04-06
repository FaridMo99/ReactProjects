import React from "react";
import Links from "./Links";

function HamburgerMenu({ open, setOpen }) {
  const clickHandler = (e) => {
    if (
      !e.target.classList.contains("hamburgerButton") ||
      e.target.closest("a")
    ) {
      setOpen(false);
    }
  };

  if (open) {
    return (
      <div
        className="w-[100%] h-screen absolute top-0 right-0 bg-[rgba(255,255,255,0.6)] fontSecondary z-10"
        onClick={clickHandler}
      >
        <ul className="w-[60%] h-screen flex flex-col list absolute right-0 top-0 bgPrimary justify-evenly items-center z-20">
          <Links />
        </ul>
      </div>
    );
  }
}

export default HamburgerMenu;
