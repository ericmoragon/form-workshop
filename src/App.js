import styled from "styled-components";
import { SimpleForm } from "./components/SimpleForm";
import { MultiStepForm } from "./components/MultiStepForm";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 120px;
`;

function App() {
  return (
    <Background className="App">
      <SimpleForm />
      <MultiStepForm />
    </Background>
  );
}

export default App;
