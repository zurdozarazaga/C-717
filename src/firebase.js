import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAO8nr3BE_SN1ffBZaUqodo9_WRy7l9hGw",
    authDomain: "c-717-58cb9.firebaseapp.com",
    projectId: "c-717-58cb9",
    storageBucket: "c-717-58cb9.appspot.com",
    messagingSenderId: "434164082676",
    appId: "1:434164082676:web:3ef6e59ac3b022f4adbba1",
    measurementId: "G-SXY9NM26FH"
  };
// Initialize Firebase

export default firebase.initializeApp(firebaseConfig);