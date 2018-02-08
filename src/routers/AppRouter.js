import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/header';
import Home from '../components/home';
import Subscription from '../components/subscription/subscription';
import TopStocks from '../components/topStocks/topStocks';
import Admin from '../components/admin/admin';
import NotFoundPage from '../components/notFoundPage';

const AppRouter = () => (
    <Router>
        <div>
        <Header/>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/subscription" component={Subscription}/>
            <Route path="/topstocks" component={TopStocks}/>
            <Route path="/admin" component={Admin}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </Router>
);

export default AppRouter;