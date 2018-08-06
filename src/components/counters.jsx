import React, { Component } from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-md m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }

  handleIncrement = counter => {
    console.log(counter);
    const counters = this.state.counters.reduce((accum, c) => {
      if (counter.id === c.id) {
        counter.value += 1;
      }
      return accum.concat(c);
    }, []);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(i => i.id !== id);
    this.setState({ counters });
  };
}

export default counters;
