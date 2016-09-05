import React, { Component } from 'react';

export default
class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Initialize the component state
    this.state = {
      term: ''
    };

    // Bind the correct context for the *this* keyword
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}
      >
        <input
          placeholder="Check the five-day forecast for a city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Check</button>
        </span>
      </form>
    );
  }
}
