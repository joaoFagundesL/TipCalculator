import React, { useContext, useState } from "react";
import styled from "styled-components";
import {colors, buttonTipSettings} from './GlobalVariables';
import { CustomTipContext } from '../contexts/CustomTipContext';

const Input = styled.input`
  border: none;
  text-align: center;
  outline: 0;
  border-radius: ${buttonTipSettings.borderRadius};
  font-weight: bold;
  color: ${colors.textColor};
  font-size: 1.3rem;

  &:focus {
    border: 2px solid ${colors.borderColor};
  }
`;

const InputCustom = (props) => {
  
  const {inputValue, handleKey, handleValue} = useContext(CustomTipContext);

  return (
    <Input type="text"
      placeholder={props.text}
      value={inputValue}
      onChange={handleValue}
      onKeyDown={handleKey}
    ></Input>
  );
};

export default InputCustom;
