import React from "react";
import img from "../img/rooms/Hall-option-1.jpg";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import { doorCreak } from "../sounds";
import PresentKey from "./PresentKey";

const HallwayReroute = (props) => {
	const [playDoorCreak, doorCreakSoundData] = useSound(doorCreak, {
		soundEnabled: props.audioOn,
		volume: 0.8,
		interrupt: true,
	});

	// stop doorCreak sound when speaker button is toggled off
	if (!props.audioOn) {
		doorCreakSoundData.stop();
	}

  const hallwayText = <div>
    <p>In front of you is a hallway filled with doors. Each room has a challenge for you to beat. One room holds the key.</p>
    <p>Complete the challenge, find the key, and make your way back to the hallway to present the key, save your friends and escape!</p>
  </div>

	return (
		<div id="hallway">
			<h1>Hallway</h1>
			<div className="img-wrap">
				<img className="hallway" src={img} alt="" />
			</div>
			{hallwayText}
			<div id="button-bar">
				{(
				props.rooms.map((room, index) => (
					<Link to={`/room/${room.name}`} key={index}>
						<button id="btn" onClick={() => playDoorCreak()}>
							{room.name}
						</button>
					</Link>
					))
				)}
			</div>
			{ (props.hasGoldKey || props.hasSilverKey) &&
        <PresentKey
					hasGoldKey={props.hasGoldKey}
					hasSilverKey={props.hasSilverKey}
					setHasGoldKey={props.setHasGoldKey}
					setHasSilverKey={props.setHasSilverKey}
					audioOn={props.audioOn}
				/>
			}
		</div>
	);
};

export default HallwayReroute;