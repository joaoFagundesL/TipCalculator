import React from "react";
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
  return (
    <>
      <GlobalStyle />

      <Header>
        <SpliterText>Spli<br/>tter</SpliterText>
      </Header>

      <Container>
        <InputSection icon={iconDollar} text="Bill"></InputSection>
        <TipSection></TipSection>
        <InputSection icon={iconPerson} text="Number of People"></InputSection>
        <SectionCalc>
          <InfoCalc text="Tip Amount/" amount="$0.00"></InfoCalc>
          <InfoCalc text="Total/" amount="$0.00"></InfoCalc>
          <ResetButton></ResetButton>
        </SectionCalc>
      </Container>
    </>
  );
}

export default App;
