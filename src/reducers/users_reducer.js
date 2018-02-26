import {
    FETCH_USERS,
    EDIT_USER
  } from '../actions/types';
  
  const INITIAL_STATE = [];
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_USERS:
        return action.payload;
      case EDIT_USER:
        return state.map(user =>{
          if(user.uid === action.payload.uid) {
            return {
              ...user,
              ...action.payload.updates
            };
          }else{
            return user;
          };
        });
      default:
        return state;
    }
  }