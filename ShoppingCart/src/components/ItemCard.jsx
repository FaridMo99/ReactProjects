import React from "react";

function ItemCard({ img = "", price = "1mio", name = "placeholder" }) {
  return (
    <div className="flex flex-col w-[15vw] h-[35vh] rounded-lg justify-evenly items-center card">
      <img src={img} alt={img} className="w-full h-[65%]" />
      <div className="flex justify-around w-full h-[35%]">
        <p>{name}</p>
        <p className="self-center opacity-30">{price}</p>
      </div>
    </div>
  );
}

export default ItemCard;
