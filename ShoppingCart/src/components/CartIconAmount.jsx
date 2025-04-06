import React, { useContext } from "react";
import ItemAmountContext from "../contexts/ItemAmountContext";

function CartIconAmount() {
  const { totalItems } = useContext(ItemAmountContext);

  if (totalItems > 0) {
    return (
      <div
        id="iconAmount"
        className="absolute bottom-0 right-0 flex justify-center items-center  bg-red-500 rounded-[50%] w-5 h-5 transform translate-x-1/2 translate-y-1/2"
      >
        {totalItems}
      </div>
    );
  }
}

export default CartIconAmount;
