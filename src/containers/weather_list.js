import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData);
    const name = cityData.city.name;
    
    // Map temperature values inside an array
    const temps = cityData.list.map(weather => weather.main.temp);
    // Map humidity to an array of values
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // Map pressure values
    const pressures = cityData.list.map(weather => weather.main.pressure);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color={"red"} />
        </td>
        <td>
          <Chart data={pressures} color={"green"} />
        </td>
        <td>
          <Chart data={humidities} color={"blue"} />
        </td>
      </tr>
    );
  }

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
          {this.props.weather.map(this.renderWeather)}
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
