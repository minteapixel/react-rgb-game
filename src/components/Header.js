import React from 'react';
import { mode } from '../utils.js';

const Header = (props) => (
  <header>
    <h1 className="center">The RGB Color Game</h1>
    <nav className="nav">
      <button className={props.mode === mode.easy ? "btn btn--active" : "btn"} onClick={(e) => {props.handleModeChange(mode.easy)}}>Easy</button>
      <button className={props.mode === mode.hard ? "btn btn--active" : "btn"} onClick={(e) => {props.handleModeChange(mode.hard)}}>Hard</button>
      <button className={props.mode === mode.expert ? "btn btn--active" : "btn"} onClick={(e) => {props.handleModeChange(mode.expert)}}>Expert</button>
      <button className={props.mode === mode.infernal ? "btn btn--active" : "btn"} onClick={(e) => {props.handleModeChange(mode.infernal)}}>Infernal <span role="img" aria-label="fire">🔥</span></button>
      <button className="btn btn--reset" onClick={(e) => {props.reset()}}>Reset Colors</button>
    </nav>
    <section>
      <h2>How to Play:</h2>
      <p>Find the square whose color matches the following RGB value:</p>
      <div>
        <h2 className="caps">
          {props.guessColor}
        </h2>
      </div>
      
    </section>
  </header>
);

export default Header;