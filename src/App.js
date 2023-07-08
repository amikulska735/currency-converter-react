import Form from "./Form";
import "./index.css";
import Header from "./Header";
import Container from "./Container";

function App({ result, calculateRate }) {
  return (
    <Container>
      <Header title="Prosty przelicznik wymiany walut" />
      <Form result={result} calculateRate={calculateRate} />
    </Container>
  );
}

export default App;