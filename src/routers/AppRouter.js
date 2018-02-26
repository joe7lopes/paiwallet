import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Header from '../components/header/header';
import Home from '../components/home';
import Subscription from '../components/subscription/subscription';
import TopStocks from '../components/topStocks/topStocks';
import Admin from '../components/admin/admin';
import NotFoundPage from '../components/notFoundPage';
import Account from '../components/account/Account';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
        <Header/>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/subscription" component={Subscription}/>
            <PrivateRoute path="/topstocks" component={TopStocks}/>
            <PrivateRoute path="/account" component={Account}/>
            <AdminRoute path="/admin" component={Admin}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </Router>
);

export default AppRouter;