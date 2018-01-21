import React from 'react';
import Message from './message';
import Pagination from './pagination';
import {getTimeAgo} from './timeago';

class Messages extends React.Component {

    render(){
        const maxNumberOfPostsPerPage = 3;
        const activePage = 5;
        const numberOfPages = 5;

        let adminMessages = [
            {id:1, title: "title1", text:"message1", date: new Date()},
            {id:2, title: "title1", text:"message2", date: new Date("01/21/2018")},
            {id:3, title: "title1", text:"message3", date: new Date("3/3/2017")},
            {id:4, title: "title1", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime, suscipit blanditiis officia consectetur nobis quam nemo inventore architecto, culpa iusto adipisci laborum repudiandae quibusdam tempore, magnam veritatis alias est.", date: new Date()},
        ]

        let messages = adminMessages.map(message => {
           let date = getTimeAgo(message.date);
            return (
                 <li key={message.id}><Message title={message.title} text={message.text} date={date}/></li>
            );
        });

        return(
            <div className="">
                <div>
                    <ul>
                        {messages}
                    </ul>
                </div>
                <div className="center">
                    <Pagination numberOfPages={numberOfPages} activePage={activePage}/>
                </div>
            </div>
        );
    }
}

export default Messages;