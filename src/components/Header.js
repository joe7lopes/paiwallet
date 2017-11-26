import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <section className="section">
                <nav
                    className="navbar is-primary is-fixed-top"
                    role="navigation"
                    aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img
                                src="https://bulma.io/images/bulma-logo.png"
                                alt="Bulma: a modern CSS framework based on Flexbox"
                                width="112"
                                height="28"/>
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item"  to="/">Home</Link>
                            <Link className="navbar-item"  to="/topstocks">Top Stocks</Link>
                            <Link className="navbar-item"  to="/subscription">Subscription</Link>
                            <Link className="navbar-item"  to="/disclaimer">Disclaimer</Link>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <input className="input is-focused" type="text" placeholder="rich@gmail.com"/>
                                    </p>
                                    <p className="control">
                                        <input className="input is-focused" type="text" placeholder="Password"/>
                                    </p>
                                    <p className="control">
                                        <input className="button" type="submit" value="Login"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </section>
        );
    }
}

export default Header;