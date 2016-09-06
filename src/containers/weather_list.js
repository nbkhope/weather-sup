import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData);
    const name = cityData.city.name;

    // Map temperature values inside an array
    // and convert it to Celsius degrees
    const temps = _.map(
      cityData.list.map(weather => weather.main.temp),
      // Tc = Tk - 273.16
      (temperature) => temperature - 273.16
    );
    // Map humidity to an array of values
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // Map pressure values
    const pressures = cityData.list.map(weather => weather.main.pressure);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color={"red"} units="°C" />
        </td>
        <td>
          <Chart data={pressures} color={"green"} units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color={"blue"} units="%" />
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
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
