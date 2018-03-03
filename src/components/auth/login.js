import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    startGoogleLogin,
} from '../../actions/users_action';

class Login extends React.Component{

    render(){
        const { startGoogleLogin } = this.props;

        return(
            <div className="pai-container blue lighten-5" style={{color: "teal"}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            required
                            disabled/>
                        <label htmlFor="email">email</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">lock_outline</i>
                        <input 
                            id="pass" 
                            name="password" 
                            type="password" 
                            className="validate"
                            required
                            disabled/>
                        <label htmlFor="pass" data-error="wrong">password</label>
                    </div>
                    <div className="row">
                        <div className="col s12 l8">
                            <button type="submit" className="btn waves-effect waves-light fullWidth" disabled>
                                Login
                            </button>
                        </div>
                        <div className="col s12 l4">
                            <Link to='/subscription'>Create account</Link>
                        </div>
                    </div>
                </form>
                <div className="input-field grey-text alternative-login-text">
                    <span>Or Login With</span>
                </div>
                <div className="row">
                    <div className="col s12 l6">
                        <a className="waves-effect waves-light btn red darken-1 fullWidth"
                            onClick={startGoogleLogin}>
                            <i className="material-icons right">add</i>
                                Google
                        </a>
                    </div>
                    <div className="col s12 l6">
                        <a className="waves-effect waves-light btn blue darken-2 fullWidth"
                             disabled>
                            <i className="material-icons right">face</i>
                            FaceBook
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);