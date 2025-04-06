import React, { useState } from "react";
import Quantity from "./Quantity";

function ItemCard({
  img = "",
  price = "1mio",
  name = "placeholder",
  key = "unknown",
}) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      key={key}
      className="flex flex-col h-[35vh] rounded-lg justify-evenly m-[2vw] items-center card"
    >
      <img
        src={img}
        alt={img}
        className="w-full h-[65%] rounded-tl-lg rounded-tr-lg"
      />
      <div className="flex flex-row justify-between items-start w-full h-[35%] px-[2vw]">
        <p
          onClick={() => setShowAll(!showAll)}
          className="w-[60%] h-full text-left overflow-clip"
        >
          {showAll || name.length <= 40 ? name : name.slice(0, 40) + "..."}
        </p>
        <div className="flex flex-col items-end justify-evenly h-full">
          <p className="self-center opacity-30">{price}$</p>
          <Quantity />
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
