import React from 'react';
import {Link} from 'react-router-dom';
import Signin from './auth/signin';

class Header extends React.Component {

    render() {
        return (
                <div className="nav-wrapper">
                    <nav role="navigation">
                        <div className="nav-wrapper container">
                            <a className="brand-logo" href="#">Logo</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/topstocks">Top Stocks</Link>
                                </li>
                                <li>
                                    <Link to="/disclaimer">Disclaimer</Link>
                                </li>
                                 <li>
                                    <form>
                                        <div className="row">
                                            <div className="input-field col" style={{paddingRight: "0px"}}>
                                                <input className="input-bordered" type="email" placeholder="rich@gmail.com"/>
                                            </div>
                                            <div className="input-field col">
                                                <input className="input-bordered" type="password" placeholder="Password"/>
                                            </div>
                                            <div className="input-field col">
                                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </li> 
                            </ul>
                        </div>

                    </nav>
                </div>
        );
    }
}

export default Header;