export default function Input({forText, inputType, id, placeholder="", required = false }) {
  
    return (
      <>
        <label htmlFor={id}>{forText}</label>
        <input type={inputType} placeholder={placeholder} required={required} id={id} className="bg-white ml-2 rounded" />
      </>
    );
  }