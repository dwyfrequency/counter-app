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

  */

  // state is a special property that includes any data that this component needs
  state = {
    value: this.props.value,
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
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatvalue()}
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
    this.setState({ value: ++this.state.value });
  };

  renderTags() {
    if (this.state.tags.length) {
      return this.state.tags.map(i => <li key={i}>{i}</li>);
    }
    return <p>There are no tags</p>;
  }

  formatvalue() {
    const { value } = this.state;
    return value ? value : "Zero";
  }

  getBadgeClasses() {
    return this.state.value
      ? "badge badge-primary m-2"
      : "badge badge-warning m-2";
  }
}

export default counter;
