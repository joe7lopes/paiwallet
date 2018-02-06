import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import ReduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import $ from 'jquery/dist/jquery.js';
import './firebase/firebase';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './styles/style.css';

import Header from './components/header';
import Home from './components/home';
import Subscription from './components/subscription/subscription';
import TopStocks from './components/topStocks/topStocks';
import NewPost from './components/topStocks/posts/newPost';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/subscription" component={Subscription}/>
      <Route path="/topstocks" component={TopStocks}/>
      <Route path="/new-post" component={NewPost}/>
    </div>
  </Router>
</Provider>, document.getElementById('app'));
