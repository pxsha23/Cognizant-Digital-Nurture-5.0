import React, { Component } from 'react';

// Increment button invokes multiple methods: increment the value AND say hello
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, message: '' };
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
  }

  incrementValue() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  sayHello() {
    this.setState({ message: 'Hello! The counter was incremented.' });
  }

  // Invokes both incrementValue() and sayHello()
  handleIncrementClick() {
    this.incrementValue();
    this.sayHello();
  }

  handleDecrementClick() {
    this.setState((prevState) => ({ count: prevState.count - 1, message: '' }));
  }

  render() {
    return (
      <div className="counter-section">
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
        {this.state.message && <p className="message">{this.state.message}</p>}
      </div>
    );
  }
}

export default Counter;
