import { LOGIN, LOGOUT } from './types';

import database ,{
    firebase,
    googleAuthProvider
} from '../firebase/firebase';

const NODE= "users";

export const login = (user = {}) => {
    console.log("payload,", user);
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

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) =>{
                createUserIfNotExists(user, dispatch);
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
        console.log("snap val", snap.val())
        dispatch(login(snap.val()));
    }
        
};