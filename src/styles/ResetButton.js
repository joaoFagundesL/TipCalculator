import React from "react";
import styled from "styled-components";
import { colors } from "./GlobalVariables";

const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  font-weight: bold;
  color: ${colors.buttonColor};
  font-size: 1.2rem;
  border-radius: .2rem;
  padding-block: 1rem;
  background-color: ${colors.resetInactive};
`

const ResetButton = () => {
  return(
    <Button>Reset</Button>
  );
};

export default ResetButton;