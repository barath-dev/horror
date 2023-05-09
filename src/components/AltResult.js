const AltResult = (props) => {
	const alternateResponse = () => {
		const playerRoll = Math.random() * 50;
		  if(playerRoll > props.altAction.chance){
			props.setIsAlternate(true);
            return true;
		  }
	  };

    if (alternateResponse) {
        return props.setIsAlternate ? (
        <>
            <p>{props.altAction.altResponse}</p>
        </>
        ) : null;
    }
    else {
        return null;
    }
};
export default AltResult;