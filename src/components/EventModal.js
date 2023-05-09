import React, { useEffect, useState } from "react";
import ResultAction from "./ResultAction";
import KeyDisplay from "./KeyDisplay";
import useSound from "use-sound";
import { zombieMoan, ghostScream, chainsaw, evilLaugh, werewolf,  } from "../sounds";
import Random from '../util/Random';

function EventModal(props) {
  //States to determine which key they have just received since now it is possible to have both keys simultaneously
  const [informedOfSilverKey, setInformedOfSilverKey] = useState(true);
  const [informedOfGoldKey, setInformedOfGoldKey] = useState(true);
  // shuffledActions is used for generating shuffled action choices
  const [shuffledActions, setShuffledActions] = useState([]);

  // event sounds
  const noiseStarter = {
    Ghost: { sound: ghostScream, volume: 0.05 },
    Werewolf: { sound: werewolf, volume: 0.30 },
    Zombie: { sound: zombieMoan, volume: 0.15 },
    "Chainsaw Murderer": { sound: chainsaw, volume: 0.20 },
    "The Talking Heads": { sound: evilLaugh, volume: 0.25 },

  }
  const soundName = props.event.name;
  const [playSound, soundData] = useSound(
    noiseStarter[soundName]?.sound, 
    { soundEnabled: !props.hasChosenAction && props.audioOn,
    volume: noiseStarter[soundName]?.volume,
    interrupt: true }
  );

  /**
   * Helper function to shuffle and return action buttons
   */
  const renderChoices = () => {
    let shuffledActionsList = shuffledActions;

    if (shuffledActionsList.length === 0 ) {
      shuffledActionsList = Random.selectRandomElements(props.event.actions);
      setShuffledActions(shuffledActionsList);
    } 
    return shuffledActionsList.map((currentAction, i) => (
      <div key={i}>
        <button
          onClick={() => {
            props.setAction(currentAction);
            props.setSelectedAction(i);
            if (currentAction.type !== "redo")
              props.setHasChosenAction(true);
          }}
        >
          {currentAction.action}
        </button>
        <ResultAction
          { ...props }
          i={i}
          setInformedOfGoldKey={setInformedOfGoldKey}
          setInformedOfSilverKey={setInformedOfSilverKey}
          informedOfGoldKey={informedOfGoldKey}
          informedOfSilverKey={informedOfSilverKey}
        />
      </div>
    ))
  }
  
  useEffect(() => {
    if (props.isGameOver || props.hasChosenAction || !props.audioOn) {
      soundData.stop();
    } else {
      playSound();
    }
  }, [props.isGameOver, props.hasChosenAction, props.audioOn, playSound, soundData]);
  
  // For if they just received either key
  if (!informedOfSilverKey || !informedOfGoldKey) {
    return (
      <div className="event-modal" id="event" >
        <p>{props.action.response}</p>
        <KeyDisplay
          hasGoldKey={props.hasGoldKey}
          hasSilverKey={props.hasSilverKey}
          setHasGoldKey={props.setHasGoldKey}
          informedOfGoldKey={informedOfGoldKey}
          informedOfSilverKey={informedOfSilverKey}
        />
        <button
          onClick={() => {
            localStorage.setItem('showEventModal', false);
            props.setShowDialog(false);
            setInformedOfSilverKey(true);
            setInformedOfGoldKey(true);
          }}
        >
          Continue
        </button>
      </div>
    );
  }
  return (
    //For when the event first renders and they haven't chosen an action yet
    <>
      {!props.hasChosenAction && !props.isGameOver ? (
        <div className="event-modal" id="event" >
          <div style={{ margin: "0" }}>
            <h3>{props.event.name}</h3>
            <div className="img-wrap">
              <img src={props.event.image} alt="" />
            </div>
            <p>{props.event.description}</p>
            { renderChoices() }
          </div>
        </div>
      ) : (
        //For when they have chosen an action and see response but didn't receive either key
        !props.isGameOver &&
        informedOfSilverKey &&
        informedOfGoldKey && (
          <div className="event-modal" id="event" >
            <div style={{ margin: "0" }}>
              <h3>{props.event.name}</h3>
              <div className="img-wrap">
                <img src={props.event.image} alt="" />
              </div>
              <ResultAction
                { ...props }
                i={props.selectedAction}
                name={props.event.name}
                setInformedOfGoldKey={setInformedOfGoldKey}
                setInformedOfSilverKey={setInformedOfSilverKey}
                informedOfGoldKey={informedOfGoldKey}
                informedOfSilverKey={informedOfSilverKey}
              />
            </div>
          </div>
        )
      )}
    </>
  );
}

export default EventModal;