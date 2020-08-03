import { ADD_RACE } from '../actions/types';

const initialState = {
  placeName: '',
  races: []
};

const racesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_RACE:
      return {
        ...state,
        races: state.races.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
}

export default racesReducer;