import {combineReducers} from 'redux';

import popupsReducer from './reducers/popupsReducer';

export default combineReducers({
	popups: popupsReducer
});