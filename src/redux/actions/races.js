import { ADD_RACE } from './types';

export const addRace = Races => {
  return {
    type: ADD_RACE,
    payload: Races
  }
}