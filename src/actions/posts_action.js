import database from '../firebase/firebase';

import { 
    FETCH_POSTS,
    SET_CURRENT_PAGE,
    ADD_POST
    
} from './types';

const NODE = "posts";

export const fetchPosts = (posts = []) => {
    return {
        type: FETCH_POSTS,
        payload: posts
    }
}

export const addPost = (post = {}) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const startFetchPosts = () => {
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
                dispatch(fetchPosts(posts));
            });
    };

}

export function setCurrentPage(pageNumber){

    return {
        type: SET_CURRENT_PAGE,
        payload: pageNumber
    }
}


export const startAddPost = (postData = {}) => {
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
            dispatch(addPost(newPost));
        });
    };
};