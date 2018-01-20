import React from 'react';
import Message from './message';

class Messages extends React.Component {

    render(){

        let adminMessages = [
            {id:1, title: "title1", text:"message1", date: new Date()},
            {id:2, title: "title1", text:"message2", date: new Date()},
            {id:3, title: "title1", text:"message3", date: new Date()},
        ]

        let messages = adminMessages.map(message => {
            let day = message.date.getDay();
            let month = message.date.getMonth();
            let year = message.date.getFullYear();
            let date = day+"/"+month+"/"+year;
            return (
                 <li key={message.id}><Message message={message.title} text={message.text} date={date}/></li>
            );
        });

        return(
            <div>
                <ul>
                    {messages}
                </ul>
            </div>
        );
    }
}

export default Messages;