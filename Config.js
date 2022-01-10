import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAU2yIijgUm1wN3Wau8gkXWA66IN18CQC0",
  authDomain: "sports-app-51e3a.firebaseapp.com",
  databaseURL: "https://sports-app-51e3a-default-rtdb.firebaseio.com",
  projectId: "sports-app-51e3a",
  storageBucket: "sports-app-51e3a.appspot.com",
  messagingSenderId: "922539010170",
  appId: "1:922539010170:web:d289c4c8ddc8c364db33c3",
  measurementId: "G-DEPGK3EJ6Q"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig) 
}

export default firebase.firestore();