import React from 'react';

class CreateAccount extends React.Component {

    render() {
        return (
            <section className="hero is-light">
                <div className="hero-body">

                    <h1 className="title">
                        Create Account
                    </h1>
                    <div className="field is-grouped">
                        <div className="control">
                            <input className="input" type="text" placeholder="First name"/>
                        </div>
                        <div className="control">
                            <input className="input" type="text" placeholder="Surname"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" type="password" placeholder="New Password"/>
                        </div>
                    </div>
                    <a className="button is-success is-medium">Success</a>
                </div>
            </section>
        );
    }
}

export default CreateAccount;