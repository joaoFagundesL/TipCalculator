//eslint-disable-next-line
import React from "react";
import styled from "styled-components";
import { colors } from "./GlobalVariables";

const SectionCalc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${colors.buttonColor};
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
    margin-top: 0rem;
  }
`;

export default SectionCalc;
