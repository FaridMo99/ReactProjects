import React from "react";
import Button from "./button";

function SubmitScreen({ onClose }) {
  return (
    <div className="w-full h-full text-white font-bold text-3xl absolute left-0 top-0 bg-[rgba(0,0,0,0.9)] rounded-[3vh] flex flex-col justify-center items-center">
      <h3 className="mb-6">Submit Successful</h3>
      <Button text="Edit" onClick={onClose} />
    </div>
  );
}

export default SubmitScreen;
