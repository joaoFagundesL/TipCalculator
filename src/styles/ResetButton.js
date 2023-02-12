import React from "react";
import styled from "styled-components";
import { colors, buttonTipSettings } from "./GlobalVariables";

const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  font-weight: ${buttonTipSettings.boldText};
  color: ${colors.buttonColor};
  font-size: ${buttonTipSettings.buttonTextSize} ;
  border-radius: ${buttonTipSettings.borderRadius};
  padding-block: 1rem;
  background-color: ${colors.resetInactive};
`

const ResetButton = () => {
  return(
    <Button>Reset</Button>
  );
};

export default ResetButton;