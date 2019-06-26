import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  backups: [],
};

const backups = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case actionTypes.BACKUPS_FETCH_COMPLETE:
    return { ...state, backups: action.payload };
  default:
    return state;
  }
};

export default backups;
