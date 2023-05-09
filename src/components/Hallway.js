import React from "react";
import img from "../img/rooms/Hall-option-1.jpg";
import { useParams, Link } from "react-router-dom";
import useSound from "use-sound";
import { doorCreak } from "../sounds";
import PresentKey from "./PresentKey";
import PageNumber from "./PageNumber";
import { hallway } from './storyData'

const Hallway = (props) => {
	const [playDoorCreak, doorCreakSoundData] = useSound(doorCreak, {
		soundEnabled: props.audioOn,
		volume: 0.1,
		interrupt: true,
	});
	let { page } = useParams();
	page = parseInt(page || 0);

	// stop doorCreak sound when speaker button is toggled off
	if (!props.audioOn) {
		doorCreakSoundData.stop();
	}

	return (
		<div id="hallway">
			<h1>Hallway</h1>
			<div className="img-wrap">
				<img className="hallway" src={img} alt="" />
			</div>

			{hallway[page].map((paragraph, index) => (
            	<p key={index}>{paragraph}</p>
          	)
        )}
			
			<div id="button-bar">
        {page !== (hallway.length - 1) && (
			<div className="btn-wrap">
				<Link to={`/hallwayreroute`}>
					<button> Skip to Gameplay </button>
				</Link>
			</div>
        )}
				{page !== (hallway.length - 1) ? (
					<Link to={`/hallway/${page + 1}`}>
						<button id="btn">Continue Story</button>
					</Link>
				) : (
					props.rooms.map((room, index) => (
						<Link
							to={{
								pathname: `/room/${room.name}`,		
								}}
							key={index}
						>
							<button id="btn" onClick={() => playDoorCreak()}>
								{room.name}
							</button>
						</Link>
					))
				)}
			</div>
			{page === (hallway.length - 1) && (props.hasGoldKey || props.hasSilverKey) && (
				<PresentKey
					hasGoldKey={props.hasGoldKey}
					hasSilverKey={props.hasSilverKey}
					setHasGoldKey={props.setHasGoldKey}
					setHasSilverKey={props.setHasSilverKey}
					audioOn={props.audioOn}
				/>
			)}
			<PageNumber pages={hallway} page={page} title="Hallway" />
		</div>
	);
};

export default Hallway;
