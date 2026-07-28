import React, { Component } from 'react';

// Converts Indian Rupees to Euro when the Convert button is clicked
class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = { rupees: '', euros: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  // Handles the Click event of the button, invokes handleSubmit
  handleSubmit(event) {
    event.preventDefault();
    const conversionRate = 0.011; // approximate INR to EUR rate
    const euros = (Number(this.state.rupees) * conversionRate).toFixed(2);
    this.setState({ euros });
  }

  render() {
    return (
      <div className="currency-convertor-section">
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Indian Rupees:
            <input
              type="number"
              value={this.state.rupees}
              onChange={this.handleChange}
              placeholder="Enter amount in INR"
            />
          </label>
          <button type="submit">Convert</button>
        </form>
        {this.state.euros !== null && (
          <p className="result">
            {this.state.rupees} INR = &euro;{this.state.euros}
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
