function CVResult({ props }) {

    if(props.length === 10){

  return (
    <div className="w-screen h-screen bg-white z-10 overflow-hidden">
      <ul>
        {props.map((item, index) => {
          return (
            <li key={index} className="font-bold ">
              {item}
            </li>
          );
        })}
      </ul>
      <button className="bg-teal-950 fixed bottom-6 left-[47.5vw] text-white font-bold w-[5vw] h-[5vh] rounded-md transition-transform transform hover:scale-110 shadow-lg hover:shadow-teal-950 hover:cursor-pointer" type="button" onClick={()=>window.location.reload()}>Reset</button>
    </div>
  )
}

return null

}

export default CVResult;

//add rendering
