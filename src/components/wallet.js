import React from 'react';

class Wallet extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={require('../images/wallstSmall.png')}/>
                    <span className="card-title">Conservative</span>
                    <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">add</i>
                    </a>
                </div>
                <div className="card-content">
                    <ul>
                        <li>Ideal for people who are not risk tolerant</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Wallet;