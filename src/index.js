import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import Header from './components/Header';
import Home from './components/home';
import TopStocks from './components/TopStocks';
import Subscription from './components/Subscription';
import reducers from './reducers';
import 'bulma/css/bulma.css';
import './styles/style.css';
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
