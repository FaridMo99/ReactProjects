import React from "react";

function CartIconAmount({ itemAmount = 0 }) {
  if (itemAmount > 0) {
    return (
      <div className="absolute bottom-0 right-0 flex justify-center items-center  bg-red-500 rounded-[50%] w-5 h-5 transform translate-x-1/2 translate-y-1/2">
        {itemAmount}
      </div>
    );
  }
}

export default CartIconAmount;
