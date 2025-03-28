function Rules(props) {
  const rules = Object.values(props);

  return (
    <div className="font-bold">
      <h3>Rules:</h3>
      <ol>
        {rules.map((e, index) => {
          return (
            <li key={index}>
              {index + 1}. {e}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Rules;
