import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5RZorSvd0Vqho3zr68BbR4ywUrg_z2mM",
  authDomain: "eduar-5dcad.firebaseapp.com",
  databaseURL: "https://eduar-5dcad.firebaseio.com",
  projectId: "eduar-5dcad",
  storageBucket: "eduar-5dcad.appspot.com",
  messagingSenderId: "213508622109",
  appId: "1:213508622109:web:70f5d81eab60b7098d03f4",
  measurementId: "G-X22HCJ8CNL"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };
