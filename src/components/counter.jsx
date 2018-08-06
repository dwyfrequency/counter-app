// imcc - shortcut for below
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
  /* Can use this method for binding this or arrow functions
  constructor(props) {
    super(props);
    // bind method - returns a new instance of the handleIncrement function where this is always referencing the counter obj
    this.handleIncrement = this.handleIncrement.bind(this);
  }

   handleIncrement() {
    console.log(this.state.count + 1);
  }

  */

  // state is a special property that includes any data that this component needs
  state = {
    count: 0,
    tags: []
  };

  styles = {
    fontSize: 20, // react will convert to 10px
    fontWeight: "bold"
  };

  render() {
    console.log(this.props);
    return (
      // use React.Fragment if you dont want to show a wrapping div
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>{this.renderTags()}</ul> */}
      </div>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: ++this.state.count });
  };

  renderTags() {
    if (this.state.tags.length) {
      return this.state.tags.map(i => <li key={i}>{i}</li>);
    }
    return <p>There are no tags</p>;
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
