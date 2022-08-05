import logo from "./logo.svg";
import "./App.css";
import { HeaderContainer, NotesContainer } from "./app.styles";

function App() {
  return (
    <div className="App">
      <HeaderContainer>
        <h1>Notes Notes Notes!</h1>
      </HeaderContainer>
      <NotesContainer>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </NotesContainer>
    </div>
  );
}

export default App;
