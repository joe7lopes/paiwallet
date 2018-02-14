import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth_action';
import $ from 'jquery/dist/jquery.js';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './styles/style.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
  if (user){
    store.dispatch(login(user));
    history.push('/topstocks');
  }else{
    store.dispatch(logout());
    if(history.location.pathname === '/topstocks'){
      history.push('/');
    }
  }
});