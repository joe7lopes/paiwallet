import { FETCH_MESSAGES } from './types';

export function fetchMessages() {
    
    let messages = [
        {id:1, title: "title1", text:"message1", date: new Date()},
        {id:2, title: "title1", text:"message2", date: new Date("01/21/2018")},
        {id:3, title: "title1", text:"message3", date: new Date("3/3/2017")},
        {id:4, title: "title1", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime, suscipit blanditiis officia consectetur nobis quam nemo inventore architecto, culpa iusto adipisci laborum repudiandae quibusdam tempore, magnam veritatis alias est.", date: new Date()},
    ]
    return {
        type: FETCH_MESSAGES,
        payload: messages
    }
}