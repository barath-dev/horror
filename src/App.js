import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
import Inventory from "./components/Inventory";
import useSound from "use-sound";
import { ambienceHauntedCave } from "./sounds";
import Random from './util/Random';
import FalseEnding from "./components/FalseEnding";
import GameWon from "./components/GameWon";
import HallwayReroute from "./components/HallwayReroute";

function App() {
	const rooms = RoomData;
	const events = EventsData;
	const [audioOn, setAudio] = useState(true);
	const [hasGoldKey, setHasGoldKey] = useState(false);
	const [hasSilverKey, setHasSilverKey] = useState(false);
	const [playAmbience, ambienceSoundData] = useSound(ambienceHauntedCave, {
		soundEnabled: audioOn,
		volume: 0.60,
		interrupt: true
	});
	const [randomEvents, setRandomEvents] = useState(
		localStorage.getItem('Storage Event') 
			? JSON.parse(localStorage.getItem('Storage Event')) 
			: Random.selectRandomEvents(events));
	const [randomEventsIndex, setRandomEventsIndex] = useState(
		localStorage.getItem('Storage Index') 
		? JSON.parse(localStorage.getItem('Storage Index')) 
		: 0);

  /**
   * called when user clicks continue after passing an event
   * @listens onClick EventModal
   */
   const onEventPass = () => {
		localStorage.setItem('beginEvent', true);

	  if (randomEventsIndex + 1 >= randomEvents.length) {
		  const rollEvent = Random.selectRandomEvents(events);
		  setRandomEvents(rollEvent);
		  localStorage.setItem('Storage Event', JSON.stringify(rollEvent));
		  localStorage.setItem('Storage Index', 0);
		  setRandomEventsIndex(0);
	  } else {
		  setRandomEventsIndex(randomEventsIndex + 1);
		  localStorage.setItem('Storage Index', randomEventsIndex + 1);
	  }
  }
	/**
	 * called when user clicks 'Skip to Gameplay' or 'Continue Story' button
	 * @listens onClick StartGame
	 */
	const onStartGame = () => {
		localStorage.clear();
		if (localStorage.getItem('Storage Event') == null) {
			localStorage.setItem('Storage Event', JSON.stringify(randomEvents));
			localStorage.setItem('Storage Index', 0);
		}
		if (audioOn && !ambienceSoundData.sound.playing()) {
			playAmbience();
			ambienceSoundData.sound.loop(true);
		}
	}

	/**
	 * called when user clicks 'Restart Game' on either game win or lose
	 * @listens onClick GameWon
	 * @listens onClick GameOver
	 */
	const onGameOver = () => {
		setRandomEvents(Random.selectRandomEvents(events));
		setRandomEventsIndex(0);
		localStorage.clear();
	}

	useEffect(() => {
		// stop ambience sound when speaker button is toggled off
		if (!audioOn) {
			ambienceSoundData.stop();
		} else if (ambienceSoundData.sound && !ambienceSoundData.sound.playing()) {
			playAmbience();
			ambienceSoundData.sound.loop(true);
		}
	}, [audioOn, ambienceSoundData, playAmbience]);

	return (
		<HashRouter>
			<Switch>
				<Route exact path="/">
					<StartGame
					setHasSilverKey={setHasSilverKey}
					setHasGoldKey={setHasGoldKey} 
					onStartGame={onStartGame} />
				</Route>
				<Route exact path="/haunted-house-game">
					<StartGame
					setHasSilverKey={setHasSilverKey}
					setHasGoldKey={setHasGoldKey} 
					onStartGame={onStartGame} />
				</Route>
				<Route path="/startgame/:page">
					<StartGame
					setHasSilverKey={setHasSilverKey}
					setHasGoldKey={setHasGoldKey} />
				</Route>
				<Route path="/hallway/:page">
					<Hallway
						audioOn={audioOn}
						rooms={rooms}
						hasSilverKey={hasSilverKey}
						hasGoldKey={hasGoldKey}
						setHasSilverKey={setHasSilverKey}
						setHasGoldKey={setHasGoldKey}
					/>
				</Route>
				<Route path="/hallwayreroute">
					<HallwayReroute
						audioOn={audioOn}
						rooms={rooms}
						hasSilverKey={hasSilverKey}
						hasGoldKey={hasGoldKey}
						setHasSilverKey={setHasSilverKey}
						setHasGoldKey={setHasGoldKey}
					/>
				</Route>
				<Route path="/room/:name">
					<Room
						rooms={rooms}
						hasSilverKey={hasSilverKey}
						hasGoldKey={hasGoldKey}
						setHasSilverKey={setHasSilverKey}
						setHasGoldKey={setHasGoldKey}
						audioOn={audioOn}
						events={events}
						randomEvent={randomEvents[randomEventsIndex]}
						onEventPass={onEventPass}
						onGameOver={onGameOver}
					/>
				</Route>
				<Route path="/falseending">
					<FalseEnding
						setHasGoldKey={setHasGoldKey}
					/>
				</Route>
				<Route path="/gamewon">
					<GameWon onGameOver={onGameOver} audioOn={audioOn}/>
				</Route>
			</Switch>
			<Inventory
				audioOn={audioOn}
				setAudio={setAudio}
				goldKey={hasGoldKey}
				silverKey={hasSilverKey}
			/>
		</HashRouter>
	);
}

export default App;

