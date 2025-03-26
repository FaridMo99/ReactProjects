function Button({ text, extraStyles = null, onClick }) {
  return (
    <button
      type="submit"
      className={`bg-teal-950 text-white font-bold w-[25%] h-[5vh] rounded-md transition-transform transform hover:scale-110 shadow-lg hover:shadow-teal-950 hover:cursor-pointer ${extraStyles}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
