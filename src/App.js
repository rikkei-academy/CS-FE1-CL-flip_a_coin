import "./App.css";
import React, { Component } from "react";
import FlipCoin from "./component/FlipCoin";
class App extends Component {
  render() {
    return (
      <div className='App'>
        <FlipCoin />
      </div>
    );
  }
}

export default App;
