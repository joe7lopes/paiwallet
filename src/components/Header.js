import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
                <div className="nav-wrapper container">
                    <nav className="white black-text text-darken-2" role="navigation">
                        <div className="nav-wrapper">
                            <a className="brand-logo" href="#">Logo</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/topstocks">Top Stocks</Link>
                                </li>
                                <li>
                                    <Link to="/subscription">Subscription</Link>
                                </li>
                                <li>
                                    <Link to="/disclaimer">Disclaimer</Link>
                                </li>
                                {/* <li>
                                    <input id="userName" type="text" placeholder="rich@gmail.com"/>
                                </li>
                                <li>
                                    <input id="userName" type="password" placeholder="password"/>
                                </li>
                                <li>
                                    <a className="waves-effect waves-light btn">Login</a>
                                </li> */}
                            </ul>
                            <ul id="nav-mobile" className="side-nav">
                                <li>
                                    <a href="#">Navbar Link</a>
                                </li>
                            </ul>
                            <a href="#" data-activates="nav-mobile" className="button-collapse">
                                <i className="material-icons">menu</i>
                            </a>

                        </div>

                    </nav>
                </div>
        );
    }
}

export default Header;