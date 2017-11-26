import React from 'react';
import CreateAccount from './CreateAccount';
class Subscription extends React.Component {

    render() {
        return (
            <section className="section">
                <div className="columns">
                    <div className="column is-half">
                        some tiles
                    </div>
                    <div className="column is-half">
                        <CreateAccount/>
                    </div>
                </div>  
            </section>
        );
    }
}

export default Subscription;