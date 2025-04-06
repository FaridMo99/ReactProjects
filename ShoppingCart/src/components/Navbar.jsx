import React, { useEffect, useState } from "react";
import Links from "./Links";
import { FaReact } from "react-icons/fa";
import HamburgerButton from "./HamburgerButton";

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="w-full h-[15vh] bgPrimary sticky top-0 fontSecondary">
      <nav className="w-full h-full flex justify-between pl-[1vw] pr-[1vw] items-center">
        <FaReact size="10vh" color="#61DAFB" />
        <div className="flex justify-evenly w-[30%]">
          {width > 500 ? <Links /> : <HamburgerButton />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
