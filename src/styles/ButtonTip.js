import React from "react";
import styled from "styled-components";
import { colors } from "./GlobalVariables";

const Button = styled.button`
  background-color: ${colors.buttonColor};
  border: none;
  color: ${colors.textColorButton};
  font-weight: bold;
  text-align: center;
  padding: .5rem;
  cursor: pointer;
  border-radius: .5rem;
  font-size: 1.3rem;
  transition: all .3s;

  &:hover {
    background-color: ${colors.hoverBackgroundColor};
    color: ${colors.hoverTextColor};
  }
`;

const ButtonTip = (props) => {
  return(  
    <>
      <Button> {props.text} </Button>
    </>
  );
};

export default ButtonTip;