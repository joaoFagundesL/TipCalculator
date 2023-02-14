import React from 'react';
import styled from "styled-components";
import { colors } from './GlobalVariables';

const Text = styled.p`
  color: ${colors.textColor};
  font-weight: bold;
`;

const TextDescription = ({ text }) => {
  return(
    <Text> {text} </Text>
  );
};

export default TextDescription;
