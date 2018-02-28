import { FETCH_USERS, EDIT_USER, LOGIN, LOGOUT } from './types';
import database, { firebase, googleAuthProvider } from '../firebase/firebase';

const NODE = 'users';

export const fetchUsers = (users = []) =>{
    return {
        type: FETCH_USERS,
        payload: users
    }
}

export const editUser = (user, updates) => {
    return {
        type: EDIT_USER,
        payload: {user, updates}
    }
}

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

export const startEditUser = (user, updates) => {
    return (dispatch) => {
        return database.ref(`${NODE}/${user.uid}`).update(updates)
            .then(()=>{
                dispatch(editUser(user, updates));
            });
    }
};

export const  startFetchUsers = () =>{
    return (dispatch) =>{
       return database.ref(NODE).on('value', snapshot =>{
                let users = [];
                snapshot.forEach(snap => {
                    users.push({
                        uid: snap.key,
                        ...snap.val()
                    });
                });

                dispatch(fetchUsers(users));
            });
    }
};

export const startGoogleLogin = () => {
    return (dispatch) => {
       return firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) =>{
                createUserIfNotExists(user, dispatch);
            });
    };
};

export const startLogout = () => {
    return (dispatch) => {
        return firebase.auth().signOut().then(()=>{
            dispatch(logout());
        })
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
        database.ref(`${NODE}/${user.uid}`).set(user).then( () => {
            dispatch(login(user))
        });
    }else{
        dispatch(login(snap.val()));
    }
        
};