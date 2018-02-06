import database from '../firebase/firebase';
import { 
    FETCH_STOCKS,
    ADD_STOCK_ADVISE,
    FETCH_POSTS
} from './types';

const NODE = "stocks";
const BUY_STOCKS_NODE = NODE + "/buy";
const SELL_STOCKS_NODE = NODE + "/sell";

export const fetchStocks = (stocks = []) => {
   return {
       type: FETCH_STOCKS,
       payload: stocks
   }
};

export const startFetchStocks = () => {
    return (dispatch) => {
        return database.ref('stocks').once('value').then((snapshot) => {
            dispatch(fetchStocks(snapshot.val()));
        });
    };
}

export const addStockAdvise = (stockAdvise) => {
    return {
        type: ADD_STOCK_ADVISE,
        payload: stockAdvise
    }
 };

 export const startAddStockAdvise = (stockAdviseData = {}) => {
     return (dispatch) => {
        const node = stockAdviseData.adviseType == 'buy' ? BUY_STOCKS_NODE : SELL_STOCKS_NODE;
        const {
            name = '',
            comment = '',
            adviseType = ''
        } = stockAdviseData;
        const stockAdvise = {name, comment};

        return database.ref(node).push(stockAdvise).then((ref) => {
            dispatch(addStockAdvise({
                id: ref.key,
                adviseType, 
                ...stockAdvise
            }));
        });
     };
 };
