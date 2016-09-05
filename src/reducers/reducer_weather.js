import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Action received', action);
  // each element in the state [] will hold a city

  switch (action.type) {
    case FETCH_WEATHER:
      // you cannot mutate the state, so use concat
      return state.concat([ action.payload.data ]);
      // equivalent, using spread operator:
      //return [ action.payload.data, ...state ];
      break;
  }

  return state;
}
