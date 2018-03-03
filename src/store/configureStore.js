import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import promisse from 'redux-promise-middleware';

import postsReducer from '../reducers/posts_reducer';
import stocksReducer from '../reducers/stocks_reducer';
import usersReducer from '../reducers/users_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store =  createStore(
        combineReducers({
            posts: postsReducer,
            stocks: stocksReducer,
            users: usersReducer,
            form: formReducer
        }),
        composeEnhancers(applyMiddleware(promisse(), reduxThunk, logger))
    );
    
    return store;
};