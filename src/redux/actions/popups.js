import { SET_LOADER_VISIBILITY } from './types';

export const setLoaderVisibility = flag => {
  return {
    type: SET_LOADER_VISIBILITY,
    payload: flag
  }
}