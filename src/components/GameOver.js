import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gameOver from "../img/events/game-over.png"
import useSound from 'use-sound';
import { gameOverFail } from '../sounds';

function GameOver(props) {
  const [playGameOverFail, gameOverFailSoundData] = useSound(gameOverFail, {
    soundEnabled: props.audioOn,
    volume: 0.30,
    interrupt: true
  });

  // proper way to play audio
  useEffect(() => {
    if (props.isGameOver && props.audioOn) {
      playGameOverFail();
    } else {
      gameOverFailSoundData.stop();
    }
  }, [playGameOverFail, gameOverFailSoundData, props.isGameOver, props.audioOn]);

  return (
    props.isGameOver &&
    props.i === props.selectedAction && (
      <div id="game-over" className="game-over-modal">
        <div className="img-wrap">
          <img src={gameOver} alt="" />
        </div>
        <p> {props.message}</p>
        <h1>Game Over</h1>
        <div className="btn-wrap">
          <Link to="/">
            <button className="backToHomeBtn" onClick={() => {
              gameOverFailSoundData.stop();
              props.onGameOver();
            }}>Restart the Game </button>
          </Link>
        </div>
      </div>
    )
  );
}
export default GameOver;
