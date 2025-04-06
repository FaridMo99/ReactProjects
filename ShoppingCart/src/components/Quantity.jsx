import React, { useState } from "react";

function Quantity() {
  const [amount, setAmount] = useState(0);

  const clickHandler = (e) => {
    if (e.target.classList.contains("sub") && amount > 0) {
      setAmount(amount - 1);
    }

    if (e.target.classList.contains("add")) {
      setAmount(amount + 1);
    }
    setAmount;
  };
  return (
    <div className="bg-white border-1  fontPrimary">
      <button onClick={clickHandler} className="sub border-r-1 w-[1vw]">
        -
      </button>
      <span className="p-1">{amount}</span>
      <button onClick={clickHandler} className="add w-[1vw] border-l-1">
        +
      </button>
    </div>
  );
}

export default Quantity;
