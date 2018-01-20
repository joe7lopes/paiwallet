import React from 'react';

class Message extends React.Component {

    render(){

        const { title, text, date } = this.props;
        
        return(
                <div className="card pai-container white black-text">
                    <div className="card-content">
                        <span className="card-title">{title}</span>
                        <p>{text}</p>
                    </div>
                    <div className="card-action">
                        <div>{date}</div>
                    </div>
                </div>
        );
    }
}

export default Message;