import React from "react";
import AudioMute from './AudioMute';

function Inventory(props) {
	return (
		<div id="inventory">
			<AudioMute 
				audioOn={props.audioOn}
				setAudio={props.setAudio}>
			</AudioMute>
            { props.goldKey && <span id="gold-key" title="Gold Key"><i class="fas fa-key"></i></span> }
            { props.silverKey && <span id="silver-key" title="Silver Key"><i class="fas fa-key"></i></span> }            
		</div>
	);
}

export default Inventory;