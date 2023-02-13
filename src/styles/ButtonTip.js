import React, {useState} from "react";
import styled from "styled-components";
import { colors, buttonTipSettings } from "./GlobalVariables";

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

const ButtonTip = (props) => {
  const [tip, setTip] = useState(null);

  const handleValue = () => {
    let tipValue = props.text;
    tipValue = tipValue.replace(/\D/g, "");
    props.click(tipValue);
  }

  return(  
    <>
      <Button onClick={() =>handleValue()}> {props.text} </Button>
    </>
  );
};

export default ButtonTip;