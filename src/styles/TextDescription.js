import React from 'react';
import styled from "styled-components";

const Text = styled.p`
  color: var(--textColor);
  font-weight: bold;
`;

const TextDescription = (props) => {
  return(
    <Text> {props.text} </Text>
  );
};

export default TextDescription;
