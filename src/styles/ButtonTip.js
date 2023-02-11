import styled from "styled-components";

const buttonColor = '#00494D';
const textColor = '#FFF';
const hoverBackgroundColor = '#26C0AB';
const hoverTextColor = '#00494D';

const Button = styled.button`
  background-color: ${buttonColor};
  border: none;
  color: ${textColor};
  font-weight: bold;
  text-align: center;
  padding: .5rem;
  cursor: pointer;
  border-radius: .5rem;
  font-size: 1.3rem;
  transition: all .3s;

  &:hover {
    background-color: ${hoverBackgroundColor};
    color: ${hoverTextColor}
  }
`;

const ButtonTip = (props) => {
  return(
    <Button> {props.text} </Button>
  );
};

export default ButtonTip;