import styled from "styled-components";
import { SimpleForm } from "./components/SimpleForm";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Background className="App">
      <SimpleForm />
    </Background>
  );
}

export default App;
