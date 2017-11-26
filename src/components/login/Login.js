import React from 'react';
import WalletPerformance from './WalletPerformance';
import CreateAccount from './CreateAccount';

class Login extends React.Component {

    render() {
        return (
            <section className="section">
                <div className="columns">
                    <div className="column is-half">
                        <WalletPerformance/>
                    </div>
                    <div className="column is-half">
                        <CreateAccount/>
                    </div>
                </div>  
            </section>
        );
    }
}

export default Login;