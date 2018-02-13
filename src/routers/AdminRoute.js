import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const  AdminRoute = ({
    isAdmin,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props)=>(
        isAdmin ? <Component {...props}/> :  <Redirect to="/"/>
    )}/>
);

const mapStateToProps = (state) =>({
    isAdmin: state.auth.user && state.auth.user.uid === "zZmKsV5OeWcPEZY5zZlW0eHKBCa2"
});

export default connect(mapStateToProps, undefined)(AdminRoute);