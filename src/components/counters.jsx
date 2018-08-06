import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counters.map(i => (
          <Counter key={i.id} value={i.value} selected={true} />
        ))}
      </div>
    );
  }
}

export default counters;
