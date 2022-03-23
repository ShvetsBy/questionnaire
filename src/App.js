import logo from "./logo.svg";
import "./App.css";
import { Title } from "./components/title";
import { Questions } from "./components/questions";

function App() {
  return (
    <section className="wrapper">
      <Title />
      <Questions />
    </section>
  );
}

export default App;
