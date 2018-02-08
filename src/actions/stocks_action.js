import database from '../firebase/firebase';
import { 
    FETCH_STOCKS,
    ADD_STOCK_ADVISE,
    REMOVE_STOCK_ADVISE
} from './types';

const DATA_REF = "stocks";

export const fetchStocks = (stocks = []) => {
   return {
       type: FETCH_STOCKS,
       payload: stocks
   }
};

export const addStockAdvise = (stockAdvise) => {
    return {
        type: ADD_STOCK_ADVISE,
        payload: stockAdvise
    }
 };

 export const removeStockAdvise = (stockAdvise = {}) => {
     return {
         type: REMOVE_STOCK_ADVISE,
         payload: stockAdvise
     }
 }

 export const startFetchStocks = () => {
    return (dispatch) => {
        return database.ref(DATA_REF).once('value').then((snapshot) => {
            const stocksAdvise = [];
            snapshot.forEach((childSnapshot) => {
                stocksAdvise.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(fetchStocks(stocksAdvise));
        });
    };
}

 export const startAddStockAdvise = (stockAdviseData = {}) => {
     return (dispatch) => {
        const {
            name = '',
            comment = '',
            adviseType = ''
        } = stockAdviseData;
        const stockAdvise = {name, comment, adviseType};
        
        return database.ref(DATA_REF).push(stockAdvise).then((ref) => {
            dispatch(addStockAdvise({
                id: ref.key,
                ...stockAdvise
            }));
        });
     };
 };

 export const startRemoveStockAdvise = (stockAdvise = {}) => {
     const {id} = stockAdvise;
    return (dispatch) => {
      return database.ref(`${DATA_REF}/${id}`).remove().then(() => {
        dispatch(removeStockAdvise(stockAdvise));
      });
    };
  };
