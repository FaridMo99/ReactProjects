import GeneralSection from "./generalSection";
import Education from "./education";
import Experience from "./experience";

function MainSection() {
  return (
    <main className=" w-full h-full flex justify-evenly items-center">
      <GeneralSection />
      <Education />
      <Experience />
    </main>
  );
}

export default MainSection;
