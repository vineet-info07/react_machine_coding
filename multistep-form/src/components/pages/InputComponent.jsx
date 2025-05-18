import React from "react";
import styled from "styled-components";
import Stepper from "../organisms/Stepper";
import Step from "../organisms/Step";
import { useFormState } from "../hooks/useFormState";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const stepsConfig = [
  [{ label: "Name", name: "name", type: "text" }],
  [{ label: "Email", name: "email", type: "email" }],
  [{ label: "Address", name: "address", type: "text" }],
  [{ label: "Password", name: "password", type: "password" }],
];

const InputComponent = () => {
  const [state, actions] = useFormState();
  const { currentStep, formData } = state;
  const { nextStep, previousStep, updateFormData } = actions;

  const currentFields = stepsConfig[currentStep - 1].map((field) => ({
    ...field,
    value: formData[field.name],
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <Container>
      <Stepper currentStep={currentStep} totalSteps={stepsConfig.length} />
      <Step
        fields={currentFields}
        onChange={handleChange}
        onNext={nextStep}
        onPrevious={previousStep}
        isFirst={currentStep === 1}
        isLast={currentStep === stepsConfig.length}
      />
    </Container>
  );
};

export default InputComponent;
