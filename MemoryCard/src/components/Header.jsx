import React from "react";

function Header({ children }) {
  return (
    <header className="w-full h-[10vh] fontMain flex justify-between pl-[3vw] pr-[3vw] pt-[1vw]">
      <h1 className="font-extrabold text-6xl">Memory</h1>
      {children}
    </header>
  );
}

export default Header;
