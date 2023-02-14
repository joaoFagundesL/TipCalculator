import React, {useContext, useState} from "react";
import styled from "styled-components";
import { colors, buttonTipSettings } from "./GlobalVariables";
import { ButtonTipContext } from "../contexts/ButtonTipContext";

const Button = styled.button`
  background-color: ${colors.buttonColor};
  border: none;
  color: ${colors.textColorButton};
  font-weight: ${buttonTipSettings.boldText};
  text-align: center;
  padding: ${buttonTipSettings.paddingButton};
  cursor: pointer;
  border-radius: ${buttonTipSettings.borderRadius};
  font-size: ${buttonTipSettings.buttonTextSize};
  transition: all .3s;

  &:hover {
    background-color: ${colors.hoverBackgroundColor};
    color: ${colors.hoverTextColor};
  }
`;

const ButtonTip = ({ text }) => {

  const {buttonValue, handleClick} = useContext(ButtonTipContext);

  return(  
    <>
      <Button onClick={(event) => handleClick(event)} > {text} </Button>
    </>
  );
};

export default ButtonTip;