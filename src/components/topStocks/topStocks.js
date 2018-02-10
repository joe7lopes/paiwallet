import React from 'react';
import {connect} from 'react-redux';
import PostsList from './posts/posts_list';
import Pagination from './posts/pagination';
import Stocks from './stocks/stocks';

class TopStocks extends React.Component {

    render() {
        return (
            <div className="container">
                <h4>Messages</h4>
                <div className="row">
                    <div className="col s12 l7 pai-container blue lighten-5">
                        <PostsList/>
                    </div>

                    <div className="col s12 l5">
                        <Stocks/>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        posts: state
    };
}

export default connect(mapStateToProps, null)(TopStocks);