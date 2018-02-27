import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import database, { firebase} from './firebase/firebase';
import { login, logout } from './actions/auth_action';
import { fetchPosts } from './actions/posts_action';
import $ from 'jquery/dist/jquery.js';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './styles/style.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
, document.getElementById('app'));


/* Firebase event listeners */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    //TODO, login user from users data.
    store.dispatch(login(user));
  } else {
    store.dispatch(logout());
  }
});
