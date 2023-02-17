import React, { createContext, useState } from "react";

export const ResetContext = createContext();

const ResetProvider = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <ResetContext.Provider value={{ isClicked, handleClicked }}>
      {props.children}
    </ResetContext.Provider>
  );
};

export default ResetProvider;
