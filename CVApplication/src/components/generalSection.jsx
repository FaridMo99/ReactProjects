import Form from "./form";
import Input from "./Input";

function GeneralSection() {
  return (
    <section className="baseSectionStyles relative">
      <h2>General Information</h2>
      <Form formId="gi">
        <Input forText="Name:" inputType="text" id="name" required={true} />
        <Input
          forText="E-Mail:"
          inputType="email"
          placeholder="example@gmail.com"
          id="mail"
          required={true}
        />
        <Input
          forText="Phone-Number:"
          placeholder="0221-7123456"
          inputType="tel"
          id="phone"
          required={true}
        />
      </Form>
    </section>
  );
}

export default GeneralSection;
