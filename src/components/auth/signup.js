import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component{
    render(){
        return(
            <div className="pai-container blue lighten-5" style={{color: "teal"}}>
                <div className="row" style={{marginBottom: '0px', marginTop: '10px'}}>
                    <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12 m6">
                        <i className="material-icons prefix hide-on-med-and-down">account_circle</i>
                        <input id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s12 m6">
                        <input id="last_name" type="text" className="validate"/>
                        <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix hide-on-med-and-down">email</i>
                        <input id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m6">
                        <i className="material-icons prefix hide-on-med-and-down">locker</i>
                        <input id="pass1" type="password" className="validate"/>
                        <label htmlFor="pass1">password</label>
                        </div>
                        <div className="input-field col s12 m6">
                        <input id="pass2" type="password" className="validate"/>
                        <label htmlFor="pass2">password2</label>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col s12">
                                <div className="input-field">
                                    <button className="btn waves-effect waves-light fullWidth" type="submit" name="action" disabled>Sign up</button>
                                    <h5>At the moment only login with google is possible</h5>
                                    <div className="center">
                                        <Link to="/">Login with google</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </form>
              </div>
            </div>
        );
    }
}

export default Signup;