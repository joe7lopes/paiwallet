import {
    LOGIN,
    LOGOUT,
    LOGIN_ERROR,
    CLEAR_LOGIN_ERROR
} from './types';

import {
    firebase,
    googleAuthProvider,
    facebookAuthProvider
} from '../firebase/firebase';

export const login = (user = {}) => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const logout = (user = {}) => {
    return {
        type: LOGOUT
    }
}

export const loginError = (error = {}) => {
    return {
        type: LOGIN_ERROR,
        payload: error
    }
}

export const clearLoginError = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_LOGIN_ERROR,
        });
    };
}

export const startGoogleLogin = () => {
    console.log("start goodle login");
    return () => {
        console.log("start goodle login2");
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startFacebookLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    };
};

export const startEmailLogin = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(String(email), String(password))
            .then(data =>{
                dispatch(login(data));
            }).catch(error =>{
                dispatch(loginError(error))
            });
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};