import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const SubscriptionRoute = ({
    isAuthenticated,
    isSubscriptionPaid,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props)=> (
        isSubscriptionPaid ? (
            <Component {...props} />
        ):(
            isAuthenticated ? <Redirect to="/account"/> : <Redirect to="/subscription"/>
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.users.loggedInUser,
    isSubscriptionPaid: !!state.users.loggedInUser && !!state.users.loggedInUser.subscriptionActive
});

export default connect(mapStateToProps, undefined)(SubscriptionRoute);