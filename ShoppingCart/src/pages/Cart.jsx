import React, { useContext } from "react";
import CartItemCart from "../components/CartItemCart";
import Summary from "../components/Summary";
import ItemAmountContext from "../contexts/ItemAmountContext";
import EmptyCart from "../components/EmptyCart";

function Cart() {
  const { products } = useContext(ItemAmountContext);

  return (
    <main className="flex w-full justify-around bgSecondary">
      <div className="flex flex-col w-[50%]">
        {products.length !== 0 ? (
          products.map((product, index) => (
            <CartItemCart
              total={product.price}
              img={product.img}
              name={product.title}
              amount={product.amount}
              key={index}
            />
          ))
        ) : (
          <EmptyCart />
        )}
      </div>

      <Summary />
    </main>
  );
}

export default Cart;
