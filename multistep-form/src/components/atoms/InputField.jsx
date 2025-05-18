import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 12px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <Wrapper>
    <Label htmlFor={name}>{label}</Label>
    <Input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  </Wrapper>
);

export default InputField;
