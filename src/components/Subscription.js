import React from 'react';
import CreateAccount from './CreateAccount';
class Subscription extends React.Component {

    render() {
        return (
            <section className="section">
                <div className="container is-fluid">
                    <div className="columns">
                        <div className="column is-half">
                            <div className="content">
                                <h1>Hello World</h1>
                                <p>Lorem ipsum<sup>
                                        <a>[1]</a>
                                    </sup>
                                    dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
                                    eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut
                                    vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum
                                    mattis neque. Sub<sub>script</sub>
                                    works as well!</p>
                                <h2>Price</h2>

                                <div className="tile">
                                    <article className="box notification is-primary">
                                        <p className="title">Winner wallet</p>
                                        <p className="subtitle">Only 5 Euros monthly to grant you access to:</p>
                                        <div className="content">
                                            <ul>
                                                <li>Top Stocks</li>
                                                <li>Automatic updates</li>
                                                <li>Min. 5% return</li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>

                            </div>
                        </div>
                        <div className="column is-half">
                            <CreateAccount/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Subscription;