import React, { Component } from 'react';
// Needed to make a container component (connect react to redux)
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Action creator
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // Initialize the component state
    this.state = {
      term: ''
    };

    // Bind the correct context for the *this* keyword
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);

    // clear the input field
    this.setState({ term: '' });
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

function mapDispatchToProps(dispatch) {
  // fetchWeather will be available as prop inside SearchBar component
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Use null for first argument because this container doesn't
// care about application state
export default connect(null, mapDispatchToProps)(SearchBar);
