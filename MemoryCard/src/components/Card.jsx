import { useEffect, useState } from "react";

function Card({ name, click }) {
  const [sprite, setSprite] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setSprite(data.sprites.front_default);
      })
      .catch((error) => console.error("Error:", error));
  }, [name]);

  return (
    <section
      onClick={click}
      id={name}
      className="rounded-lg h-[35vh] secondaryBg flex flex-col items-center justify-evenly customHover"
    >
      <div className="flex justify-center align-middle rounded-lg primaryBg w-4/5 h-[60%] cardVisual">
        <img src={sprite} alt={name} />
      </div>
      <h4 className="font-extrabold text-4xl text-center">
        {name.toUpperCase()}
      </h4>
    </section>
  );
}

export default Card;
