import React, { useState, useContext, useEffect } from "react";
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

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [total, setTotal] = useState(0);
  const [enterKey, setEnterKey] = useState(false);

  const handleEnterKey = () =>{
    console.log('Changing the enterKey...')
    setEnterKey(!enterKey);
  }

  const { inputValue } = useContext(CustomTipContext);

  useEffect(() => {
    if (enterKey && bill && people && inputValue) {
      console.log('entered if')
      let billAmount = parseFloat(bill);
      let tipPercentage = parseFloat(inputValue) / 100;
      let tipAmount = billAmount * tipPercentage;
      let totalAmount = billAmount + tipAmount; 
      setTotal((totalAmount / people).toFixed(2));
      handleEnterKey();
    } else {
      console.log('enterKey = ' + enterKey);
      // console.log('bill = ' + bill)
      // console.log('people = ' + people)
      // console.log('inputValue = ' + inputValue);
    }
  }, [enterKey, bill, people, inputValue]);
  

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
            setKey={handleEnterKey}
          ></InputSection>

          <TipSection setKey={handleEnterKey}></TipSection>

          <InputSection icon={iconPerson}
            text="Number of People"
            onEnter={handlePeople}
            setKey = {handleEnterKey}
          ></InputSection>

          <SectionCalc>

            <InfoCalc text="Tip Amount/" amount={'$' + total}></InfoCalc>
            <InfoCalc text="Total/" amount={'$' + total}></InfoCalc>

            <ResetButton></ResetButton>
          </SectionCalc>
        </Container>
      
      
    </>
  );
}

export default App;
