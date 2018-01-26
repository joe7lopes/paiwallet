import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts} from '../../actions';
import Post from './post';
import {getTimeAgo, chunkArray } from './utils';

class PostsList extends React.Component {
    
    constructor(){
        super()
        this.numberOfPostsPerPage = 3;
    }

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        let { posts, currentPage }  = this.props;

       let pages = chunkArray(posts, this.numberOfPostsPerPage)
       
        let a = pages[currentPage-1] || [];

        return a.map(post => {
            //let date = getTimeAgo(message.date);
            let date = getTimeAgo(new Date());
             return (
                  <li key={post.id}><Post title={post.title} text={post.text} date={date}/></li>
             );
         });
    }

    handleOnNextPage() {
        this.setCurrentPage(1);
    }

    handleOnPreviousPage() {
        this.setCurrentPage(-1);
    }

    handlePageClick(pageNumber){
        this.props.setCurrentPage(pageNumber);
    }


    setCurrentPage(value) {
        let { currentPage } = this.props;
        this.props.setCurrentPage(currentPage + value);
    }

    render(){
        const { currentPage, posts } = this.props;
        const numberOfPosts = posts.length;
        const pages = Math.ceil(numberOfPosts/this.numberOfPostsPerPage);
        
        return(
            <div>
                {posts.length > 0 ? ( 
                    <div>
                        <div>
                            <ul>
                                {this.renderPosts()}
                            </ul>
                        </div>
                    </div>
                    ) : (<h4 className="teal-text">No posts to show</h4>)
                }
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
      posts: state.posts.posts,
      currentPage: state.posts.currentPage
    };
  }

export default connect(mapStateToProps,{fetchPosts})(PostsList);