import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCGl56M5wLmHVNJRP5UImykkb7RTJkHSDk",
    authDomain: "resume-builder-d8c46.firebaseapp.com",
    projectId: "resume-builder-d8c46",
    storageBucket: "resume-builder-d8c46.appspot.com",
    messagingSenderId: "1068008125550",
    appId: "1:1068008125550:web:09bf64083bf870697c227f"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export  {
    storage, firebase as default
}