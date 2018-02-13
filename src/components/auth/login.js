import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth_action';

export const Login = ({startLogin}) => (
    <div className="pai-container blue lighten-5" style={{color: "teal"}}>
            <form onSubmit={(e)=>{e.preventdefault();}}>
                <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input id="email" type="text" className="validate"/>
                <label htmlFor="email">email</label>
                </div>
                <div className="input-field">
                <i className="material-icons prefix">lock_outline</i>
                <input id="pass1" type="password" className="validate"/>
                <label htmlFor="pass1">password</label>
                </div>
                </form>
                <div className="row">
                    <div className="col l12 center">
                        <div className="input-field col l3">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Login</button>
                        </div>
                        <div className="input-field col l9">
                            <button className="btn waves-effect waves-light home-login-facebook-button" 
                                name="action"
                                onClick={startLogin}>
                                Login with FaceBook
                            </button>
                        </div>
                    </div>
                </div>
                
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);