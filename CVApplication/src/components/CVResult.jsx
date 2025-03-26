function CVResult({ props }) {
    if(props){

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
      <button type="button" onClick={()=>window.location.reload()}>Reset</button>
    </div>
  )
}
}

export default CVResult;
