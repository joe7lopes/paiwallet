import React from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions';
import Message from './message';
import Pagination from './pagination';
import {getTimeAgo} from './timeago';

class Messages extends React.Component {

    componentWillMount() {
        this.props.fetchMessages();
    }

    renderMessages() {
        let messages = this.props.messages;
        console.log(messages);
        return messages.map(message => {
            let date = getTimeAgo(message.date);
             return (
                  <li key={message.id}><Message title={message.title} text={message.text} date={date}/></li>
             );
         });
    }

    render(){
        const maxNumberOfPostsPerPage = 3;
        const activePage = 5;
        const numberOfPages = 5;

        return(
            <div className="">
                <div>
                    <ul>
                        {this.renderMessages()}
                    </ul>
                </div>
                <div className="center">
                    <Pagination numberOfPages={numberOfPages} activePage={activePage}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
      messages: state.messages,
    };
  }

export default connect(mapStateToProps,{fetchMessages})(Messages);