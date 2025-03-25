// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import GeneralSection from "./generalSection";
import Education from "./education";
import Experience from "./experience";
import Button from "./button";

function MainSection() {
  return (
    <main className="primaryBG w-full h-full flex justify-evenly items-center">
      <GeneralSection />
      <Education />
      <Experience />
    </main>
  );
}

export default MainSection;
