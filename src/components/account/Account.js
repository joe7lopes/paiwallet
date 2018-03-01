import React from 'react';
import { connect } from 'react-redux';
import AccountStatus from './AccountStatus';

const renderAccountData = (user) => (
    <div className="row">
      <div className="row">
        <div className="col s12 l6">
          <h5>Payment history</h5>
        </div>
        <div className= "col s12 l6">
          <div className="input-field col s6">
            <input id="first_name" type="text" readOnly value={user.firstName}/>
            <label className="active" htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" readOnly value={user.lastName}/>
            <label className="active" htmlFor="last_name">Last Name</label>
          </div>
              <div className="input-field col s12 l6">
                <input id="email" type="email" readOnly value={user.email}/>
                <label className="active" htmlFor="email">Email</label>
            </div>
        </div>
      </div>
  </div>
);

export const Account = ({user}) =>{
  return (
    <div className="container">
            <h2>Account</h2>
            <AccountStatus />
            {renderAccountData(user)}
    </div>
)};

const mapStateToProps = (state) => ({
    user: state.users.loggedInUser
});

export default connect(mapStateToProps, null) (Account);