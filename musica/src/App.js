// import styles
import "./styles/app.scss";
// import Components
import Song from "./components/Song";
import Player from "./components/Player";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
