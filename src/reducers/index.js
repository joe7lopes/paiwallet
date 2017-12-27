import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import marketReducer from './market_reducer';

const rootReducer = combineReducers({
    marketInfo: marketReducer,
    form: formReducer
});

export default rootReducer;