import React from 'react';

const Square = (props) => (
  <button
    style={{ backgroundColor: `${props.squareColor}`}}
    className="square"
    onClick={() => {
      props.handleClickSquare(props.squareColor)
    }}
  />
);

export default Square;