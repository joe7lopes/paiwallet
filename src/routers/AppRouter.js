import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../components/header';
import Home from '../components/home';
import Subscription from '../components/subscription/subscription';
import TopStocks from '../components/topStocks/topStocks';
import NewPost from '../components/topStocks/posts/newPost';

const AppRouter = () => (
    <Router>
        <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/subscription" component={Subscription}/>
        <Route path="/topstocks" component={TopStocks}/>
        <Route path="/new-post" component={NewPost}/>
        </div>
    </Router>
);

export default AppRouter;