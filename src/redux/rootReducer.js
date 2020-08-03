import {combineReducers} from 'redux';

import racesReducer from './reducers/racesReducer';

export default combineReducers({
	races: racesReducer
});