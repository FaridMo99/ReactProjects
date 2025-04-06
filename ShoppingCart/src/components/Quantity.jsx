import React from "react";

function Quantity({ buttonFunction, itemAmount }) {
  return (
    <div className="bg-white border-1 fontPrimary">
      <button onClick={buttonFunction} className="sub border-r-1 w-[1vw]">
        -
      </button>
      <span className="p-1">{itemAmount}</span>
      <button onClick={buttonFunction} className="add w-[1vw] border-l-1">
        +
      </button>
    </div>
  );
}

export default Quantity;
