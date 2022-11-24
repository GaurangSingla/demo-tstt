import firebase from 'firebase/compat';
import 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDCy0CmyWopNwe4ks-wex7Z5WRd7yveNYQ",
  authDomain: "card-4fe2c.firebaseapp.com",
  projectId: "card-4fe2c",
  storageBucket: "card-4fe2c.appspot.com",
  messagingSenderId: "535022068029",
  appId: "1:535022068029:web:1d29f149d708763c99e554",
  measurementId: "G-PLYPVTKCK2"
};

if(!firebase.apps.length){

    firebase.initializeApp(firebaseConfig)
  }
  
  export{firebase};