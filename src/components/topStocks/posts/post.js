import React from 'react';

class Post extends React.Component {

    render(){

        const { title, text, date } = this.props;
        let buttonStyle = {
            position: "absolute",
            bottom: "35px",
            right:"10px"
        }
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

export default Post;