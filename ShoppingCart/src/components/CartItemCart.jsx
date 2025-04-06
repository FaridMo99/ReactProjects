import React from "react";
import Quantity from "./Quantity";

function CartItemCart({ total = 0, name, img, amount }) {
  return (
    <div className="w-full h-[20vh] border-2 rounded flex items-center my-[3vh] justify-around">
      <img src={img} className="h-full w-1/4" />
      <p>{name}</p>
      <div>
        <p>Amount:{amount}</p>
        <p>Price:{total}</p>
      </div>
    </div>
  );
}

export default CartItemCart;
