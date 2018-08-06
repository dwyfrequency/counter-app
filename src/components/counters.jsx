import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

class counters extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default counters;
