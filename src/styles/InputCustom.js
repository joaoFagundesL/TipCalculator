import React from "react";
import styled from "styled-components";
import {colors, buttonTipSettings} from './GlobalVariables';

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

  // const [tip, setTip] = useState('');

  // const handleInput = (event) => {
  //   setTip(event.target.value);
  //   console.log(event.target.value);
  // }

  return(
    <Input type="text"
     placeholder={props.text}
    //  onChange={handleInput}
     ></Input>
  );
};

export default InputCustom;