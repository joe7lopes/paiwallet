import { 
    FETCH_POSTS,
    ADD_POST
} from '../actions/types';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case FETCH_POSTS :
            return  action.payload;
        case ADD_POST :
            return state.concat(action.payload);
        default:
            return state;
    }
}