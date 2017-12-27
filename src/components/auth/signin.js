import React from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends React.Component{

    handleFormSubmit({email, password}){
        console.log(email, password);
        this.props.singninUser({ email, password });
    }

    render(){

        const { handleSubmit } = this.props;

        return (
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                    <Field name="email" type="email" component="input" placeholder="rich@gmail.com"/>
                    <Field name="password" type="password" component="input" placeholder="password"/>
                    <button type="submit">Sign in</button>
                </form>
        );
    }
}

export default reduxForm({
    form: 'signin'
})(Signin);