import React, { useContext } from "react";
import ItemCard from "../components/ItemCard";
import backImage from "../assets/shop.jpg";
import useGetItems from "../hooks/useGetItems";
import ItemAmountContext from "../contexts/ItemAmountContext";

function Home({ amount = 20 }) {
  const { products } = useContext(ItemAmountContext);
  const { data, loading, error } = useGetItems(
    `https://fakestoreapi.com/products?limit=${amount}`,
  );

  return (
    <main className="bgSecondary fontPrimary">
      <img src={backImage} alt="shop" className="w-full h-[85vh]" />

      <div className="mainLayout">
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}

        {!loading &&
          !error &&
          data.map((dataItem) => {
            const matchingProduct = products.find(
              (product) => product.name === dataItem.title,
            );

            return (
              <ItemCard
                img={dataItem.image}
                price={dataItem.price}
                name={dataItem.title}
                key={dataItem.id}
                reloadAmount={matchingProduct ? matchingProduct.amount : 0}
              />
            );
          })}
      </div>
    </main>
  );
}

export default Home;
