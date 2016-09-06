import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="text-xs-center">
          <h1>{"What's up, weather?"}</h1>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
