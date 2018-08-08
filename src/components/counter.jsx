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
    console.log("Counter - Rendered");
    const { onIncrement, onDelete } = this.props;
    return (
      // use React.Fragment if you dont want to show a wrapping div
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatvalue()}
        </span>
        <button
          onClick={() => onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // is invoked immediately after updating occurs. This method is not called for the initial render. Good for comparing old props with new props
    /*
    console.log("Prev Props", prevProps);
    console.log("Prev State", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // good place to make an ajax call
      console.log("previous counter differs from the current");
    }
    */
  }

  componentWillUnmount() {
    // is invoked immediately before a component is unmounted and destroyed.
    // when we delete a counter, our entire component tree is rerendered. Before the counter is officially removed from the dom, react will fire this componentWillUnmount method
    console.log("Counter - Unmount");
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
