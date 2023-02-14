import React, {useContext, useState} from "react";
import styled from "styled-components";
import { colors, buttonTipSettings } from "./GlobalVariables";
import { ButtonTipContext } from "../contexts/ButtonTipContext";
import { type } from "@testing-library/user-event/dist/type";

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

  &.clicked {
    background-color: ${colors.hoverBackgroundColor} !important;
    color: ${colors.hoverTextColor} !important;
  }

  &:hover {
    background-color: ${colors.hoverBackgroundColor};
    color: ${colors.hoverTextColor};
  }
`;

const ButtonTip = ({ text, id }) => {

  const {buttonValue, handleClick, isClicked} = useContext(ButtonTipContext);

  const [isActive, setIsActive] = useState(false);

  const handleClicked = (event) => {
    setIsActive(!isActive);
    handleClick(event);
  }

  const resetButtonStyles = (event) => {
    let buttons = document.querySelectorAll(Button);
    let id = 0;
    buttons.forEach((button) => {
      button.id = id++;
    });
    buttons = Object.values(buttons);
    const buttonsRemove = buttons.filter((e) => e.id != event.target.id);
    const buttonClicked = buttons.filter((e) => e.id == event.target.id);
    buttonsRemove.forEach((e) => { e.classList.remove('clicked');});
    buttonClicked.forEach((e) => { e.classList.add('clicked');});

  };

  return(  
    <>
      <Button 
      onClick={(event) => {
        resetButtonStyles(event);
        handleClicked(event);
      }}
      > {text} </Button>
    </>
  );
};

export default ButtonTip;