import React from 'react';
import CreatePost from './createPost';
import CreateStock from './createStock';

class Admin extends React.Component{

    render(){
        return (
            <div className="container">
                <h4>Create new Post</h4>
                <div className="row">
                    <div className="col s12 l7">
                        <CreatePost />
                    </div>
                    <div className="col s12 l5">
                        <CreateStock />
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;