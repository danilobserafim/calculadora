import styled, {createGlobalStyle} from 'styled-components'
import Calculadora from "./components/calculadora";


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
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
