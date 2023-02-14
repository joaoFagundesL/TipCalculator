import React, {createContext, useState} from "react";

export const HasCalculatedContext = createContext();

const HasCalculatedProvider = (props) => {

  const [enterKey, setEnterKey] = useState(false);

  const handleEnterKey = () =>{
    setEnterKey(!enterKey); // setting the key to its opposite
  }

  return(
    <HasCalculatedContext.Provider value={ {enterKey, handleEnterKey} }>
      { props.children }
    </HasCalculatedContext.Provider>
  );
};

export default HasCalculatedProvider;