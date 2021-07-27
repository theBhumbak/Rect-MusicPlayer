import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>S.T.</p>
        <input type="range" />
        <p>E.T.</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faStepBackward} />
        <FontAwesomeIcon className="play" icon={faPlay} />
        <FontAwesomeIcon className="skip-forward" icon={faStepForward} />
      </div>
    </div>
  );
};

export default Player;
