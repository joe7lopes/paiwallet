import React from 'react';
import StocksTable from './stocks_table';
import Messages from './messages';

class TopStocks extends React.Component{

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m8">
                        <h4>Messages</h4>
                            {/* TODO add admin message */}
                            <Messages/>
                    </div>
                        <div className="col s12 m4">
                            <div className="pai-container green lighten-1">
                                <h4>BUY</h4>
                                <StocksTable/>
                            </div>
                            <div className="pai-container red lighten-1">
                                <h4>Sell</h4>
                                <StocksTable/>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default TopStocks;