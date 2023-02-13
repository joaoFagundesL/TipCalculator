import React from "react";
import { useState, createContext } from "react";

export const CustomTipContext = createContext();

const CustomTipProvider = (props) => {

  const [inputValue, setValue] = useState('');

  const handleValue = (event) => {
    setValue(event.target.value);
  }

  const handleKey = (event) => {
    if(event.key === 'Enter') {
      setValue(inputValue);
    } 
  }

  const values = {inputValue, handleKey, handleValue};

  return(
    <CustomTipContext.Provider value={values}>
      { props.children }
    </CustomTipContext.Provider>
  );
};

export default CustomTipProvider;