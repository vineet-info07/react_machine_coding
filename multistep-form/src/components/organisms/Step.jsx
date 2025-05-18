import React from "react";
import styled from "styled-components";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Step = ({ fields, onChange, onNext, onPrevious, isFirst, isLast }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onNext();
    }}
  >
    <FormField fields={fields} onChange={onChange} />

    <ButtonWrapper>
      {!isFirst && (
        <Button onClick={onPrevious} variant="secondary">
          Previous
        </Button>
      )}
      <Button type="submit">{isLast ? "Submit" : "Next"}</Button>
    </ButtonWrapper>
  </form>
);

export default Step;
