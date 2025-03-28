function Card(/*image, name, value*/) {
  return (
    <section className="rounded-lg h-[35vh] secondaryBg flex flex-col items-center justify-evenly customHover">
      <div className="flex justify-center align-middle rounded-lg primaryBg w-4/5 h-[60%] cardVisual"></div>
      <h4 className="font-extrabold text-4xl">Name:</h4>
    </section>
  );
}

export default Card;
