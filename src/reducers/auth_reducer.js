import { LOGIN, LOGOUT } from '../actions/types';

const INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};


