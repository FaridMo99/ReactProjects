/*
Be sure to include an edit and submit button for each section or for the whole CV. 
The submit button should submit your form and display the value of your input fields in HTML elements. 
The edit button should add back (display) the input fields, with the previously displayed information as values. 
In those input fields, you should be able to edit and resubmit the content. 
You’re going to make heavy use of state and props, so make sure you understood those concepts.
*/

// eslint-disable-next-line no-unused-vars
import { useState } from "react";

function Button() {
  return (
    <button
      type="submit"
      className="bg-teal-950 text-white font-bold w-[25%] h-[5vh] rounded-md transition-transform transform hover:scale-110 shadow-lg hover:shadow-teal-950 hover:cursor-pointer"
    >
      Hello
    </button>
  );
}

export default Button;
