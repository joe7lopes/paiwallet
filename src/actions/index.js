import axios from 'axios';
import {
    FETCH_MARKET_SATUS,
    FETCH_STOCK_VARIATION
} from './types';

export function fetchMarketStatus() {
    //need to find a free API to get this data
    let marketStatus = getMarketStatus();

    return {
        type: FETCH_MARKET_SATUS,
        payload: marketStatus
    }
};

export function fetchStockVariation() {
    let stocksVariation = {
        psi20: "-1",
        topStocks: "3"
    }
    return {
        type: FETCH_STOCK_VARIATION,
        payload: stocksVariation
    }
}

const AUTH_URL = 'http://localhost:3000';
export function signinUser({user, password}){
    return function(dispatch){
        axios.post(`${AUTH_URL}/signin`,{ email, password });
    }
}

function getMarketStatus() {
    let today = new Date();

    let openingTime = new Date();
    openingTime.setHours(8);
    openingTime.setMinutes(0);

    let closingTime = new Date();
    closingTime.setHours(16);
    closingTime.setMinutes(30);

    let isMarketOpen = today >= openingTime && today < closingTime;
    let marketStatus = isMarketOpen ?
        'OPEN' :
        'CLOSED';
    return marketStatus;
}