import database from '../firebase/firebase';
import { 
    FETCH_STOCKS,
    ADD_STOCK_ADVISE
} from './types';

const NODE = "stocks";
const BUY_STOCKS_NODE = NODE + "/buy";
const SELL_STOCKS_NODE = NODE + "/sell";

export function fetchStocks(){
    return (dispatch) => {
        database.ref(NODE).once('value')
            .then(stocks => {
                let buyStocks = [];
                stocks.buyStocks.forEach(stock => {
                    buyStocks.push({
                        id: stock.key,
                        ...stock.val()
                    });
                });

                dispatch({
                    type: FETCH_STOCKS,
                    payload: {buyStocks, sellStocks: []}
                });
            }).catch(error =>{
                dispatch({
                    type: FETCH_STOCKS,
                    payload: {buyStocks: [], sellStocks: []}
                });
            });
    };
}

export function addStockAdvise(stockAdvise = {}){
   return (dispatch) => {
       console.log(dispaching);
       dispatch({
        type: ADD_STOCK_ADVISE,
        payload: []
       });
   }
    // return (dispatch) => {
    //     let stock = {
    //         name: "reditus",
    //         comment: "bl hh"
    //     }

    //     console.log(database);
    //     database.ref('stocks/buy').push(stock).then(ref => {
    //         dispatch({
    //             type: ADD_STOCK_ADVISE,
    //             payload: {}
    //         });
    //     });
    // };
};
