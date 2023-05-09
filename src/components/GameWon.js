import React, { useEffect } from "react";
import { Link }from 'react-router-dom';
import useSound from "use-sound";
import { gameOverWin } from "../sounds";
import image from "../img/events/win.jpeg";
import Header from "./Header";
import silverKey from "../img/events/silver-key.jpg";

function GameWon({ audioOn, onGameOver }) {
  // useState to prevent infinite loop bug when passing random sounds to useSound
  const [playGameOverWin, gameOverWinSoundData] = useSound(gameOverWin, {
    soundEnabled: audioOn,
    volume: 0.70,
    interrupt: true
  });

  useEffect(() => {
    if (audioOn) {
      playGameOverWin();
    } else {
      gameOverWinSoundData.stop();
    }
  }, [audioOn, playGameOverWin,gameOverWinSoundData]);

  const gameWonText = <div>
    <p>You return to the group with the key. The cage containing Juan and the rest of the team lifts. The team rushes out of the cage, and passes you to the door. As you hold out the key, the group parts and you spot the door. You insert the key into the keyhole and turn. As the door unlocks, you push the heavy door open. Fresh air rushes past you and into the house. You and the team spill out into the street as you spot a figure strolling up the street to the house.</p>

    <p>“Irma?! What are you doing here?!” Eyob questions.</p>

    <p>“Hi everyone. You’re early for the Bitwise Haunted House!” Irma says, a smile plastered on her face as she points to the small “Bitwise Industries” sign just above the doorway.</p>
  </div>

  return (
    <div id="game-won">
      <Header />      
      <div className="img-wrap">
        <img src={silverKey} alt="silver key" />
      </div>

      <div className="img-wrap">
        <img src={image} alt="" />
      </div>

      {gameWonText}

      <div className="btn-wrap">
        <Link to="/">
          <button className="backToHomeBtn" onClick={ () => {
            gameOverWinSoundData.stop();
            onGameOver();
          }}>Restart the Game</button>
        </Link>
      </div>
    </div>
  );
}

export default GameWon;
