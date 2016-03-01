import * as types from '../constants/ActionTypes';

export function mainEvent(stuff) {
  return {
    type: types.MAIN_EVENT,
    stuff
  };
}