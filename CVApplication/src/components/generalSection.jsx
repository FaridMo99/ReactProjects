// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Button from "./button";

function GeneralSection() {
  return (
    <section className="baseSectionStyles">
      <h2>General Information</h2>
      <form className="flex flex-col h-[80%] justify-evenly">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="bg-white ml-2 rounded" />
        <label htmlFor="mail">E-Mail:</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          id="mail"
          className="bg-white ml-2 rounded"
        />
        <label htmlFor="phone">Phone-Number:</label>
        <input type="tel" id="name" className="bg-white ml-2 rounded" />
        <div className="flex justify-evenly">
          <Button />
          <Button />
        </div>
      </form>
    </section>
  );
}

export default GeneralSection;
