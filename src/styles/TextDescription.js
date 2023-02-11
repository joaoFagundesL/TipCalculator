import React from 'react';
import styled from "styled-components";
import { colors } from './GlobalVariables';

const Text = styled.p`
  color: ${colors.textColor};
  font-weight: bold;
`;

const TextDescription = (props) => {
  return(
    <Text> {props.text} </Text>
  );
};

export default TextDescription;
