import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  /* If you need to use props from a parent and you are defining a constructor, you must pass it in to the constructor and pass it to the super func
  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }
  */

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount = () => {
    // Ajax Call
    console.log;
  };

  handleIncrement = counter => {
    const cnt = { ...counter };
    const counters = this.state.counters.reduce((accum, c) => {
      if (cnt.id === c.id) {
        cnt.value += 1;
        return accum.concat(cnt);
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

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
