import React from 'react';
import {connect} from 'react-redux';
import { fetchMarketStatus } from '../actions';

class TopStocksPerformance extends React.Component {

    componentDidMount(){
        this.props.fetchMarketStatus();
    }

    renderMarketDateAndStatus(){
        let months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date = new Date();
        let monthNumber = date.getMonth();
        let day = date.getDay()
        let month = months[monthNumber];
        let marketStatus = this.props.marketStatus;
        let marketDateAndStatus = `${month} ${day} - ${marketStatus}`;
        return <h2 className="subtitle">{marketDateAndStatus}</h2>
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    {this.renderMarketDateAndStatus()}
                    <div className="tile is-ancestor">
                        <div className="tile is-4 is-vertical is-parent">
                            <div className="tile is-child box">
                                <p className="title">PSI20 +1%</p>
                            </div>
                            <div className="tile is-child box">
                                <p className="title">TOP STOCKS +20%</p>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">GRAPH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {
        marketStatus: state.marketStatus
    }
}

export default connect(mapStateToProps,{fetchMarketStatus})(TopStocksPerformance);