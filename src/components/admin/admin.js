import React from 'react';
import CreatePost from './createPost';
import CreateStock from './createStock';

class Admin extends React.Component{

    constructor(){
        super();

        this.state = {
            currentTab: 1
        }

        this.renderCreateNewPost = this.renderCreateNewPost.bind(this);
        this.tabs = [
            {title: "Posts"},
            {title: "Users"},
            {title: "DashBoard"}
        ]
    }

    renderCreateNewPost(){
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

    renderTabContent(){
        switch(state.currentTab){
            case 1:
                return this.renderCreateNewPost();
            default:
                return null;
        }
    }

    renderTabs(){
        return tabs.map((tab, index) =>{
            return(
                <li key={index} className="tab col s3">
                    <a onClick={()=> this.setState({currentTab: index})}>
                        {tab.title}
                    </a>
                </li>
            );
        })
    }
//todo!!
    render(){
            const {currentTab} = this.state;
        return(
            <div>
                {this.renderCreateNewPost()}
            </div>
        );
    }
}

export default Admin;

  // <div className="container">
            //     <ul id="tabs-swipe-demo" className="tabs">
            //         {this.renderTabs()}
            //     </ul>
            //     {this.renderTabContent()}
            // </div>