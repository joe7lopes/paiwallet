import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    startGoogleLogin,
    startFacebookLogin,
    startEmailLogin,
    clearLoginError
} from '../../actions/auth_action';

class Login extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: '',
            emailError:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderError = this.renderError.bind(this);
    }

    componentWillReceiveProps(props){
        const {error} = props
        if(error.code === 'auth/invalid-email'){
            let emailError = error.message;
            this.setState({emailError});
        }
    }

    handleInputChange(event){
        this.clearErros()
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    clearErros(){
        this.setState({emailError: ''});
    }

    handleSubmit(e){
        e.preventDefault();
        const { email, password } = this.state;
        this.props.startEmailLogin(email, password);
    }

    renderError(){
        const { error } = this.props;
        if (error){
            return this.getHTMLForError(error);
        }
    }

    getHTMLForError(error){
        if(error.code === 'auth/user-not-found'){
            return (
                <p className="red-text">User does not exist.
                    &nbsp;<Link to="/subscription" onClick={this.props.clearLoginError}>Create Account!</Link>
                </p>
            )
        }
    }

    render(){

        const { email, password, emailError } = this.state;
        const { startGoogleLogin, startFacebookLogin } = this.props;

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
                            className={emailError ? "invalid": "validate"} 
                            value={email} 
                            onChange={this.handleInputChange}/>
                        <label htmlFor="email" data-error={emailError}>email</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">lock_outline</i>
                        <input 
                            id="pass" 
                            name="password" 
                            type="password" 
                            className="validate"
                            required
                            value={password} 
                            onChange={this.handleInputChange}/>
                        <label htmlFor="pass" data-error="wrong">password</label>
                    </div>
                    <div className="input-field">
                        {this.renderError()}
                        <button type="submit" className="btn waves-effect waves-light fullWidth">
                            Login
                        </button>
                    </div>
                </form>
                <div className="input-field grey-text alternative-login-text">
                    Or Login With
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
                            onClick={startFacebookLogin}>
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
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin()),
    startEmailLogin: (email, password) => dispatch(startEmailLogin(email, password)),
    clearLoginError: () => dispatch(clearLoginError())
});

const mapStateToProps = (state) => {
    return {
        error: state.auth.errors
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);