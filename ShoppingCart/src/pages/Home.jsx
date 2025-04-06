import React from "react";
import ItemCard from "../components/ItemCard";
import backImage from "../assets/shop.jpg";
import useGetItems from "../hooks/useGetItems";

function Home({ amount = 20 }) {
  const { data, loading, error } = useGetItems(
    `https://fakestoreapi.com/products?limit=${amount}`,
  );

  if (loading) return <p>Loading...</p>;
  if (error) return error;

  return (
    <main className="bgSecondary fontPrimary ">
      <img src={backImage} alt="shop" className="w-full h-[85vh]" />
      <div className="mainLayout">
        {data.map((data) => (
          <ItemCard
            img={data.image}
            price={data.price}
            name={data.title}
            key={data.id}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
