import React, { useState } from "react";

function Summary() {
  const [subtotal, setSubtotal] = useState(0);
  const shippingFee = 3;

  return (
    <div className="flex flex-col items-center justify-evenly w-[30vw] h-[50vh] my-[4vh] border-2">
      <p className="font-bold text-2xl">Summary:</p>
      <p>Subtotal:{subtotal}</p>
      <p>Shipping:{shippingFee}</p>
      <p>Total:{subtotal + shippingFee}</p>
      <button className="border-2 bgPrimary fontSecondary p-2 cursor-pointer rounded-2xl">
        Checkout
      </button>
    </div>
  );
}

export default Summary;
