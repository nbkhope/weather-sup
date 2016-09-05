import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  // if argument is ({weather}), use:
  //return { weather };
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
