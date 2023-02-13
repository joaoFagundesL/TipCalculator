import styled from "styled-components";
import TextDescription from "./TextDescription";
import ButtonTip from "./ButtonTip";
import InputCustom from "./InputCustom";
import React, { useState } from "react";

const Container = styled.div`
  display: grid;
  gap: .5rem;
  margin-top: 2rem;
`;

const DivTips = styled.div`
  display: grid;
  gap: .8rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

const TipSection = () => {
  const [value, setValue] = useState(null);

  const handleValue = (value) => {
    setValue(value);
  }
  
  return(
    <>
      <Container>
        <TextDescription text="Select Tip %"></TextDescription>
        <DivTips>
          <ButtonTip text='5%'  click={handleValue} ></ButtonTip>
          <ButtonTip text='10%' click={handleValue} ></ButtonTip>
          <ButtonTip text='15%' click={handleValue} ></ButtonTip>
          <ButtonTip text='25%' click={handleValue}></ButtonTip>
          <ButtonTip text='50%' click={handleValue}></ButtonTip>
          <InputCustom text="Custom" ></InputCustom>
        </DivTips>
      </Container>
    </>
  );
}

export default TipSection;