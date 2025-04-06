import React from "react";

function EmptyCart() {
  return (
    <div className="w-[50vw] h-[50vh] fontPrimary font-bold text-6xl">
      <p className="w-full h-full flex justify-center items-center">
        No Items selected yet.
      </p>
    </div>
  );
}

export default EmptyCart;
