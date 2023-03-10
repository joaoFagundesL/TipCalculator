import React, { useContext, useEffect } from "react";
import { useState, createContext } from "react";
import { ResetContext } from "./ResetContext";

export const CustomTipContext = createContext();

const CustomTipProvider = (props) => {
  const [inputValue, setValue] = useState("");
  const [testing, setTesting] = useState("");
  const { isClicked } = useContext(ResetContext);

  useEffect(() => {
    if (isClicked) {
      setValue("");
      setTesting("");
    }
  }, [isClicked]);

  const handleValue = (event) => {
    setValue(event.target.value);
    setTesting(event.target.value);
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      setValue(inputValue);
      setTesting(inputValue);
    }
  };

  const setInputValue = (newValue, btn) => {
    setValue(newValue); // this one is to display ''
    setTesting(btn); // this one to store the value before setting to ''
  };

  const values = { inputValue, handleKey, handleValue, setInputValue, testing };

  return (
    <CustomTipContext.Provider value={values}>
      {props.children}
    </CustomTipContext.Provider>
  );
};

export default CustomTipProvider;
