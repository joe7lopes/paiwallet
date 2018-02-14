import { LOGIN, LOGOUT, LOGIN_ERROR, CLEAR_LOGIN_ERROR } from '../actions/types';

export default (state = {}, action) =>{

    switch(action.type){
        case LOGIN:
            return {
                user: action.payload
            }
        case LOGOUT:
            return {};
        case LOGIN_ERROR:
            return {
                errors: action.payload
            }
        case CLEAR_LOGIN_ERROR:
        console.log("in reducer");
            return{
                ...state,
                errors:{}
            }
        default:
            return state;
    }
};