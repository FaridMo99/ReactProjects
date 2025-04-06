import React from "react";
import Quantity from "./Quantity";

function CartItemCart({ total = 0, name = "John" }) {
  return (
    <div className="w-[60%] h-[20vh] border-2 rounded flex items-center mt-[4vh] justify-evenly">
      <img />
      <p>{name}</p>
      <p>Total:{total}</p>
      <Quantity />
    </div>
  );
}

export default CartItemCart;
