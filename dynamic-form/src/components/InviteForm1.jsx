import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  color: #888;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;

const AddRows = styled.div`
  color: #007bff;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;

  span {
    margin-right: 10px;
    text-decoration: underline;
  }
`;

const SendButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#28a745" : "#218838")};
  }
`;

function InviteForm1() {
  const [fields, setFields] = useState([{ email: "", name: "" }]);
  const [submitted, setSubmitted] = useState(false);

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

  const removeRow = (index) => {
    if (fields.length > 1) {
      setFields(fields.filter((_, i) => i !== index));
    }
  };

  const addMultipleRows = () => {
    const remaining = 3 - fields.length;
    const newFields = Array(remaining).fill({ email: "", name: "" });
    setFields([...fields, ...newFields]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", fields);
    setSubmitted(true);

    // Optionally reset form after short delay
    setTimeout(() => {
      setFields([{ email: "", name: "" }]);
      setSubmitted(false); // Enable button again if needed
    }, 2000); // 2-second delay
  };

  return (
    <Container>
      <Heading>Invite Members to your channel</Heading>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <FormRow key={index}>
            <Input
              type="email"
              placeholder="Eg. john@example.com"
              value={field.email}
              onChange={(e) => handleChange(index, "email", e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Eg. John"
              value={field.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />
            {fields.length > 1 && (
              <DeleteButton onClick={() => removeRow(index)} type="button">
                x
              </DeleteButton>
            )}
          </FormRow>
        ))}
        <AddRows>
          {fields.length < 3 && <span onClick={addRow}>+ Add new row</span>}
          {fields.length < 3 && (
            <span onClick={addMultipleRows}>+ Add multiple at once</span>
          )}
        </AddRows>

        <SendButton type="submit" disabled={submitted}>
          {submitted ? "Invitation Sent" : "Send Invite"}
        </SendButton>
      </form>
    </Container>
  );
}

export default InviteForm1;
