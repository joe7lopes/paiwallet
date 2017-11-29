import React from 'react';
import SuggestedWallet from './suggestedWallet';

class Home extends React.Component {

    render() {
        return (
            <div>
                <p className="image is-64x64">
                    <img src={require('../images/landingpage.jpeg')}/>
                </p>
            <div className="container">
                <SuggestedWallet/>
            </div>
                ----
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            
                        </div>
                    </div>
                </section>
            
            </div>
        );
    }
}

export default Home;