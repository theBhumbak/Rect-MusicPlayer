const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>S.T.</p>
        <input type="range" />
        <p>E.T.</p>
      </div>
      <div className="play-control">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Player;
