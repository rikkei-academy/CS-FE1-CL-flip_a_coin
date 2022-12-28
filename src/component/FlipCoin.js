import React, { Component } from "react";
import Coin from "./Coin";

class FlipCoin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Let's flip a coin</h2>

        <button>Flip Me!</button>

        <p>Out of flips, there have been heads and tails</p>
      </div>
    );
  }
}

export default FlipCoin;
