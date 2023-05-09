import { useHistory } from "react-router-dom";
import FalseEnding from "./FalseEnding";

// triggers when hasGoldKey or hasSilverKey are true
  export default function ShowKey (props) {
    const history = useHistory();
    var winMessage = '';

    // fake key and keep playing
    if (props.hasGoldKey) {
    }
    // real key and win
    else if (props.hasSilverKey) {
      winMessage= history.push("/gamewon")
    }
    else {
      winMessage='';
    }

    return (
      <div>
        {winMessage}
        {props.hasGoldKey && 
          history.push("/falseending")
        }
      </div>
    );
  };