import {SET_LOADER_VISIBILITY} from '../actions/types';

const initialState = {
  isLoaderVisible: false,
};

const popupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER_VISIBILITY:
      return {
        ...state,
        isLoaderVisible: action.payload,
      };
    default:
      return state;
  }
};

export default popupsReducer;
