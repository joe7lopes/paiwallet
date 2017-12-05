import React from 'react';
import HomeTopSection from './homeTopSection';
import ServicesDescription from './ServicesDescription';
import TopStocksPerformance from '../topStocksPerformance';
import WalletPicker from './walletPicker';

class Home extends React.Component {

    render() {
        return (
            <div>
                <HomeTopSection/>
                <TopStocksPerformance/>
                <ServicesDescription/>
                <WalletPicker/>
            </div>
        );
    }
}

export default Home;