import { FETCH_USERS, EDIT_USER } from './types';
import database from '../firebase/firebase';

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

export const startEditUser = (user, updates) => {
    return (dispatch) => {
        return database.ref(`${NODE}/${user.uid}`).update(updates)
            .then(()=>{
                dispatch(editUser(user, updates));
            });
    }
}

export const  startFetchUsers = () =>{
    return (dispatch) =>{
       return database.ref(NODE).once('value')
            .then(snapshot =>{
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
}