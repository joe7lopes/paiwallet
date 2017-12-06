import React from 'react';
import Wallet from '../wallet';

class WalletPicker extends React.Component {

    render() {
        return (
                <div className="row">

                    <div className="col s12 m6">
                        <div className="row">
                            <div className="col s12 m4">
                                <Wallet/>
                            </div>
                            <div className="col s12 m4">
                                <Wallet/>
                            </div>
                            <div className="col s12 m4">
                                <Wallet/>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6">

                        <form action="#">
                            <h4>Risk tolerance</h4>
                            <p className="range-field">
                                <input type="range" id="riskTolerance" min="0" max="100"/>
                            </p>
                            <h4>Investment Amount</h4>
                            <p className="range-field">
                                <input type="range" id="riskTolerance" min="0" max="100"/>
                            </p>
                        </form>

                    </div>
                    
                </div>
        );
    }
}

export default WalletPicker;