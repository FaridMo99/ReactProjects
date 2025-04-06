import React, { useState, useEffect, useContext } from "react";
import ItemAmountContext from "../contexts/ItemAmountContext";

function Summary() {
  const [subtotal, setSubtotal] = useState(0);
  const { products } = useContext(ItemAmountContext);

  useEffect(() => {
    products.forEach((product) =>
      setSubtotal((prev) => prev + Number(product.price)),
    );
  }, [products]);

  return (
    <div className="flex flex-col items-center justify-evenly w-[30vw] h-[50vh] my-[3vh] border-2">
      <p className="font-bold text-2xl">Summary:</p>
      <p>Subtotal: {subtotal}</p>
      <p>Shipping: {3}</p>
      <p>Total: {subtotal + 3}</p>
      <button className="border-2 bgPrimary fontSecondary p-2 cursor-pointer rounded-2xl">
        Checkout
      </button>
    </div>
  );
}

export default Summary;
