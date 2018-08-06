// imcc - shortcut for below
import React, { Component } from "react";
import ReactDOM from "react-dom";

class counter extends Component {
  /* Can use this method for binding this or arrow functions
  constructor(props) {
    super(props);
    // bind method - returns a new instance of the handleIncrement function where this is always referencing the valueer obj
    this.handleIncrement = this.handleIncrement.bind(this);
  }

   handleIncrement() {
    console.log(this.state.value + 1);
  }


  // state is a special property that includes any data that this component needs
  state = {
    value: this.props.counter.value,
    tags: []
  };

  */

  styles = {
    fontSize: 20, // react will convert to 10px
    fontWeight: "bold"
  };

  render() {
    return (
      // use React.Fragment if you dont want to show a wrapping div
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatvalue()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value ? value : "Zero";
  }

  getBadgeClasses() {
    return this.props.counter.value
      ? "badge badge-primary m-2"
      : "badge badge-warning m-2";
  }
}

export default counter;
