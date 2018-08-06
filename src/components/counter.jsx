// imcc - shortcut for below
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
  // state is a special property that includes any data that this component needs
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 20, // react will convert to 10px
    fontWeight: "bold"
  };

  render() {
    const classes = this.getBadgeClasses();

    return (
      // use React.Fragment if you dont want to show a wrapping div
      <React.Fragment>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.state.tags.map(i => <li key={i}>{i}</li>)}</ul>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count ? count : "Zero";
  }

  getBadgeClasses() {
    return this.state.count
      ? "badge badge-primary m-2"
      : "badge badge-warning m-2";
  }
}

export default Counter;
