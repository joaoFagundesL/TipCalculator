import React from "react";
import { useState, createContext } from "react";

export const CustomTipContext = createContext();

const CustomTipProvider = (props) => {

  const [inputValue, setValue] = useState('');
  const [testing, setTesting] = useState('');

  const handleValue = (event) => {
    setValue(event.target.value);
    setTesting(event.target.value);
  }
  
  const handleKey = (event) => {
    if(event.key === 'Enter') {
      setValue(inputValue);
      setTesting(inputValue);
    } 
  }

  const setInputValue = (newValue, btn) => {
    setValue(newValue);
    setTesting(btn);
  }

  const values = {inputValue, handleKey, handleValue, setInputValue, testing};

  return(
    <CustomTipContext.Provider value={values}>
      { props.children }
    </CustomTipContext.Provider>
  );
};

export default CustomTipProvider;