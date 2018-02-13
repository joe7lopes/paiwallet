import { LOGIN, LOGOUT } from '../actions/types';

export default (state = {}, action) =>{

    switch(action.type){
        case LOGIN:
            return {
                user: action.payload
            }
        case LOGOUT:
            return {};
        default:
            return state;
    }
};