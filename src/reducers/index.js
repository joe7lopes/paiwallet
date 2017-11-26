import {combineReducers} from 'redux';
import {reducer as from} from 'redux-form';
import authReducer from './auth_reducer';
const rootReducer = combineReducers({
    from
});

export default rootReducer;