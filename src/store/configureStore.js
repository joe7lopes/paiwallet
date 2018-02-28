import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import { EDIT_USER } from '../actions/types';
import { login } from '../actions/users_action';
import postsReducer from '../reducers/posts_reducer';
import stocksReducer from '../reducers/stocks_reducer';
import usersReducer from '../reducers/users_reducer';


const updateUserMiddleware = store => next => action => {
    if(action.type === EDIT_USER){
        const { loggedInUser } = store.getState().users;
        const { user , updates } = action.payload;
        if( loggedInUser.uid === user.uid){
            const userUpdated = {
                ...user,
                ...updates
            }
            store.dispatch(login(userUpdated));
        }
    }
    next(action);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store =  createStore(
        combineReducers({
            posts: postsReducer,
            stocks: stocksReducer,
            users: usersReducer,
            form: formReducer
        }),
        composeEnhancers(applyMiddleware(updateUserMiddleware, reduxThunk, logger))
    );
    
    return store;
};