import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkvc7uE8kpkEQU0OVz-JryDBxwxOPpico",
    authDomain: "crwn-db-3d26e.firebaseapp.com",
    databaseURL: "https://crwn-db-3d26e.firebaseio.com",
    projectId: "crwn-db-3d26e",
    storageBucket: "crwn-db-3d26e.appspot.com",
    messagingSenderId: "540409556938",
    appId: "1:540409556938:web:55ddeda8dba4ff907ce933"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;