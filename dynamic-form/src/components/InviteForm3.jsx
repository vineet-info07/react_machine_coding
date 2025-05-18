import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Heading = styled.h2``;

const FormRow = styled.div``;
const Input = styled.input``;

const DeleteButton = styled.button``;

const AddOptions = styled.div``;

const SendButton = styled.button``;

function InviteForm3() {
  const [fields, setFields] = useState([{ email: "", name: "" }]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index] = { ...updatedFields[index], [field]: value };
    console.log(updatedFields);
    setFields(updatedFields);
  };

  const addRow = () => {
    if (fields.length < 3) {
      setFields([...fields, { email: "", name: "" }]);
    }
  };

  const addRows = () => {
    const remaining = 3 - fields.length;
    const newFields = Array(remaining).fill({ email: "", name: "" });

    setFields([...fields, ...newFields]);
  };

  const removeRows = (index) => {
    if (fields.length > 1) {
      setFields(fields.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFields(fields);
    setIsSubmitted(true);
    console.log(fields);

    setTimeout(() => {
      setFields([{ email: "", name: "" }]);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Container>
      <Heading>Invite Members to your netword</Heading>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <FormRow key={index}>
            <Input
              type="email"
              placeholder="Eg. John@example.com"
              value={field.email}
              onChange={(e) => handleChange(index, "email", e.target.value)}
            />
            <Input
              type="text"
              placeholder="Eg. John "
              value={field.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />
            {fields.length > 1 && (
              <DeleteButton onClick={() => removeRows(index)}>x</DeleteButton>
            )}
          </FormRow>
        ))}
        <AddOptions>
          {fields.length < 3 && <span onClick={addRow}>+ Add new</span>}
          {fields.length < 3 && (
            <span onClick={addRows}>+ Add multiple rows</span>
          )}
        </AddOptions>
        <SendButton type="submit" disabled={isSubmitted}>
          {isSubmitted ? "Invite Send" : "Sent Invite"}
        </SendButton>
      </form>
    </Container>
  );
}

export default InviteForm3;
