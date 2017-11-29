import React from 'react';
import Wallet from './wallet';

class SuggestedWallet extends React.Component {

    render() {
        return (
            <section>
                <div className="columns">
                    <div className="column">
                        <div className="content">
                        <Wallet/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <h4 className="subtitle is-4">Your Bugget</h4>
                            <progress className="progress is-success" value="60" max="100">60%</progress>
                        </div>
                        <div className="content">
                            <h4 className="subtitle is-4">Risk Tolerance</h4>
                            <progress className="progress is-warning" value="60" max="100">60%</progress>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SuggestedWallet;