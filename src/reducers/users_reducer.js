import {
    FETCH_USERS,
    EDIT_USER,
    LOGIN,
    LOGOUT
  } from '../actions/types';
  
  const INITIAL_STATE = {loggedInUser:undefined , users: []};
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_USERS:
        return {...state, users: action.payload};
      case EDIT_USER:
        let userUpdated = { ...state.loggedInUser };
        if (userUpdated.uid === action.payload.uid){
            userUpdated = {
              ...state.loggedInUser,
              ...action.payload.updates
            };
        }

        let updatedUsers = state.users.map(user => {
                                  if(user.uid === action.payload.uid) {
                                    return { ...user, ...action.payload.updates };
                                  } else {
                                    return user;
                                  };
                              });

      return { loggedInUser: userUpdated, users: updatedUsers}
    case LOGIN:
      return { ...state, loggedInUser: action.payload };
    case LOGOUT:
      return { ...state, loggedInUser: INITIAL_STATE.loggedInUser };
    default:
      return state;
  }

  };