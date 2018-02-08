import React from 'react';
import { connect } from 'react-redux';
import { startFetchStocks, startRemoveStockAdvise } from '../../../actions/stocks_action';
import StocksTable from './stocks_table';

class Stocks extends React.Component {

    componentWillMount(){
        this.props.startFetchStocks();
    }

    handleRemoveSockAdive = (stockAdvise) => {
        this.props.startRemoveStockAdvise(stockAdvise);
    }

    rendeBuyStocks() {
        const { buyStocks } = this.props;
        return (
            <StocksTable stocks={buyStocks} onRemove={this.handleRemoveSockAdive}/>
        );
    }

    rendeSellStocks() {
        const { sellStocks } = this.props;
        return (
            <StocksTable stocks={sellStocks} onRemove={this.handleRemoveSockAdive}/>
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

const mapDispatchToProps = (dispatch) => ({
    startRemoveStockAdvise: (stockAdvise) => {dispatch(startRemoveStockAdvise(stockAdvise))},
    startFetchStocks: () => {dispatch(startFetchStocks())}
});

function mapStateToProps(state) {
    return {
        buyStocks: state.stocks.buyStocks,
        sellStocks: state.stocks.sellStocks
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Stocks);