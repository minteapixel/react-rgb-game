import React from 'react';

const PlayAgain = (props) => (
  <div className="playagain">
    <h3>You win! :)</h3>
    <button className="btn btn--playagain" onClick={(e) => {props.reset()}}>Play Again?</button>
  </div>
  
);

export default PlayAgain;