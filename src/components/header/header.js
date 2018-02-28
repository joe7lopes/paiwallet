import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { startLogout } from '../../actions/users_action';
import { Dropdown, NavItem, SideNav, SideNavItem, Button } from 'react-materialize';


const menuItems = [
    {title: "Home", link:'/'},
    {title: "Subscription", link:'/subscription'},
    {title: "Top Stocks", link:'/topstocks'},
    {title: "Disclaimer", link:'/disclaimer'}
]

class Header extends React.Component{

    renderLinks = () => {
        return menuItems.map(item =>{
            return (
                <li key={item.title}>
                    <NavLink to={item.link} activeClassName="active" >{item.title}</NavLink>
                </li>
            );
        });
    }

    renderSideBarLinks = () => {
        return menuItems.map(item =>{
            return (
                    <Link key={item.title} to={item.link} style={{padding: "0 32px"}}>{item.title}</Link>
            );
        })
    }

    renderAdminLinks = () =>(
        <li>
            <NavLink to="/admin">Admin</NavLink>
        </li>
    );
    
    renderAccount = () => (
        <li>
           <Dropdown trigger={
                <a>Account<i className="material-icons right">arrow_drop_down</i></a>
            }>
                <NavLink to='/account'>My Profile</NavLink>
                <NavItem divider />
                <a onClick={this.props.startLogout}>Logout</a>
            </Dropdown>
        </li>
    );
    
    render(){
        const { isAuthenticated, isAdmin } = this.props;
        return (
                <div className="nav-wrapper">
                    <nav role="navigation">
                        <div className="nav-wrapper container">
                            <a className="brand-logo">PaiWallet</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                { this.renderLinks() }
                                { isAdmin && this.renderAdminLinks() }
                                { isAuthenticated && this.renderAccount() }
                            </ul>
                                <SideNav
                                    trigger={<a href="" className="button-collapse"><i className="material-icons">menu</i></a>}
                                    options={{ closeOnClick: true }}
                                    >
                                    { this.renderSideBarLinks() }
                                    <SideNavItem divider />
                                    <SideNavItem subheader>Account</SideNavItem>
                                    <Link style={{padding: "0 32px"}} to='/account'>My Profile</Link>
                                    <a style={{padding: "0 32px"}} onClick={this.props.startLogout}>Logout</a>
                                    
                                </SideNav>
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
    isAuthenticated: !!state.users.loggedInUser,
    isAdmin: !!state.users.loggedInUser && !!state.users.loggedInUser.admin
});

export default connect(mapStateToProps, mapDispatchToProps) (Header);