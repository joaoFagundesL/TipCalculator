// eslint-disable-next-line
import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  @media (min-width: 768px) {
    height: 150px;
    align-items: start;
  }
`;

export default Header;
