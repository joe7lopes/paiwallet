import React from 'react';
import { connect } from 'react-redux';
import { startFetchPosts } from '../../../actions/posts_action';
import Post from './post';
import Pagination from './pagination';
import { getTimeAgo, chunkArray } from '../utils';

class PostsList extends React.Component {

    constructor() {
        super();

        this.numberOfPostsPerPage = 3;
        this.handleOnPreviousPage = this.handleOnPreviousPage.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleOnNextPage = this.handleOnNextPage.bind(this);
        this.state = {
            currentPage: 1
        }
    }

    componentWillMount() {
        this.props.startFetchPosts();
    }

    handleOnNextPage() {
        this.setCurrentPage(1);
    }

    handleOnPreviousPage() {
        this.setCurrentPage(-1);
    }

    handlePageClick(currentPage) {
        this.setState({currentPage})
    }

    setCurrentPage(value) {
        let currentPage = this.state.currentPage + value;
        this.setState({currentPage});
    }

    getPages(){
        let {posts} = this.props;
        let sortedPosts = [].concat(posts)
            .sort((post1, post2) => post1.date < post2.date)
        return chunkArray(sortedPosts, this.numberOfPostsPerPage);
    }

    renderPosts() {
        const {currentPage} = this.state;
        let pages = this.getPages();
        let postsPerPage = pages[currentPage - 1] || [];
        
        return postsPerPage.map(post => {
            let date = new Date(post.date);
            let postDate = getTimeAgo(date);
            return (
                <li key={post.id}><Post title={post.title} text={post.text} date={postDate} /></li>
            );
        });
    }

    render() {
        const {currentPage} = this.state;
        let pages = this.getPages();
        return (
            <div>
                <div className="posts-container">
                {pages.length > 0 ? (
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
                <div className="center">
                    <Pagination numberOfpages={pages.length}
                                activePage={currentPage}
                                pageHandler={this.handlePageClick}
                                previousPageHandler={this.handleOnPreviousPage}
                                nextPageHandler={this.handleOnNextPage}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => ({
    startFetchPosts: () => dispatch(startFetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);