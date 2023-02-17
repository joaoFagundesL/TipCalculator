import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import TextDescription from "./TextDescription";
import { colors } from "./GlobalVariables";
import { HasCalculatedContext } from "../contexts/HasCalculatedContext";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Input = styled.input`
  border: none;
  background-color: ${colors.bgInputColor};
  padding: 0.5rem;

  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: 1.2rem center;
  padding: 0.5rem 1rem 0.5rem 2rem;

  outline: 0;
  color: ${colors.buttonColor};

  border-radius: 5px;
  text-align: right;
  font-weight: bold;
  font-size: 1.2rem;

  &.error {
    border: 2px solid red !important;
  }

  &::placeholder {
    color: ${colors.placeholderColor};
  }

  &:focus {
    border: 2px solid ${colors.borderColor};
  }
`;

const InputSection = ({ onEnter, icon, text }) => {
  const [inputValue, setValue] = useState("");

  const { handleEnterKey } = useContext(HasCalculatedContext);
  const input = useRef(null);

  const inputChange = (event) => {
    setValue(event.target.value);
    onEnter(event.target.value);
    if (event.target.value == "") {
      input.current.classList.add("error");
    } else {
      input.current.classList.remove("error");
    }
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      onEnter(inputValue);
      handleEnterKey();
    }
  };

  return (
    <Div>
      <TextDescription text={text}></TextDescription>
      <Input
        ref={input}
        type="text"
        icon={icon}
        placeholder="0"
        value={inputValue}
        onChange={inputChange}
        onKeyDown={handleKey}
      ></Input>
    </Div>
  );
};

export default InputSection;
