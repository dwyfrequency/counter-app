import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

class counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-md m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default counters;
