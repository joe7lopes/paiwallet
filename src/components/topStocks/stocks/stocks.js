import React from 'react';
import {connect} from 'react-redux';
import { startFetchStocks } from '../../../actions/stocks_action';
import StocksTable from './stocks_table';

class Stocks extends React.Component {

    componentWillMount(){
        this.props.startFetchStocks();
    }

    rendeBuyStocks() {
        const { buyStocks } = this.props;
        return (
            <StocksTable stocks={buyStocks}/>
        );
    }

    rendeSellStocks() {
        const { sellStocks } = this.props;
        return (
            <StocksTable stocks={sellStocks}/>
        );
    }

    render(){
        return(
            <div>
                <div className="pai-container green lighten-1" style={{marginBottom: "20px"}}>
                    <h4>BUY</h4>
                    {this.rendeBuyStocks()}
                </div>
                <div className="pai-container red lighten-1">
                    <h4>Sell</h4>
                    {this.rendeSellStocks()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        buyStocks: state.stocks.buyStocks,
        sellStocks: state.stocks.sellStocks
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     startFetchStocks: 
// });

export default connect(mapStateToProps,{startFetchStocks})(Stocks);