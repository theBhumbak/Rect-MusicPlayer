import { useState } from "react";
// import styles
import "./styles/app.scss";
// import Components
import Song from "./components/Song";
import Player from "./components/Player";

// import Utils -- data
import data from "./util";

function App() {
  // state
  const [songs, setSongs] = useState(data());
  const [currentSong, setcurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
