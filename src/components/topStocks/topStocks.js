import React from 'react';
import StocksTable from './stocks_table';
import PostsList from './posts_list';

class TopStocks extends React.Component{

    render(){
        return (
            <div className="container">
                    <h4>Messages</h4>
                    <div className="row pai-container blue lighten-5">
                        <div className="col s12 l7">
                            <PostsList/>
                        </div>
                        <div className="col s12 l5" style={{top: "15px", position: "relative"}}>
                            <div className="pai-container green lighten-1" style={{marginBottom: "20px"}}>
                                <h4>BUY</h4>
                                <StocksTable/>
                            </div>
                            <div className="pai-container red lighten-1" style={{marginBottom: "20px"}}>
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