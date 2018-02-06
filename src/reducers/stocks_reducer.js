import { 
    FETCH_STOCKS,
    ADD_STOCK_ADVISE
} from '../actions/types';

const INITIAL_STATE = {buyStocks: [], sellStocks:[]};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case FETCH_STOCKS :
            if (action.payload){
                const buyStocksData = action.payload.buy || [];
            const sellStocksData = action.payload.sell || [];
            const buyStocks = getAsStocksArray(buyStocksData);
            const sellStocks = getAsStocksArray(sellStocksData);
            return {buyStocks: state.buyStocks.concat(buyStocks), sellStocks:state.sellStocks.concat(sellStocks) };    
            }
            return state;
        case ADD_STOCK_ADVISE:
            console.log(action.payload);
            const stockAdvise = action.payload;
            if(stockAdvise === 'buy'){
                return {...state, buyStocks: buyStocks.concat(stockAdvise)}
            }else if(stockAdvise === 'sell'){
                return {...state, buyStocks: sellStocks.concat(stockAdvise)}
            }else{
                return state;
            }
        default:
            return state;
    }
}

const getAsStocksArray = (input) => {
    const result = [];
    Object.entries(input).forEach(([key, value]) => {
        result.push({
            id: key,
            ...value
        });
      });

    return result;
}