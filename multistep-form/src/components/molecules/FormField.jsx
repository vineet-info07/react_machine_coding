import React from "react";
import InputField from "../atoms/InputField";

const FormField = ({ fields, onChange }) => (
  <>
    {fields.map((field) => (
      <InputField
        key={field.name}
        label={field.label}
        name={field.name}
        type={field.type}
        value={field.value}
        onChange={onChange}
      />
    ))}
  </>
);

export default FormField;
