// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Button from "./button";

function Experience() {
  return (
    <section className="baseSectionStyles">
      <h2>Experience</h2>
      <form className="flex flex-col h-[80%] justify-evenly ex">
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" className="bg-white ml-2 rounded" />
        <label htmlFor="position">Position:</label>
        <input type="email" id="position" className="bg-white ml-2 rounded" />
        <label htmlFor="res">Responsibilities:</label>
        <input type="tel" id="res" className="bg-white ml-2 rounded" />
        <label htmlFor="dateJob">Time you worked for the Company:</label>
        <input type="date" id="dateJob" className="bg-white ml-2 rounded" />
        <div className="flex justify-evenly">
          <Button />
          <Button />
        </div>
      </form>
    </section>
  );
}

export default Experience;
