import Button from "./components/Button";
import Input from "./components/Input";
import styled, {createGlobalStyle} from 'styled-components'
import Calculadora from "./components/calculadora";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Calculadora />
    </Container>
  );
}

export default App;
