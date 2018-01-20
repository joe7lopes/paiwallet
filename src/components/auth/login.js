import React from 'react';

class Login extends React.Component{

    render(){
        return(
            <div className="pai-container blue lighten-5" style={{color: "teal"}}>
                  <form>
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
                        <div className="row">
                            <div className="col l12 center">
                                <div className="input-field col l3">
                                    <button className="btn waves-effect waves-light" type="submit" name="action">Login</button>
                                </div>
                                <div className="input-field col l9">
                                    <button className="btn waves-effect waves-light home-login-facebook-button" type="submit" name="action">Login with FaceBook</button>
                                </div>
                            </div>
                        </div>
                  </form>
            </div>
        );
    }
}

export default Login;