import React, { useState, useContext } from "react";
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
  const [teste, setTest] = useState(false);
  const [total, setTotal] = useState(0);

  const { inputValue } = useContext(CustomTipContext);

  const handleTest = (value) => {
    setTest(value);

    if (value && bill && people && inputValue) {
      let billAmount = parseFloat(bill);
      let tipPercentage = parseFloat(inputValue) / 100;
      let tipAmount = billAmount * tipPercentage;
      let totalAmount = billAmount + tipAmount; 
      setTotal((totalAmount / people).toFixed(2));
    } else {
      console.log('value/bill/people wrong');
    }
  }

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
            testing={handleTest}
          ></InputSection>

          <TipSection></TipSection>

          <InputSection icon={iconPerson}
            text="Number of People"
            onEnter={handlePeople}
            testing={handleTest}
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
