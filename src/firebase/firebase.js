import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export  {
    storage, firebase as default
}