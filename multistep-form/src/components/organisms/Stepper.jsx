// components/organisms/Stepper.jsx
import React from "react";
import styled from "styled-components";
import { useFormState } from "../hooks/useFormState"; // Correct import

// Styled components for Stepper
const StepperWrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #4caf50; /* Green color */
  border-radius: 5px;
  width: ${(props) => props.progress}%;
  transition: width 0.3s ease;
`;

const StepText = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
  margin-top: 5px;
`;

const StepNumbersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const StepNumber = styled.div`
  font-weight: bold;
  color: ${(props) => (props.active ? "#4caf50" : "#ccc")};
  text-align: center;
`;

const Stepper = () => {
  const [
    { currentStep }, // Destructure only currentStep from state
  ] = useFormState(); // No need to pass initialFormData

  const totalSteps = 4; // Define total number of steps
  const progress = (currentStep / totalSteps) * 100; // Calculate progress percentage

  return (
    <div>
      <StepperWrapper>
        <ProgressBar progress={progress} />
      </StepperWrapper>
      <StepText>
        Step {currentStep} of {totalSteps}
      </StepText>

      {/* Step numbers */}
      <StepNumbersWrapper>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <StepNumber key={index} active={index + 1 <= currentStep}>
            {index + 1}
          </StepNumber>
        ))}
      </StepNumbersWrapper>
    </div>
  );
};

export default Stepper;
