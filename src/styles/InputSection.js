import styled from "styled-components";

const textColor = '#7F9C9F';
const bgInputColor = '#F4FAFA';
const placeholderColor = '#719B9D';
const borderColor = '#26C0AB';

const Text = styled.p`
  color: ${textColor};
  font-weight: bold;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
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
      <Text> {props.text} </Text>
      <Input type='text' icon={props.icon} placeholder="0"></Input>
    </Div>
  )
}

export default InputSection;