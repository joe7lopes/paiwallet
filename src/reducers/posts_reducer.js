import { 
    FETCH_POSTS,
    SET_CURRENT_PAGE,
    ADD_POST
} from '../actions/types';

const INITIAL_STATE = {posts: [], currentPage: 1};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case FETCH_POSTS :
            return {...state, posts: action.payload};
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.payload};
        case ADD_POST :
            return {...state, posts: state.posts.concat(action.payload)};
        default:
            return state;
    }
}