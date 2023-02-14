import React, { useState, useEffect } from "react";
import { useContext } from "react";
import GlobalStyle from "./styles/globalStyles";
import Container from './styles/Container';
import SpliterText from "./styles/SpliterText";
import Header from "./styles/Header";
import InputSection from "./styles/InputSection";
import iconDollar from './images/icon-dollar.svg';
import iconPerson from './images/icon-person.svg';
import TipSection from "./styles/TipSection";
import SectionCalc from "./styles/SectionCalc";
import InfoCalc from "./styles/InfoCalc";
import ResetButton from "./styles/ResetButton";
import { CustomTipContext } from "./contexts/CustomTipContext";
import { HasCalculatedContext } from "./contexts/HasCalculatedContext";

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [total, setTotal] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);

  const { enterKey, handleEnterKey } = useContext(HasCalculatedContext);
  const { inputValue } = useContext(CustomTipContext);
  
  useEffect(() => {
    if (enterKey && bill && people && inputValue) { // if key is true it will calculate
      console.log('entered if')
      let billAmount = parseFloat(bill);
      let tipPercentage = parseFloat(inputValue) / 100;
      let tipAmount = billAmount * tipPercentage;
      let totalAmount = billAmount + tipAmount; 
      setTipTotal((tipAmount / people).toFixed(2));
      setTotal((totalAmount / people).toFixed(2));
      handleEnterKey(); // here i set the key to false
    } else if(!enterKey && !bill && !people && !inputValue){
      setTotal(0);
      setTipTotal(0);
    } else {
      console.log('EnterKey = ' + enterKey);
    }
  }, [enterKey, bill, people, inputValue]); // this avoid re-render multiple times
  

  const handleBill = (value) => {
    setBill(value);
  }

  const handlePeople = (value) => {
    setPeople(value);
  }

  return (
    <>
      <GlobalStyle />
    
        <Header>
          <SpliterText>Spli<br />tter</SpliterText>
        </Header>
      
        <Container>
          <InputSection icon={iconDollar}
            text="Bill"
            onEnter={handleBill}
          ></InputSection>

          <TipSection 
          ></TipSection>

          <InputSection icon={iconPerson}
            text="Number of People"
            onEnter={handlePeople}
          ></InputSection>

          <SectionCalc>

            <InfoCalc text="Tip Amount/" amount={'$' + tipTotal}></InfoCalc>
            <InfoCalc text="Total/" amount={'$' + total}></InfoCalc>

            <ResetButton></ResetButton>
          </SectionCalc>
        </Container>
      
      
    </>
  );
}

export default App;
