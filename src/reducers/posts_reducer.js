import { FETCH_POSTS, SET_CURRENT_PAGE } from '../actions/types';

const INITIAL_STATE = {posts: [], currentPage: 1};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case FETCH_POSTS :
            return {...state, posts: action.payload};
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.payload};
        default:
            return state;
    }
}