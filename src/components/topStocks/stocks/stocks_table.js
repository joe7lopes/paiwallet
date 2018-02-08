import React from 'react';


let renderStocks = (stocks, onRemove) => {
    const isAuthenticated = true;
   return stocks.map(stock =>{
        return (
            <tr key={stock.id}>
                <td>{stock.name}</td>
                <td>{stock.comment}</td>
                {isAuthenticated ? 
                <td>
                    <button 
                        className="btn-floating btn-small waves-effect waves-light blue"
                        onClick={() => {onRemove(stock)}}>
                        <i className="material-icons">remove</i>
                    </button>
                </td>
                : null}
            </tr>
        );
    });
}

let StocksTable = props =>{
    const stocks = props.stocks;
    const isAuthenticated = true;
    const onRemove = props.onRemove;
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Stock</th>
                    <th>Comment</th>
                    {isAuthenticated ?  <th>Operation</th>: null}
                </tr>
                </thead>
                <tbody>
                    {renderStocks(stocks,onRemove)}
                </tbody>
            </table>
        </div>
    );
}

export default StocksTable;