import React, { createContext, useState, useEffect } from "react";

const ItemAmountContext = createContext(null);

export const ItemAmountProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("items", JSON.stringify(products));
  }, [products]);

  return (
    <ItemAmountContext.Provider
      value={{
        totalItems,
        setTotalItems,
        products,
        setProducts,
        total,
        setTotal,
      }}
    >
      {children}
    </ItemAmountContext.Provider>
  );
};

export default ItemAmountContext;
