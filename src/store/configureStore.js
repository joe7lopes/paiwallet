import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import reduxThunk from 'redux-thunk';
import postsReducer from '../reducers/posts_reducer';
import stocksReducer from '../reducers/stocks_reducer';
import authReducer from '../reducers/auth_reducer';

export default () => {
    const store =  createStore(
        combineReducers({
            posts: postsReducer,
            stocks: stocksReducer,
            auth: authReducer,
            form: formReducer
        }),
        applyMiddleware(reduxThunk)
    );
    
    return store;
};