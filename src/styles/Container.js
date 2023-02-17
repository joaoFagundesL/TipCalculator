// eslint-disable-next-line
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;

  padding-inline: 2rem;
  padding-top: 2rem;
  padding-bottom: 4rem;

  max-width: 960px;
  margin: 0 auto;

  @media (min-width: 768px) {
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;

    padding-bottom: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
`;

export default Container;
