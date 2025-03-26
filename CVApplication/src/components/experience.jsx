import Form from "./form";
import Input from "./Input"

function Experience() {
  return (
    <section className="baseSectionStyles relative">
      <h2>Experience</h2>
      <Form formId="exp">
        <Input forText="Company:" inputType="text" id="company" required={true}/>
        <Input
          forText="Position:"
          inputType="text"
          id="position"
          required={true}
        />
        <Input forText="Responsibilities:" inputType="text" id="res" required={true}/>
        <Input
          forText="Duration:"
          inputType="text"
          id="duration"
          placeholder="number in years e.g. 1.6 years"
          required={true}
        />
      </Form>
    </section>
  );
}

export default Experience;
