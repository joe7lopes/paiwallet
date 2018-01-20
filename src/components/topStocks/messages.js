import React from 'react';
import Message from './message';

class Messages extends React.Component {

    render(){
        const maxMessagesPPage = 3;
        const activePage = 2;
        const paginationSize = 5;

        let adminMessages = [
            {id:1, title: "title1", text:"message1", date: new Date()},
            {id:2, title: "title1", text:"message2", date: new Date()},
            {id:3, title: "title1", text:"message3", date: new Date()},
            {id:4, title: "title1", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime, suscipit blanditiis officia consectetur nobis quam nemo inventore architecto, culpa iusto adipisci laborum repudiandae quibusdam tempore, magnam veritatis alias est.", date: new Date()},
        ]

        let messages = adminMessages.map(message => {
            let day = message.date.getDay();
            let month = message.date.getMonth();
            let year = message.date.getFullYear();
            let date = day+"/"+month+"/"+year;
            return (
                 <li key={message.id}><Message title={message.title} text={message.text} date={date}/></li>
            );
        });

        
        let pages = adminMessages.map((message, i) =>{
            let cssClass= (activePage == i) ? "active" : "waves-effect";

            return(
                    <li key={i} className={cssClass}><a href="#!">{i}</a></li>
            );
        });

        return(
            <div className="">
                <div>
                    <ul>
                        {messages}
                    </ul>
                </div>
                <div>
                    <ul className="pagination center">
                        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        {pages}
                        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Messages;