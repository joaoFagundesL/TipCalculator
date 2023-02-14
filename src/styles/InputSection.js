import React, { useContext, useState } from "react";
import styled from "styled-components";
import TextDescription from "./TextDescription";
import { colors } from "./GlobalVariables";
import { HasCalculatedContext } from '../contexts/HasCalculatedContext';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Input = styled.input`
  border: none;
  background-color: ${colors.bgInputColor};
  padding: .5rem;

  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: 1.2rem center;
  padding: .5rem 1rem .5rem 2rem;

  outline: 0;
  color: ${colors.buttonColor};

  border-radius: 5px;

  text-align: right;
  font-weight: bold;
  font-size: 1.2rem;

  &::placeholder {
   color: ${colors.placeholderColor};
  }

  &:focus {
    border: 2px solid ${colors.borderColor};
  }
`;

const InputSection = (props) => {
  const [inputValue, setValue] = useState('');
  const [test, setTest] = useState(false);

  const {enterKey, handleEnterKey} = useContext(HasCalculatedContext);

  const inputChange = (event) => {
    setValue(event.target.value);
    props.onEnter(event.target.value);
  }

  const handleKey = (event) => {
    if(event.key === 'Enter') {
      props.onEnter(inputValue);
      handleEnterKey();
    }
  }

  return(
    <Div>
      <TextDescription text={props.text}></TextDescription>
      <Input type='text'
        icon={props.icon}
        placeholder="0"
        value={inputValue}
        onChange={inputChange}
        onKeyDown={handleKey}
        ></Input>
    </Div>
  )
}

export default InputSection;