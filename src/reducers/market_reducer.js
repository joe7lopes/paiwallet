import {FETCH_MARKET_SATUS} from '../actions/types';

export default function(state = "-", action){
    
    switch(action.type){
        case FETCH_MARKET_SATUS:
            return action.payload;
        default:
            return state;
    }
}