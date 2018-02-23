import {
    LOGIN,
    LOGOUT,
    LOGIN_ERROR,
    CLEAR_LOGIN_ERROR
} from './types';

import database ,{
    firebase,
    googleAuthProvider,
    facebookAuthProvider
} from '../firebase/firebase';

const NODE= "users";

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
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) =>{
                createUserIfNotExists(user, dispatch);
            });
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

const createUserIfNotExists = async (firebaseUser, dispatch) =>{
    const snap = await database.ref(`${NODE}/${firebaseUser.uid}`).once('value');
    
    if(!snap.val()) {
        let user = {
            subscriptionActive: false,
            uid: firebaseUser.uid,
            email: firebaseUser.email
          }
        database.ref(`${NODE}/${user.uid}`).set(user)
            .then(dispatch(login(user)));
    }else{
        dispatch(login(snap.val()));
    }
        
};