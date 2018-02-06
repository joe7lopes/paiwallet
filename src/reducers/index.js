import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import postsReducer from './posts_reducer';
import stocksReducer from './stocks_reducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    stocks: stocksReducer,
    form: formReducer
});

export default rootReducer;