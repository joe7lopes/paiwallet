import React from 'react';
import { connect } from 'react-redux';
import AccountStatus from './AccountStatus';

const userDummy = {
    firstName: "joao",
    lastName: "Oliveira",
    email: "asdsd@asd.com"
}

const renderAccountData = (user) => (
    <div className="row white-text">
      <div className="row">
        <div className="col s12 l6">
          <h5>Payment history</h5>
        </div>
        <div className= "col s12 l6">
          <div className="input-field col s6">
            <input id="first_name" type="text" readOnly value={userDummy.firstName}/>
            <label className="active grey-text text-lighten-3" htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" readOnly value={userDummy.lastName}/>
            <label className="active grey-text text-lighten-3" htmlFor="last_name">Last Name</label>
          </div>
              <div className="input-field col s12 l6">
                <input id="email" type="email" readOnly value={userDummy.email}/>
                <label className="active grey-text text-lighten-3" htmlFor="email">Email</label>
            </div>
        </div>
      </div>
  </div>
);

export const Account = ({user}) =>(
    
    <div className="container">
            <h2>Account</h2>
            <AccountStatus />
            {renderAccountData(user)}
    </div>
)

const mapStateToProps = (state) => ({
    user: state.auth.user
});

export default connect(mapStateToProps, null) (Account);