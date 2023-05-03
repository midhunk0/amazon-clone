// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBEdikY58lBtg0--RwiqO2Sk1-pcLyn48",
    authDomain: "clone-cf2ca.firebaseapp.com",
    projectId: "clone-cf2ca",
    storageBucket: "clone-cf2ca.appspot.com",
    messagingSenderId: "538390955386",
    appId: "1:538390955386:web:bfdfb4ccb09bec1fcc82c3",
    measurementId: "G-DHS0BPN6RY"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};