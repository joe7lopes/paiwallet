import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { startLogout } from '../../actions/auth_action';

class Header extends React.Component{

    renderAdminLinks = () =>(
        <li>
            <Link to="/admin">Admin</Link>
        </li>
    );
    
    renderLogout = () => (
        <li>
                <a onClick={this.props.startLogout}>Logout</a>
        </li>
    );
    
    render(){
        const { isAuthenticated, isAdmin } = this.props;
        console.log("render called");
        console.log("is auth", isAuthenticated);
        console.log("is admin", isAdmin);
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
                                    { isAdmin && this.renderAdminLinks()}
                                <li>
                                    <Link to="/disclaimer">Disclaimer</Link>
                                </li>
                                { isAuthenticated && this.renderLogout() }
                            </ul>
                        </div>
                    </nav>
                </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.user,
    isAdmin: (!!state.auth.user && state.auth.user.admin) || false
});

export default connect(mapStateToProps, mapDispatchToProps) (Header);