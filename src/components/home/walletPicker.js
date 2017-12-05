import React from 'react';
import Wallet from '../wallet';

class WalletPicker extends React.Component {

    render() {
        return (
            <section className="section">
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
                    
                    
                    </div>
                </div>
            </section>
        );
    }
}

export default WalletPicker;