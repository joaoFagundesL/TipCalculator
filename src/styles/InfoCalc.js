import React from "react";
import styled from "styled-components";
import { colors } from "./GlobalVariables";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: .2rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

const MainText = styled.h1`
  color: ${colors.textColorButton};
  font-size: 1rem;
`;

const PersonText = styled.p`
  color: ${colors.textColor};
  font-size: .9rem;
`;

const Amount = styled.p`
  color: ${colors.hoverBackgroundColor};
  font-size: 1.9rem;
  font-weight: bold;
`;

const InfoCalc = (props) => {
  return(
    <Container>
      <Div>
        <MainText> {props.text} </MainText>
        <PersonText>person</PersonText>
      </Div>

      <Amount>{props.amount}</Amount>
    </Container>
  );
};

export default InfoCalc;