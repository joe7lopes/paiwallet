import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDVYAgq3tOUEzxV6Qtnshk_YxPodcfhCwg",
    authDomain: "paiwallet-f96f6.firebaseapp.com",
    databaseURL: "https://paiwallet-f96f6.firebaseio.com",
    projectId: "paiwallet-f96f6",
    storageBucket: "paiwallet-f96f6.appspot.com",
    messagingSenderId: "515391634821"
  };

firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, facebookAuthProvider };
export default database;


