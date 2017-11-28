
import {
    FETCH_MARKET_SATUS
} from './types';

export function fetchMarketStatus(){
    //need to find a free API to get this data
    let marketStatus = getMarketStatus();

    return {
        type: FETCH_MARKET_SATUS,
        payload: marketStatus
    }
};

function getMarketStatus(){
    let today = new Date();
    
   let openingTime = new Date();
   openingTime.setHours(8);
   openingTime.setMinutes(0);
   
   let closingTime = new Date();
   closingTime.setHours(16);
   closingTime.setMinutes(30);

   let isMarketOpen = today >= openingTime && today < closingTime;
   let marketStatus = isMarketOpen ? 'OPEN' : 'CLOSED';
   return marketStatus;
}