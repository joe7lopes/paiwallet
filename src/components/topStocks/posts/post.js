import React from 'react';

class Post extends React.Component {

    render(){

        const { title, text, date, onRemove } = this.props;
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
                            <button 
                                className="btn-floating btn-small waves-effect waves-light red"
                                style={buttonStyle}
                                onClick={onRemove}>
                                <i className="material-icons">remove</i>
                            </button>
                    </div>
                </div>
        );
    }
}

export default Post;