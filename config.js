import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDn4FjAgnAEJXA35OrTTxvAogQMKCiDpCU",
    authDomain: "e-ride-c2352.firebaseapp.com",
    projectId: "e-ride-c2352",
    storageBucket: "e-ride-c2352.appspot.com",
    messagingSenderId: "642912537244",
    appId: "1:642912537244:web:21aabe0a3b363bfeda7b59"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
