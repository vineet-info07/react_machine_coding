import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  background-color: ${({ variant }) =>
    variant === "secondary" ? "#6c757d" : "#007bff"};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "secondary" ? "#5a6268" : "#0056b3"};
  }
`;

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) => (
  <StyledButton onClick={onClick} type={type} variant={variant}>
    {children}
  </StyledButton>
);

export default Button;
