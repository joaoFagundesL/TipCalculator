import React, { useContext, useState } from "react";
import styled from "styled-components";
import {colors, buttonTipSettings} from './GlobalVariables';
import { CustomTipContext } from '../contexts/CustomTipContext';
import { HasCalculatedContext } from '../contexts/HasCalculatedContext';

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

const InputCustom = ({ text }) => {
  
  const {inputValue, handleKey, handleValue} = useContext(CustomTipContext);
  const { enterKey, handleEnterKey } = useContext(HasCalculatedContext);

  const handleKeyDown = (event) => {
    if(event.key == 'Enter') {
      handleEnterKey();
    }
  }

  return (
    <Input type="text"
      placeholder={text}
      value={inputValue}
      onChange={handleValue}
      onKeyDown={handleKeyDown}
    ></Input>
  );
};

export default InputCustom;
