import React, { useState, useContext, useEffect } from "react";
import Quantity from "./Quantity";
import ItemAmountContext from "../contexts/ItemAmountContext";

function ItemCard({ img, price, name, reloadAmount = 0 }) {
  const { setTotalItems, setProducts } = useContext(ItemAmountContext);
  const [showAll, setShowAll] = useState(false);
  const [itemAmount, setItemAmount] = useState(reloadAmount);

  const clickHandler = (e) => {
    if (e.target.classList.contains("add")) {
      setItemAmount((prev) => prev + 1);
      setTotalItems((prev) => prev + 1);
    }

    if (e.target.classList.contains("sub") && itemAmount > 0) {
      setItemAmount((prev) => prev - 1);
      setTotalItems((prev) => prev - 1);
    }
  };

  useEffect(() => {
    setProducts((prev) => {
      const productIndex = prev.findIndex((product) => product.name === name);

      if (productIndex !== -1) {
        const updatedProducts = [...prev];

        if (itemAmount > 0) {
          updatedProducts[productIndex] = {
            ...updatedProducts[productIndex],
            amount: itemAmount,
            price: itemAmount * Number(price),
          };
        } else {
          updatedProducts.splice(productIndex, 1);
        }

        return updatedProducts;
      } else {
        if (itemAmount > 0) {
          return [
            ...prev,
            {
              img: img,
              price: price,
              name: name,
              amount: itemAmount,
            },
          ];
        }
        return prev;
      }
    });
  }, [itemAmount, img, price, name, setProducts]);

  return (
    <div
      key={name}
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
          <Quantity buttonFunction={clickHandler} itemAmount={itemAmount} />
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
