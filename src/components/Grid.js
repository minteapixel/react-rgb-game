import React from 'react';
import Square from './Square';
import PlayAgain from './PlayAgain';

class Grid extends React.Component {
  render() {
    return (
      <div>
        { this.props.win === true && <PlayAgain reset={this.props.reset} /> }
        <div className="grid">
        { this.props.colorArray.map((color, index) => 
          <Square
            key={index}
            squareColor={color}
            handleClickSquare={this.props.handleClickSquare}
          />)
        }
        </div>
      </div>
    );
  }
}

export default Grid;