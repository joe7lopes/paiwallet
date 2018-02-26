import React from 'react';


let renderStocks = (stocks) => {
   return stocks.map(stock =>{
        return (
            <tr key={stock.id}>
                <td>{stock.name}</td>
                <td>{stock.comment}</td>
            </tr>
        );
    });
}

let StocksTable = props =>{
    const stocks = props.stocks;
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Stock</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                    {renderStocks(stocks)}
                </tbody>
            </table>
        </div>
    );
}

export default StocksTable;