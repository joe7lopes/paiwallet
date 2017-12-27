import React from 'react';
import {Link} from 'react-router-dom';
import Signin from './auth/signin';

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
                                 <li>
                                   <Signin/>
                                </li> 
                            </ul>
                        </div>

                    </nav>
                </div>
        );
    }
}

export default Header;