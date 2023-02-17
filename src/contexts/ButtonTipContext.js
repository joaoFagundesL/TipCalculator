import React, { createContext, useContext, useState } from "react";

export const ButtonTipContext = createContext();

const ButtonTipProvider = (props) => {
  const [buttonValue, setButtonValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [buttons, setButtons] = useState([]);

  const updateButtons = (myButtons) => {
    // getting all the buttons from ButtonTip.js
    setButtons(myButtons);
  };

  const removeActive = () => {
    // function in case i need to remove the active button
    buttons.forEach((button) => {
      if (button.classList.contains("clicked")) {
        button.classList.remove("clicked");
      }
    });
  };

  const handleClick = (event) => {
    let buttonText = event.target.innerText;
    let tipAmount = buttonText.replace(/\D/g, ""); // getting only the number from the button, without the %
    setButtonValue(tipAmount);
    setIsClicked(true);
  };

  const setBool = () => {
    setIsClicked(!isClicked);
  };

  return (
    <ButtonTipContext.Provider
      value={{
        buttonValue,
        removeActive,
        handleClick,
        updateButtons,
        isClicked,
        setBool,
      }}
    >
      {props.children}
    </ButtonTipContext.Provider>
  );
};

export default ButtonTipProvider;
