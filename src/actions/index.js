import axios from 'axios';

const API_KEY = 'edab3563100a287807a81ad7e3b73d78';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// By convention, use constants to hold action type
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action Creator
export function fetchWeather(city) {
  // Add query for specific city & country
  const url = `${ROOT_URL}&q=${city},us`;
  // Make 'Ajax' call using axios (it returns a promise)
  const request = axios.get(url);

  console.log("Request:", request);

  // Return an action
  // (an object that has a type)
  return {
    type: FETCH_WEATHER,
    payload: request
    // note!! redux-promise intercepts the request in the payload,
    // waits until the promise resolves, then returns the response as the payload
  };
}
