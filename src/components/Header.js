import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
                <div className="nav-wrapper">
                    <nav role="navigation">
                        <div className="nav-wrapper container">
                            <a className="brand-logo">PaiWallet</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/subscription">Subscription</Link>
                                </li>
                                <li>
                                    <Link to="/topstocks">Top Stocks</Link>
                                </li>
                                <li>
                                    <Link to="/admin">Admin</Link>
                                </li>
                                <li>
                                    <Link to="/disclaimer">Disclaimer</Link>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
        );
    }
}

export default Header;