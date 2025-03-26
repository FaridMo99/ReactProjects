import React, { useState } from "react";
import Button from "./button";
import SubmitScreen from "./SubmitScreen";

function Form({
  formId,
  children,
  className = "flex flex-col h-[80%] justify-evenly",
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.reportValidity()) {
      setSubmitted(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} id={formId} className={className}>
        {children}
        <Button text="Submit" extraStyles="self-center" />
      </form>
      {submitted && <SubmitScreen onClose={() => setSubmitted(false)} />}
    </>
  );
}

export default Form;
