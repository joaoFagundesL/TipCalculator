import GlobalStyle from "./styles/globalStyles";
import Container from './styles/Container';
import SpliterText from "./styles/SpliterText";
import Header from "./styles/Header";
import InputSection from "./styles/InputSection";
import iconDollar from './images/icon-dollar.svg';
import iconPerson from './images/icon-person.svg';


function App() {
  return (
    <>
      <GlobalStyle />

      <Header>
        <SpliterText>Spli<br/>tter</SpliterText>
      </Header>

      <Container>
        <InputSection icon={iconDollar} text="Bill"></InputSection>
      </Container>
    </>
  );
}

export default App;
