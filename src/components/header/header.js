import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { startLogout } from '../../actions/auth_action';

export const Header = ({startLogout, isAuthenticated}) => {
    const renderLogin = (
        isAuthenticated &&
        <li>
            <a onClick={startLogout}>Logout</a>
        </li>
    )
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
                            {renderLogin}
                        </ul>
                    </div>
                </nav>
            </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps, mapDispatchToProps) (Header);