import { 
    FETCH_STOCKS,
    ADD_STOCK_ADVISE
} from '../actions/types';

const INITIAL_STATE = {buyStocks: [], sellStocks:[]};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case FETCH_STOCKS :
            const buyStocks = action.payload.buyStocks;
            const sellStocks = action.payload.sellStocks;
            // return {...state, buyStocks: buyStocks, sellStocks: sellStocks };
            return action.payload;
        case ADD_STOCK_ADVISE: 
            console.log("in reducer", action.payload);
            return {...state};
        default:
            return state;
    }
}