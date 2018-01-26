import { FETCH_POSTS, SET_CURRENT_PAGE } from './types';
import axios from 'axios';

export function fetchPosts() {

    // const request = axios.get("http://jsonplaceholder.typicode.com/posts");

    let request = [
        {id:1, title: "title1", text:"message1", date: new Date()},
        {id:2, title: "title2", text:"message2", date: new Date("01/21/2018")},
        {id:3, title: "title3", text:"message3", date: new Date("3/3/2017")},
        {id:4, title: "title4", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime, suscipit blanditiis officia consectetur nobis quam nemo inventore architecto, culpa iusto adipisci laborum repudiandae quibusdam tempore, magnam veritatis alias est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime, suscipit blanditiis officia consectetur nobis quam nemo inventore architecto, culpa iusto adipisci laborum repudiandae quibusdam tempore, magnam veritatis alias est.", date: new Date()},
        {id:5, title: "title5", text:"message1", date: new Date()},
        {id:6, title: "title6", text:"message2", date: new Date("01/21/2018")},
        {id:7, title: "title7", text:"message2", date: new Date("01/21/2018")}
    ]

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function setCurrentPage(pageNumber){

    return {
        type: SET_CURRENT_PAGE,
        payload: pageNumber
    }
}