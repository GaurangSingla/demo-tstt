import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC9-sXGEGZYKtUgWGBsnjNMTtkcx-0_x4M",
    authDomain: "signup-fe9e3.firebaseapp.com",
    projectId: "signup-fe9e3",
    storageBucket: "signup-fe9e3.appspot.com",
    messagingSenderId: "379090293335",
    appId: "1:379090293335:web:a9cf258a1cacea1a424912"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
//const db = firebase.firestore();
export {firebase};