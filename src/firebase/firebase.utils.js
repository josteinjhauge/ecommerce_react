import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMzf3QF5uYcba1tAa2n5gsELRoeZqrWUM",
    authDomain: "crown-738ba.firebaseapp.com",
    projectId: "crown-738ba",
    storageBucket: "crown-738ba.appspot.com",
    messagingSenderId: "758015148363",
    appId: "1:758015148363:web:55783e577c2a78ec3928ce",
    measurementId: "G-9BP0G3MSQQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;