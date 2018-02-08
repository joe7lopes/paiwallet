import { 
    FETCH_STOCKS,
    ADD_STOCK_ADVISE,
    REMOVE_STOCK_ADVISE
} from '../actions/types';

const INITIAL_STATE = {buyStocks: [], sellStocks:[]};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case FETCH_STOCKS :{
                const buyStocks = action.payload.filter(stock =>{
                    return stock.adviseType == "buy";
                });
                const sellStocks = action.payload.filter(stock =>{
                    return stock.adviseType == "sell";
                });

            return {buyStocks, sellStocks};
            
        }
        case ADD_STOCK_ADVISE :{
            const stockAdvise = action.payload;
            const {adviseType} = stockAdvise;
            if(adviseType == 'buy'){
                return {...state, buyStocks: state.buyStocks.concat(stockAdvise)}
            }else if(adviseType == 'sell'){
                return {...state, buyStocks: state.sellStocks.concat(stockAdvise)}
            }else{
                return state;
            }
        }
        case REMOVE_STOCK_ADVISE :{
            const stockAdvise = action.payload;
            const {adviseType} = stockAdvise;
            if(adviseType == 'buy'){
                let buyStocks = removeStockAdvise(stockAdvise,state.buyStocks);
                return {...state, buyStocks}
            }else if(adviseType == 'sell'){
                let sellStocks = removeStockAdvise(stockAdvise,state.sellStocks);
                return {...state, sellStocks}
            }else{
                return state;
            }
        }
        default:
            return state;
    }
}

const removeStockAdvise = (stockAdvise, array) => {
    return array.filter(stock => {
       return stock.id !== stockAdvise.id;
    });
}
