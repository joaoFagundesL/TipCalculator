import React, { useState, useEffect } from "react";
import { useContext } from "react";
import GlobalStyle from "./styles/globalStyles";
import Container from "./styles/Container";
import SpliterText from "./styles/SpliterText";
import Header from "./styles/Header";
import InputSection from "./styles/InputSection";
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";
import TipSection from "./styles/TipSection";
import SectionCalc from "./styles/SectionCalc";
import InfoCalc from "./styles/InfoCalc";
import ResetButton from "./styles/ResetButton";
import { CustomTipContext } from "./contexts/CustomTipContext";
// import { HasCalculatedContext } from "./contexts/HasCalculatedContext";
import { ButtonTipContext } from "./contexts/ButtonTipContext";

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [total, setTotal] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);

  const { inputValue, setInputValue, testing } = useContext(CustomTipContext);
  const { buttonValue, removeActive, handleClick, isClicked, setBool } =
    useContext(ButtonTipContext);

  const billCalc = (bill, people, input) => {
    // console.log("bill = " + bill);
    // console.log("people = " + people);
    // console.log("input = " + input);

    if (bill && people && input) {
      let billAmount = parseFloat(bill);
      let tipPercentage = parseFloat(input) / 100;
      let tipAmount = billAmount * tipPercentage;
      let totalAmount = billAmount + tipAmount;
      setTipTotal((tipAmount / people).toFixed(2));
      setTotal((totalAmount / people).toFixed(2));
    } else if (!bill && !people && !input) {
      setTotal(0);
      setTipTotal(0);
    } else if (bill && people && !input) {
      setTotal(0);
      setTipTotal(0);
    }
  };

  useEffect(() => {
    if (isClicked && inputValue == "") {
      // button clicked and input empty
      billCalc(bill, people, buttonValue);
      setBool();
      setInputValue("", buttonValue);
    } else if (inputValue != "" && !isClicked) {
      // input filled and button wasn't clicked
      removeActive();
      billCalc(bill, people, testing);
    } else if (isClicked && inputValue != "") {
      // button clicked and input filled
      billCalc(bill, people, buttonValue);
      setBool();
      setInputValue("", buttonValue);
    } else if (!isClicked && inputValue == "") {
      billCalc(bill, people, testing);
    }
  }, [isClicked, bill, people, testing, buttonValue]);

  const handleBill = (value) => {
    setBill(value);
  };

  const handlePeople = (value) => {
    setPeople(value);
  };

  return (
    <>
      <GlobalStyle />

      <Header>
        <SpliterText>
          Spli
          <br />
          tter
        </SpliterText>
      </Header>

      <Container>
        <InputSection
          icon={iconDollar}
          text="Bill"
          onEnter={handleBill}
        ></InputSection>

        <TipSection></TipSection>

        <InputSection
          icon={iconPerson}
          text="Number of People"
          onEnter={handlePeople}
        ></InputSection>

        <SectionCalc>
          <InfoCalc text="Tip Amount/" amount={"$" + tipTotal}></InfoCalc>
          <InfoCalc text="Total/" amount={"$" + total}></InfoCalc>

          <ResetButton></ResetButton>
        </SectionCalc>
      </Container>
    </>
  );
}

export default App;
