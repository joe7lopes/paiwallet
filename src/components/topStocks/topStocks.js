import React from 'react';
import StocksTable from './stocks_table';
import PostsList from './posts_list';
import Pagination from './pagination';
import { connect } from 'react-redux';
import {setCurrentPage} from '../../actions';

class TopStocks extends React.Component{

    constructor(){
        super()
        this.numberOfPostsPerPage = 3;
        this.handleOnPreviousPage = this.handleOnPreviousPage.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleOnNextPage = this.handleOnNextPage.bind(this);
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


        return (
            <div className="container">
                    <h4>Messages</h4>
                    <div className="row">
                        <div className="col s12 l7 pai-container blue lighten-5">
                            <div className="posts-container">
                                <PostsList/>
                            </div>
                            <div className="center">
                                <Pagination pages={pages} 
                                    activePage={currentPage} 
                                    pageHandler={this.handlePageClick} 
                                    previousPageHandler={this.handleOnPreviousPage} 
                                    nextPageHandler={this.handleOnNextPage}/>
                            </div>
                        </div>
                       
                        <div className="col s12 l5">
                            <div className="pai-container green lighten-1" style={{marginBottom: "20px"}}>
                                <h4>BUY</h4>
                                <StocksTable/>
                            </div>
                            <div className="pai-container red lighten-1">
                                <h4>Sell</h4>
                                <StocksTable/>
                            </div>
                        </div>
                        
                    </div>
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

export default connect(mapStateToProps,{setCurrentPage})(TopStocks);