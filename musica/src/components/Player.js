import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// importing icons
import {
  faPlay,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, setIsPlaying, isPlaying }) => {
  // Ref
  const audioRef = useRef(null);
  // Event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>S.T.</p>
        <input type="range" />
        <p>E.T.</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faStepBackward} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={faPlay}
        />
        <FontAwesomeIcon className="skip-forward" icon={faStepForward} />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
