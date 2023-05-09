import { useState } from "react";
import ShowKey from "./ShowKey";


function PresentKey(props) {
  const [presentedKey, setPresentedKey] = useState(null);

  return (
    <div>
      <div className="btn-wrap">
        <button
          className="presentKey backToHomeBtn"
          onClick={() => {
            setPresentedKey(true);
          }}
        >
          Present Key
        </button>
      </div>
      {/* { 
      presentedKey !== null
      && !(props.hasGoldKey || props.hasSilverKey)
      && <p>You need to find a key first!</p>
      } */}
      {
      presentedKey
        && (props.hasGoldKey || props.hasSilverKey)
        && (
          <ShowKey
            hasGoldKey={props.hasGoldKey}
            hasSilverKey={props.hasSilverKey}
            setHasGoldKey={props.setHasGoldKey}
            audioOn={props.audioOn}
          />
      )}
    </div>
  );
}

export default PresentKey;
