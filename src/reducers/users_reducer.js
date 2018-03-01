import {
    FETCH_USERS,
    EDIT_USER_PEDDING,
    EDIT_USER_ERROR,
    EDIT_USER_COMPLETED,
    LOGIN,
    LOGOUT
  } from '../actions/types';
  
  const INITIAL_STATE = {
    loggedInUser:undefined,
    users: [],
    isSaving: false,
    editingUserError: undefined
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_USERS:
        return {...state, users: action.payload};
      case EDIT_USER_COMPLETED:
        // let userUpdated = { ...state.loggedInUser };
        // if (userUpdated.uid === action.payload.uid){
        //     userUpdated = {
        //       ...state.loggedInUser,
        //       ...action.payload.updates
        //     };
        // }

        // let updatedUsers = state.users.map(user => {
        //                           if(user.uid === action.payload.uid) {
        //                             return { ...user, ...action.payload.updates };
        //                           } else {
        //                             return user;
        //                           };
        //                       });
      return {...state, isSaving:false, editingUserError:undefined};
    case EDIT_USER_PEDDING:
      return {...state, isSaving: true, editingUserError:undefined};
    case EDIT_USER_ERROR:
      return {...state, isSaving:false, editingUserError: action.payload}
    case LOGIN:
      return { ...state, loggedInUser: action.payload };
    case LOGOUT:
      return { ...state, loggedInUser: INITIAL_STATE.loggedInUser };
    default:
      return state;
  }

  };