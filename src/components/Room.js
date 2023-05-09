import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Event from "./Event";

function Room(props) {
  const { name } = useParams();
  const [isGameOver, setIsGameOver] = useState(!!JSON.parse(localStorage.getItem('isGameOver')));
  const [showDialog, setShowDialog] = useState(!!JSON.parse(localStorage.getItem('showEventModal')));
  const [beginEvent, setBeginEvent] = useState(
    localStorage.getItem('beginEvent') !== null 
      ? JSON.parse(localStorage.getItem('beginEvent'))
      : true
  );

  const found = props.rooms.filter(
    (room) => room.name.toLowerCase() === name.toLowerCase()
  );

  const searchRoom = () => {
    localStorage.setItem('showEventModal', true);
    localStorage.setItem('beginEvent', false);
    setShowDialog(true);
    setBeginEvent(false);
  };

  return (
    <div id="room">
      <h1>{found[0].name}</h1>
      <div className="img-wrap">
        <img src={found[0].image} alt="" />
      </div>

      <p>{found[0].description}</p>
      {beginEvent && <button onClick={() => searchRoom()}>Search Room</button>}

      {(!isGameOver || !props.hasSilverKey) && (
        <div className="btn-wrap">
          <Link to="/hallwayreroute">
            <button
              className="backToHomeBtn"
              onClick={() => {
                setBeginEvent(true);
                props.onEventPass();
              }}
            >
              Back to Hallway
            </button>
          </Link>
        </div>
      )}
      <Event
        event={props.randomEvent}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        hasGoldKey={props.hasGoldKey}
        setHasGoldKey={props.setHasGoldKey}
        hasSilverKey={props.hasSilverKey}
        setHasSilverKey={props.setHasSilverKey}
        setBeginEvent={setBeginEvent}
        beginEvent={beginEvent}
        setShowDialog={setShowDialog}
        showDialog={showDialog}
        events={props.events}
        audioOn={props.audioOn}
        onGameOver={props.onGameOver}
      />
    </div>
  );
}

export default Room;