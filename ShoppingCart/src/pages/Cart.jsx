import React from "react";
import CartItemCart from "../components/CartItemCart";
import Summary from "../components/Summary";

function Cart() {
  return (
    <main className="flex w-full justify-evenly bgSecondary">
      <CartItemCart />
      <Summary />
    </main>
  );
}

export default Cart;
