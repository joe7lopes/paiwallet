import {FETCH_MARKET_SATUS, FETCH_STOCK_VARIATION} from '../actions/types';
const INITIAL_STATE = {marketStatus: "-", variation:{}};

export default function(state = INITIAL_STATE, action){
    
    switch(action.type){
        case FETCH_MARKET_SATUS:
            return {...state, marketStatus: action.payload};
        case FETCH_STOCK_VARIATION:
            return {...state, variation: action.payload}
        default:
            return state;
    }
}