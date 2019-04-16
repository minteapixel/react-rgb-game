import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Grid from './Grid';
import { mode, randomColor, winColor, infernalColor } from '../utils.js';

export default class GameApp extends React.Component {
  state = {
    mode: mode.hard,
    win: false,
    colorArray: [],
    guessColor: undefined
  };

  componentDidMount() {
    this.reset();
  }

  reset = () => {
    let colorArray = [];
    if (this.state.mode == mode.infernal) {
      let colorArray = infernalColor();
      this.setState({
        colorArray,
        guessColor: winColor(colorArray),
        win: false
      });
    } else {
      for (let i=0; i < this.state.mode; i++) {
        colorArray.push(randomColor());
      };
      this.setState({
        colorArray,
        guessColor: winColor(colorArray),
        win: false
      });
    }
  }

  handleClickSquare = (color) => {
    if (color === this.state.guessColor) {
      this.setState({
        win: true
      });
    }
  };

  handleModeChange = (clickedMode) => {
    if(clickedMode !== this.state.mode) {
      this.setState({
        mode: clickedMode
      }, () => { this.reset() });
    };
  }

  render() {
    return (
      <div className="container">
        <Header 
          guessColor={this.state.guessColor}
          reset={this.reset} 
          handleModeChange={this.handleModeChange}
          mode={this.state.mode}
        />
        <Grid
          colorArray={this.state.colorArray}
          win={this.state.win}
          reset={this.reset}
          handleClickSquare={this.handleClickSquare}
        />
        <Footer />
      </div>
    )
  }
};