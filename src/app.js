import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import database, {firebase} from './firebase/firebase';
import { login, logout, fetchUsers } from './actions/users_action';

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
    database.ref(`users/${user.uid}`).on('value', snapshot => {
      store.dispatch(login(snapshot.val()));
    });

  } else {
    store.dispatch(logout());
  }
});