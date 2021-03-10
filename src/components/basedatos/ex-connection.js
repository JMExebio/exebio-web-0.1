import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBmXy0YJdWUTKfBge6sCxiJMYmFRfOIzZs",
    authDomain: "exebio-educacion.firebaseapp.com",
    databaseURL: "https://exebio-educacion.firebaseio.com",
    projectId: "exebio-educacion",
    storageBucket: "exebio-educacion.appspot.com",
    messagingSenderId: "588225536480",
    appId: "1:588225536480:web:1d87c755c668ecc1c9cb85",
    measurementId: "G-KECB8XS5T4"
  };
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
export const fs = fb.storage();
export const gloogleAuthProvider = new firebase.auth.GoogleAuthProvider();