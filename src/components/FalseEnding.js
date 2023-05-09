import React from "react";
import { Link } from "react-router-dom";
import GoldKey from "../img/events/gold-key.jpeg";
// import useSound from "use-sound";
// import gameOverLose from "../sounds/game-over-lose.wav";
import Header from "./Header";

const FalseEnding = ({setHasGoldKey}) => {
	// const [play] = useSound(gameOverLose);

  const falseEndingText = <div>
      <p>You take the key out of your pocket and insert it into the keyhole, but just as the tip of the key touches the lock, it smashes into the lock, and the gold wrapping peels away to reveal semi-melted chocolate.</p>
      <p>You were tricked by the alien, keep trying to win the Silver Key!</p>
    </div>

	return (
		<div id="false-ending">
			<Header />
			<img id="gold-key" src={GoldKey} alt="" />

    {falseEndingText}
			
			<Link to="/hallwayreroute">
				<button className="backToHomeBtn" onClick={() => setHasGoldKey(false)}>Keep Trying</button>
			</Link>
		</div>
	);
};

export default FalseEnding;
