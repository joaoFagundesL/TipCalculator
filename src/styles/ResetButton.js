import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { ResetContext } from "../contexts/ResetContext";
import { colors, buttonTipSettings } from "./GlobalVariables";

const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  font-weight: ${buttonTipSettings.boldText};
  color: ${colors.buttonColor};
  font-size: ${buttonTipSettings.buttonTextSize};
  border-radius: ${buttonTipSettings.borderRadius};
  padding-block: 1rem;
  background-color: ${colors.resetInactive};

  &:hover {
    cursor: not-allowed;
  }

  &.active {
    background-color: ${colors.hoverBackgroundColor};
    &:hover {
      cursor: pointer !important;
    }
  }

  @media (min-width: 768px) {
    margin-top: auto;
  }
`;

const ResetButton = ({ bill, people, reset }) => {
  const buttonRef = useRef(null);
  const { isClicked, handleClicked } = useContext(ResetContext);

  if (buttonRef.current) {
    console.log("bill = " + bill);
    console.log("people = " + people);
    bill && people
      ? buttonRef.current.classList.add("active")
      : buttonRef.current.classList.remove("active");
  }

  const handleReset = () => {
    handleClicked();
    reset("0.00");
  };

  return (
    <Button onClick={handleReset} ref={buttonRef}>
      Reset
    </Button>
  );
};

export default ResetButton;
