import React from 'react';
import styled from "styled-components";

const textColor = '#7F9C9F';

const Text = styled.p`
  color: ${textColor};
  font-weight: bold;
`;

const TextDescription = (props) => {
  return(
    <Text> {props.text} </Text>
  );
};

export default TextDescription;
