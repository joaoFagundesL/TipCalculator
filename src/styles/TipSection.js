import styled from "styled-components";
import TextDescription from "./TextDescription";
import ButtonTip from "./ButtonTip";
import InputCustom from "./InputCustom";
import React, { useState } from "react";

const Container = styled.div`
  display: grid;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const DivTips = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const TipSection = (props) => {
  return (
    <>
      <Container>
        <TextDescription text="Select Tip %"></TextDescription>
        <DivTips>
          <ButtonTip text="5%"></ButtonTip>
          <ButtonTip text="10%"></ButtonTip>
          <ButtonTip text="15%"></ButtonTip>
          <ButtonTip text="25%"></ButtonTip>
          <ButtonTip text="50%"></ButtonTip>
          <InputCustom text="Custom"></InputCustom>
        </DivTips>
      </Container>
    </>
  );
};

export default TipSection;
