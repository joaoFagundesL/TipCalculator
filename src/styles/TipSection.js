import styled from "styled-components";
import TextDescription from "./TextDescription";
import ButtonTip from "./ButtonTip";
import React from "react";

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
  return(
    <>
      <Container>
        <TextDescription text="Select Tip %"></TextDescription>
        <DivTips>
          <ButtonTip text='5%'></ButtonTip>
          <ButtonTip text='10%'></ButtonTip>
          <ButtonTip text='15%'></ButtonTip>
          <ButtonTip text='25%'></ButtonTip>
          <ButtonTip text='50%'></ButtonTip>
        </DivTips>
      </Container>
    </>
  );
}

export default TipSection;