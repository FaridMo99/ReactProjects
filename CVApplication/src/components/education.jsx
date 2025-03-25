// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Button from "./button";

function Education() {
  return (
    <section className="baseSectionStyles">
      <h2>Education</h2>
      <form className="flex flex-col h-[80%] justify-evenly">
        <label htmlFor="school">School:</label>
        <input type="text" id="school" className="bg-white ml-2 rounded" />
        <label htmlFor="mail">Title:</label>
        <input type="email" id="title" className="bg-white ml-2 rounded" />
        <label htmlFor="phone">Date:</label>
        <input type="date" id="date" className="bg-white ml-2 rounded" />
        <div className="flex justify-evenly">
          <Button />
          <Button />
        </div>
      </form>
    </section>
  );
}

export default Education;
