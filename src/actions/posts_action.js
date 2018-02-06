import database from '../firebase/firebase';

import { 
    FETCH_POSTS,
    SET_CURRENT_PAGE,
    ADD_POST
    
} from './types';

const NODE = "posts";

export function fetchPosts() {
    return (dispatch) => {
        database.ref(NODE).once('value')
            .then((snapshot) => {
                let posts = [];
                snapshot.forEach(childSnapshot => {
                    posts.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                
                dispatch({
                    type: FETCH_POSTS,
                    payload: posts
                });

            }).catch(e=>{
                dispatch({
                    type: FETCH_POSTS,
                    payload: []
                });
            });

    }

}

export function setCurrentPage(pageNumber){

    return {
        type: SET_CURRENT_PAGE,
        payload: pageNumber
    }
}

export function addPost(postData = {}) {
    return (dispatch) => {
        const {
            title = '',
            text = '',
            date = new Date().getTime()
        } = postData;

        const post = { title, text, date};

        database.ref(NODE).push(post).then((ref) => {
            let newPost = {
                id: ref.key,
                ...post
            }
            dispatch({
                type: ADD_POST,
                payload: newPost
            });
        });
    };
};