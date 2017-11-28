import {combineReducers} from 'redux';
import {reducer as from} from 'redux-form';
import authReducer from './auth_reducer';
import marketReducer from './market_reducer';

const rootReducer = combineReducers({
    marketInfo: marketReducer
});

export default rootReducer;