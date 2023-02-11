import styled from "styled-components";
import TextDescription from "./TextDescription";

const bgInputColor = '#F4FAFA';
const placeholderColor = '#719B9D';
const borderColor = '#26C0AB';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Input = styled.input`
  border: none;
  background-color: ${bgInputColor};
  padding: .5rem;

  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: 1.2rem center;
  padding: .5rem 1rem .5rem 2rem;

  outline: 0;

  border-radius: 5px;

  text-align: right;
  font-weight: bold;
  font-size: 1.2rem;

  &::placeholder {
   color: ${placeholderColor};
  }

  &:focus {
    border: 2px solid ${borderColor};
  }
`;

const InputSection = (props) => {
  return(
    <Div>
      <TextDescription text={props.text}></TextDescription>
      <Input type='text' icon={props.icon} placeholder="0"></Input>
    </Div>
  )
}

export default InputSection;