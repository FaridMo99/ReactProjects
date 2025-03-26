import { useState } from "react";
import Header from "./components/header.jsx";
import MainSection from "./components/mainSection.jsx";
import CVResult from "./components/CVResult.jsx";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({}); // Store form data for CVResult

  const handleFormSubmit = (data) => {
    setFormData(data); // Save form data
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <MainSection  onSubmit={handleFormSubmit} />
      {isSubmitted && <CVResult data={formData} />}
    </>

  );
}

export default App;
