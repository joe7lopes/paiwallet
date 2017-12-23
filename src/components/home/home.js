import React from 'react';
import HomeTopSection from './homeTopSection';
import ServicesDescription from './ServicesDescription';
import TopStocksPerformance from '../topStocksPerformance';
import WalletPicker from './walletPicker';
import Footer from './footer';

class Home extends React.Component {


    handleOnWalletPickerClick(){
        this.refs.walletPicker.scrollIntoView({behavior: "smooth"});
    }

    handleOnTopStocksClick(){
        this.refs.topstocks.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <div>
                <HomeTopSection {...this.props} onClick={this.handleOnWalletPickerClick.bind(this)}/>
                <section className= "container" ref="topstocks">
                <div >
                    <TopStocksPerformance/>
                </div>
                </section>
                <Footer {...this.props} onTopStocksClick={this.handleOnTopStocksClick.bind(this)}/>
            </div>
        );
    }
}

export default Home;