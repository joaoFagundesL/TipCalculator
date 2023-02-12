import React, { useState } from "react";
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


function App() {

  const [bill, setBill] = useState('0');
  const [people, setPeople] = useState('0');

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
        <SpliterText>Spli<br/>tter</SpliterText>
      </Header>

      <Container>
        <InputSection icon={iconDollar}
         text="Bill"
         onEnter={handleBill}
         ></InputSection>

        <TipSection></TipSection>

        <InputSection icon={iconPerson}
         text="Number of People"
         onEnter={handlePeople}
         ></InputSection>

        <SectionCalc>
          <InfoCalc text="Tip Amount/" amount={bill}></InfoCalc>

          <InfoCalc text="Total/"
           amount={people}
           ></InfoCalc>

          <ResetButton></ResetButton>
        </SectionCalc>
      </Container>
    </>
  );
}

export default App;
