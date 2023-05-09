import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import house from "../img/rooms/house.jpeg";
import PageNumber from "./PageNumber";
import { storyData } from './storyData'

export default function StartGame({ setHasSilverKey, setHasGoldKey, onStartGame }) {
	let { page } = useParams();
	page = parseInt(page || 0);

  useEffect(() => {
    setHasSilverKey(false);
    setHasGoldKey(false);
  });

  
	return (
		<div id="start-game">
			{page === 0 && <Header />}
			<img src={house} alt="" />

			{/* {page === 0 && <p>{storyData[0]}</p>}
			{page === 1 && <p>{storyData[1]}</p>} */}

		{storyData[page].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )
        )}

      <div id="btn-bar">
        <div className="btn-wrap">
          <Link to={`/hallwayreroute`}>
            <button onClick={onStartGame}> Skip to Gameplay </button>
          </Link>
        </div>
        <div className="btn-wrap">
          {page === 1 ? (
            <Link to={`/hallway/0`}>
              <button>Continue Story</button>
            </Link>
          ) : (
            <Link to={`/startgame/${page + 1}`}>
              <button onClick={onStartGame}>Continue Story</button>
            </Link>
          )}
        </div>
      </div>
			<PageNumber pages={storyData} page={page} title="Start Game" />
		</div>
	);
}


//  {falseending.map(
//  (paragraph, index) => (
//   <p key={index}>{paragraph}</p>
//  )
//  )}
