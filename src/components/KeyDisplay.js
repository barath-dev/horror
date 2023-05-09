import React from "react";

//images
import silverKey from "../img/events/silver-key.jpg";
import goldKey from "../img/events/gold-key.jpeg";

function KeyDisplay(props) {
  return (
    //The test cases were changed to 'informedOf' instead of 'has' because now someone could carry both keys simultaneously and we don't want bug where the information displays for both simultaneously
    <div>
      {!props.informedOfSilverKey && (
        <div>
          <div className="img-wrap">
            <img src={silverKey} alt="silver key" />
          </div>
          <h2>You have obtained the Silver Key!</h2>
          <p>You must now find your way back to the hallway to present the key.</p>
        </div>
      )}
      {!props.informedOfGoldKey && (
        <div>
          <div className="img-wrap">
            <img src={goldKey} alt="gold key" />
          </div>
          <h2>You have obtained the Gold Key!</h2>
          <p>You must now find your way back to the hallway to present the key.</p>
        </div>
      )}
    </div>
  );
}

export default KeyDisplay;
