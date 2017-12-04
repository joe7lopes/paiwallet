import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import $ from 'jquery/dist/jquery.js';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './styles/style.css';

import Header from './components/Header';
import Home from './components/home/home';
import TopStocks from './components/TopStocks';
import Subscription from './components/Subscription';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/topstocks" component={TopStocks}/>
      <Route path="/subscription" component={Subscription}/>
    </div>
  </Router>
</Provider>, document.getElementById('app'));
