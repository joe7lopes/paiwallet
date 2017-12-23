import React from 'react';
import {connect} from 'react-redux';
import {fetchMarketStatus, fetchStockVariation} from '../actions';

class TopStocksPerformance extends React.Component {

    componentDidMount() {
        this.props.fetchMarketStatus();
        this.props.fetchStockVariation();
    }

    renderMarketDateAndStatus() {
        const month = this.getMonth()
        const day = new Date().getDate()
        const marketStatus = this.props.marketStatus;
        const marketDateAndStatus = `${month} ${day} - ${marketStatus}`;
        return <h2 className="subtitle">{marketDateAndStatus}</h2>
    }

    renderPSI20() {
        let variation = this.props.variation.psi20;
        return this.renderStock("PSI20", variation);
    }

    renderTopStocks(){
        let variation = this.props.variation.topStocks;
        return this.renderStock("TOP STOCKS",variation);
    }

    renderStock(text, variation){
        var color = "";
        if(variation > 0){
            color = "green";
            variation = "+" + variation;
        }else if(variation == 0){
            color = "gray"
        }else{
            color = "red";
        }
        return (
            <div className="tile is-child box">
                <p className="title">{text} <font color={color}>{variation}%</font></p>
            </div>
        )
    }

    getMonth() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "April",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];
        const date = new Date();
        const monthNumber = date.getMonth();
        return months[monthNumber];
    }

    render() {
        return (
            <section className="section">
                    {this.renderMarketDateAndStatus()}
                    <div className="tile is-ancestor">
                        <div className="tile is-4 is-vertical is-parent">
                            {this.renderPSI20()}
                            {this.renderTopStocks()}
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">GRAPH</p>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        marketStatus: state.marketInfo.marketStatus,
        variation: state.marketInfo.variation
    }
}

export default connect(mapStateToProps, {fetchMarketStatus, fetchStockVariation})(TopStocksPerformance);