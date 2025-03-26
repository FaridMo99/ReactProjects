import Form from "./form";
import Input from "./Input";

function Education() {
  return (
    <section className="baseSectionStyles relative">
      <h2>Education</h2>
      <Form formId="edu">
        <Input forText="School:" inputType="text" id="school" required={true} />
        <Input forText="Title:" inputType="text" id="title" required={true} />
        <Input forText="Date:" inputType="date" id="date" required={true} />
      </Form>
    </section>
  );
}

export default Education;
